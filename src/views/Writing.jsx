import GridTopBar from '../components/GridTopBar'
import Layout from '../components/Layout'
import ListView from '../components/ListView'
import PageTitle from '../components/PageTitle'
import Tile from '../components/Tile'
import TileGrid from '../components/TileGrid'
import { useViewMode } from '../components/useViewMode'
import { blogPosts } from '../data/writing'

const listItems = blogPosts.map((post) => ({
  id: post.id,
  to: `/writings/${post.id}`,
  title: post.title,
  description: post.excerpt,
  meta: post.date,
}))

const Writing = () => {
  const [view, setView] = useViewMode()

  return (
    <Layout>
      <PageTitle title="Writing — Gorock Shetty" />

      <GridTopBar view={view} onViewChange={setView} caption="Notes, not takes…" />

      {view === 'list' && blogPosts.length > 0 ? (
        <ListView items={listItems} />
      ) : (
        <TileGrid>
          <Tile size="wide">
            <h1 className="page-h1">Writing.</h1>
            <p className="page-h2">
              Notes on life, AI, tools, workflows, and whatever I’m learning along the way.
            </p>
          </Tile>

          {blogPosts.length === 0 ? (
            <Tile size="wide">
              <div className="empty-state">
                <p className="stat-label">Coming soon</p>
                <p className="project-title">First note in progress.</p>
                <p className="stat-body">
                  I’m giving it the time it deserves. It’ll appear here when it’s ready.
                </p>
              </div>
            </Tile>
          ) : (
            blogPosts.map((post) => (
              <Tile key={post.id} size="wide" to={`/writings/${post.id}`}>
                <article className="writing-card">
                  <div className="writing-card-copy">
                    <p className="writing-date">
                      {post.date} · {post.readTime}
                    </p>
                    <h2 className="writing-title">{post.title}</h2>
                    <p className="writing-excerpt">{post.excerpt}</p>
                    <p className="project-url">
                      Read the note <span className="link-arrow" aria-hidden="true">→</span>
                    </p>
                  </div>

                  {post.coverImage && (
                    <figure className="writing-card-media">
                      <img
                        src={post.coverImage}
                        alt={post.coverImageAlt || ''}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  )}
                </article>
              </Tile>
            ))
          )}
        </TileGrid>
      )}
    </Layout>
  )
}

export default Writing
