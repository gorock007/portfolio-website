import Tile from '../Tile'

const WritingTile = ({ post }) => {
  if (!post) {
    return (
      <Tile size="sm" to="/writings">
        <div className="empty-state">
          <p className="stat-label">Writing</p>
          <p className="writing-title">First note in progress.</p>
          <p className="writing-excerpt">It’ll appear here when it’s ready.</p>
        </div>
      </Tile>
    )
  }

  return (
    <Tile size="sm" to={`/writings/${post.id}`}>
      <div className="stat-tile">
        <p className="stat-label">Latest writing</p>
        <div>
          <p className="writing-date">{post.date}</p>
          <h2 className="writing-title">{post.title}</h2>
        </div>
        <p className="project-url">
          Read <span className="link-arrow" aria-hidden="true">→</span>
        </p>
      </div>
    </Tile>
  )
}

export default WritingTile
