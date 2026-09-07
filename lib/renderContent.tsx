import type { ReactNode } from 'react'

/** Bold and italic spans inside a block of note copy. */
const renderInline = (text: string): ReactNode[] =>
  text.split(/(\*\*.*?\*\*|\*.*?\*)/).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>
    }

    return part
  })

/**
 * The small subset of Markdown the notes are written in: two heading levels,
 * ordered and unordered lists, a rule, and paragraphs. Blocks are separated by
 * a blank line.
 */
export const renderContent = (content: string): ReactNode[] =>
  content.split('\n\n').map((block, index) => {
    if (block === '---') {
      return <hr key={index} className="article-divider" />
    }

    if (block.startsWith('### ')) {
      return <h3 key={index}>{block.replace('### ', '')}</h3>
    }

    if (block.startsWith('## ')) {
      return <h2 key={index}>{block.replace('## ', '')}</h2>
    }

    if (/^\d+\.\s/.test(block)) {
      return (
        <ol key={index}>
          {block.split('\n').filter(Boolean).map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item.replace(/^\d+\.\s/, ''))}</li>
          ))}
        </ol>
      )
    }

    if (block.startsWith('- ')) {
      return (
        <ul key={index}>
          {block.split('\n').filter(Boolean).map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item.replace(/^-\s/, ''))}</li>
          ))}
        </ul>
      )
    }

    return <p key={index}>{renderInline(block)}</p>
  })
