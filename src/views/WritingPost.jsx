import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Tile from '../components/Tile'
import TileGrid from '../components/TileGrid'
import { blogPosts } from '../data/writing'

const renderInline = (text) =>
  text.split(/(\*\*.*?\*\*|\*.*?\*)/).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>
    }

    return part
  })

const renderContent = (content) =>
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

const WritingPost = () => {
  const { id } = useParams()
  const post = blogPosts.find((entry) => String(entry.id) === id)

  if (!post) {
    return (
      <Layout>
        <PageTitle title="Note not found — Gorock Shetty" />
        <TileGrid>
          <Tile size="wide">
            <div className="not-found">
              <p className="stat-label">404</p>
              <h1 className="page-h1">Note not found.</h1>
              <p className="page-h2">This note doesn’t exist yet, or it may have moved.</p>
              <Link className="pill-button" to="/writings">
                All writing <span className="link-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </Tile>
        </TileGrid>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageTitle title={`${post.title} — Gorock Shetty`} />

      <article className="article">
        <Link to="/writings" className="back-link">
          <span aria-hidden="true">←</span> All writing
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <header className="article-header">
            <div className="article-tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <h1 className="article-title">{post.title}</h1>

            <p className="article-byline">
              <strong>Gorock Shetty</strong>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </p>
          </header>

          {post.coverImage && (
            <figure className="article-cover">
              <img src={post.coverImage} alt={post.coverImageAlt || ''} />
            </figure>
          )}

          <div className="article-body">{renderContent(post.content)}</div>

          {post.sourceUrl && (
            <aside className="article-source">
              <p>Source of inspiration</p>
              <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer">
                {post.sourceLabel || 'Read the original post'}{' '}
                <span className="link-arrow" aria-hidden="true">↗</span>
              </a>
            </aside>
          )}
        </motion.div>

        <div className="article-bottom">
          <Link to="/writings" className="back-link">
            <span aria-hidden="true">←</span> All writing
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export default WritingPost
