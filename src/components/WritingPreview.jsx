import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogPosts } from './BlogData'

const WritingPreview = () => {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="writing-section" aria-labelledby="writing-preview-title">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="writing-heading"
        >
          <div>
            <p className="section-label">Writing</p>
            <h2 id="writing-preview-title">Notes from along the way.</h2>
            <p>Life, AI, tools, workflows, and whatever I’m learning.</p>
          </div>
          <Link to="/writings" className="text-link writing-all-link">
            Open writing <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        {latestPosts.length > 0 ? (
          <div className="writing-list">
            {latestPosts.map((post) => (
              <Link key={post.id} to={`/writings/${post.id}`} className="writing-row">
                <span>{post.date}</span>
                <strong>{post.title}</strong>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        ) : (
          <Link to="/writings" className="writing-row writing-empty">
            <span>Coming soon</span>
            <strong>First note in progress.</strong>
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  )
}

export default WritingPreview
