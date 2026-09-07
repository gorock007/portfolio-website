import type { Metadata } from 'next'
import Image from 'next/image'
import Layout from '@/components/Layout'
import ListView, { type ListItem } from '@/components/ListView'
import Tile from '@/components/Tile'
import TileGrid from '@/components/TileGrid'
import ViewSwitcher from '@/components/ViewSwitcher'
import { blogPosts } from '@/data/writing'

const description =
  'Notes on life, AI, tools, workflows, and whatever I’m learning along the way.'

export const metadata: Metadata = {
  title: 'Writing',
  description,
  alternates: { canonical: '/writings' },
  openGraph: { title: 'Writing — Gorock Shetty', description, url: '/writings' },
  twitter: { title: 'Writing — Gorock Shetty', description },
}

const listItems: ListItem[] = blogPosts.map((post) => ({
  id: post.id,
  to: `/writings/${post.id}`,
  title: post.title,
  description: post.excerpt,
  meta: post.date,
}))

const WritingPage = () => (
  <Layout>
    <ViewSwitcher
      caption="Notes, not takes…"
      // No notes means nothing to list, and the toggle falls back to the grid,
      // which carries the empty state.
      list={blogPosts.length > 0 ? <ListView items={listItems} /> : undefined}
      grid={
        <TileGrid>
          <Tile size="wide">
            <h1 className="page-h1">Writing.</h1>
            <p className="page-h2">{description}</p>
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
                      <Image
                        src={post.coverImage}
                        alt={post.coverImageAlt || ''}
                        fill
                        sizes="(max-width: 767px) 100vw, 260px"
                      />
                    </figure>
                  )}
                </article>
              </Tile>
            ))
          )}
        </TileGrid>
      }
    />
  </Layout>
)

export default WritingPage
