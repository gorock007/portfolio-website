import { Link } from 'react-router-dom'

const Row = ({ index, title, description, meta, children }) => (
  <>
    <span className="list-index" aria-hidden="true">
      {String(index + 1).padStart(2, '0')}
    </span>
    <div>
      <span className="list-title">{title}</span>
      {description && <p className="list-desc">{description}</p>}
    </div>
    <span className="list-meta">
      {meta} <span className="link-arrow" aria-hidden="true">{children}</span>
    </span>
  </>
)

/** The list counterpart to the bento grid — same content, one line each. */
const ListView = ({ items }) => (
  <div className="tile-grid" data-view="list">
    {items.map((item, index) =>
      item.to ? (
        <Link key={item.id} to={item.to} className="list-row">
          <Row index={index} title={item.title} description={item.description} meta={item.meta}>
            →
          </Row>
        </Link>
      ) : (
        <a
          key={item.id}
          href={item.href}
          className="list-row"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row index={index} title={item.title} description={item.description} meta={item.meta}>
            ↗
          </Row>
        </a>
      ),
    )}
  </div>
)

export default ListView
