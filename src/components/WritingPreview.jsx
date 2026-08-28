import { Link } from 'react-router-dom'
import { blogPosts } from './BlogData'

const WritingPreview = () => {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="revamp-writing" aria-labelledby="writing-preview-title">
      <div className="revamp-container">
        <header className="revamp-section-head revamp-writing-head">
          <h2 id="writing-preview-title">Writing.</h2>
          <Link to="/writings" className="ink-link">All writing <span aria-hidden="true">→</span></Link>
        </header>

        {latestPosts.length > 0 ? (
          <div className="revamp-writing-list">
            {latestPosts.map((post) => (
              <Link key={post.id} to={`/writings/${post.id}`} className="revamp-writing-row">
                <span>{post.date}</span>
                <strong>{post.title}</strong>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        ) : (
          <Link to="/writings" className="revamp-writing-row">
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
