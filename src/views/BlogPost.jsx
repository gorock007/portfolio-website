import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../components/BlogData'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

const renderInline = (text) => (
  text.split(/(\*\*.*?\*\*)/).map((part, index) => (
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part
  ))
)

const renderContent = (content) => (
  content.split('\n\n').map((block, index) => {
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
)

const BlogPost = () => {
  const { id } = useParams()
  const post = blogPosts.find((entry) => String(entry.id) === id)

  if (!post) {
    return (
      <div className="site-shell min-h-screen">
        <PageTitle title="Post not found — Gorock Shetty" />
        <Navbar />
        <main id="main" tabIndex="-1" className="page-container not-found-page">
          <p className="section-label">404</p>
          <h1>Note not found.</h1>
          <p>This note doesn’t exist yet, or it may have moved.</p>
          <Link to="/writings" className="button button-primary">Back to writing</Link>
        </main>
      </div>
    )
  }

  return (
    <div className="site-shell min-h-screen">
      <PageTitle title={`${post.title} — Gorock Shetty`} />
      <Navbar />

      <main id="main" tabIndex="-1" className="page-container article-page">
        <Link to="/writings" className="back-link">
          <span aria-hidden="true">←</span> All writing
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="article-header">
            <div className="article-tags">
              {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <h1 className="article-title">{post.title}</h1>
            <div className="article-byline">
              <strong>Gorock Shetty</strong>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="article-body">{renderContent(post.content)}</div>
        </motion.article>

        <div className="article-bottom">
          <Link to="/writings" className="back-link">
            <span aria-hidden="true">←</span> All writing
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default BlogPost
