import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Ledger from '@/components/Ledger'
import SunStamp from '@/components/SunStamp'
import { blogPosts } from '@/data/writing'
import { isDrawing } from '@/lib/images'
import { formatDay, isoFromHuman } from '@/lib/sun'

const description =
  'Notes, not takes. Mostly on AI, and what it says about us: intelligence, ambition, time.'

export const metadata: Metadata = {
  title: 'Writing',
  description,
  alternates: { canonical: '/writings' },
  openGraph: { title: 'Writing — Gorock Shetty', description, url: '/writings' },
  twitter: { title: 'Writing — Gorock Shetty', description },
}

const WritingPage = () => (
  <Layout>
    <header className="page-head">
      <h1 className="page-title">Writing</h1>
      <p className="lead">
        Notes, not takes. Mostly on AI, and what it says about us.
      </p>
    </header>

    <Ledger id="notes-label" label="Notes">
      {blogPosts.length === 0 ? (
        <p className="lead lead--quiet">The first note is in progress.</p>
      ) : (
        <ol className="notes" role="list">
          {blogPosts.map((post, index) => (
            <li key={post.id}>
              <Link className="note-row" href={`/writings/${post.id}`}>
                {/* Title first in the source, so the link is announced by its
                    name; the meta line is lifted above it visually. */}
                <div className="note-copy">
                  <h3 className="note-title">{post.title}</h3>
                  <p className="note-meta">
                    <SunStamp date={isoFromHuman(post.date)} />
                    <time dateTime={isoFromHuman(post.date)}>{formatDay(isoFromHuman(post.date))}</time>
                    <span>{post.readTime}</span>
                    <span>{post.tags.join(', ')}</span>
                  </p>
                  <p className="note-excerpt">{post.excerpt}</p>
                </div>
                {post.coverImage && (
                  <div className={`note-cover${isDrawing(post.coverImage) ? ' is-drawing' : ''}`}>
                    <Image
                      src={post.coverImage}
                      unoptimized={isDrawing(post.coverImage)}
                      alt=""
                      sizes="(max-width: 899px) 100vw, 280px"
                      loading={index < 2 ? 'eager' : undefined}
                    />
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </Ledger>
  </Layout>
)

export default WritingPage
