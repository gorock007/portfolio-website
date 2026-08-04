import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogPosts } from '../components/BlogData'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

const Blog = () => {
  return (
    <div className="site-shell min-h-screen">
      <PageTitle title="Writing — Gorock Shetty" />
      <Navbar />

      <main id="main" tabIndex="-1" className="page-container writing-page">
        <Link to="/" className="back-link">
          <span aria-hidden="true">←</span> Home
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="writing-page-header"
        >
          <p className="section-label">Notebook</p>
          <h1>Writ<em>ing.</em></h1>
          <p>Notes on life, AI, tools, workflows, and whatever I’m learning along the way.</p>
        </motion.header>

        {blogPosts.length === 0 ? (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="empty-state"
            aria-label="No published writing yet"
          >
            <span>Coming soon</span>
            <div>
              <h2>First note in progress.</h2>
              <p>I’m giving it the time it deserves. It’ll appear here when it’s ready.</p>
            </div>
          </motion.section>
        ) : (
          <div className="post-index">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 + index * 0.06 }}
              >
                <Link to={`/writings/${post.id}`} className="post-index-row">
                  <span className="post-index-date">{post.date}</span>
                  <div className="post-index-copy">
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                  </div>
                  <span aria-hidden="true">↗</span>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Blog
