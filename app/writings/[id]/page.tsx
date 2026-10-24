import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import SunStamp from '@/components/SunStamp'
import { blogPosts } from '@/data/writing'
import { renderContent } from '@/lib/renderContent'
import { site } from '@/lib/site'
import { isoFromHuman } from '@/lib/sun'

type Props = { params: Promise<{ id: string }> }

const findPost = (id: string) => blogPosts.find((entry) => entry.id === id)

/** Every note is known at build time, so all of them prerender. */
export const generateStaticParams = () => blogPosts.map((post) => ({ id: post.id }))

export const dynamicParams = true

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const post = findPost(id)

  if (!post) return { title: 'Note not found' }

  const url = `/writings/${post.id}`

  // The cover carries the card when it is a raster image. Social crawlers do
  // not render SVG, so an SVG cover falls back to the site card rather than
  // shipping a preview that shows up blank.
  const cover = post.coverImage
  const usableCover = cover && !cover.src.endsWith('.svg') ? cover : null
  const images = usableCover
    ? [
        {
          url: usableCover.src,
          width: usableCover.width,
          height: usableCover.height,
          alt: post.coverImageAlt || post.title,
        },
      ]
    : [{ url: site.ogImage, width: 1200, height: 630, alt: post.title }]

  // The dates in the data are written for people ("7 September 2026"); og
  // wants ISO 8601, at the start of the day in Sydney.
  const published = `${isoFromHuman(post.date)}T00:00:00+10:00`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: published,
      authors: [site.name],
      tags: post.tags,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: images.map((image) => image.url),
    },
  }
}

const WritingPostPage = async ({ params }: Props) => {
  const { id } = await params
  const post = findPost(id)

  if (!post) notFound()

  // The list runs newest first, so the next note to read is the older one;
  // the oldest wraps round to the newest.
  const index = blogPosts.indexOf(post)
  const next = blogPosts.length > 1 ? blogPosts[(index + 1) % blogPosts.length] : null

  return (
    <Layout narrow>
      <article className="article">
        <Link href="/writings" className="back-link">
          <span className="arrow" aria-hidden="true">←</span> All writing
        </Link>

        <header className="article-header">
          <p className="article-meta">
            <SunStamp date={isoFromHuman(post.date)} />
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            <span>{post.tags.join(', ')}</span>
          </p>

          <h1 className="article-title">{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
        </header>

        {post.coverImage && (
          <figure className={`article-cover${post.coverImage.src.endsWith('.svg') ? ' is-drawing' : ''}`}>
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt || ''}
              sizes="(max-width: 767px) 100vw, 720px"
              preload
            />
          </figure>
        )}

        <div className="article-body">{renderContent(post.content)}</div>

        {post.sourceUrl && (
          <aside className="article-source" aria-label="Source of inspiration">
            <p>Source of inspiration</p>
            <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer">
              {post.sourceLabel || 'Read the original post'}{' '}
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </aside>
        )}

        {next && (
          <nav className="article-next" aria-label="Next note">
            <Link href={`/writings/${next.id}`}>
              <span className="meta">Read next · {next.date}</span>
              <span className="article-next-title">{next.title}</span>
            </Link>
          </nav>
        )}
      </article>
    </Layout>
  )
}

export default WritingPostPage
