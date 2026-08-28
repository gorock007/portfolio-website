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

      <main id="main" tabIndex="-1" className="revamp-container content-index-page">
        <Link to="/" className="revamp-back-link">
          <span aria-hidden="true">←</span> Home
        </Link>

        <header className="content-index-header">
          <h1>Writing.</h1>
          <p>Notes on life, AI, tools, workflows, and whatever I’m learning along the way.</p>
        </header>

        {blogPosts.length === 0 ? (
          <section
            className="content-empty-state"
            aria-label="No published writing yet"
          >
            <span>Coming soon</span>
            <div>
              <h2>First note in progress.</h2>
              <p>I’m giving it the time it deserves. It’ll appear here when it’s ready.</p>
            </div>
          </section>
        ) : (
          <div className="post-index">
            {blogPosts.map((post) => (
              <article key={post.id}>
                <Link to={`/writings/${post.id}`} className="revamp-post-index-row">
                  <span className="post-index-date">{post.date}</span>
                  <div className="post-index-copy">
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                  </div>
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Blog
