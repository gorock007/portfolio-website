import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FadeIn from '@/components/FadeIn'
import Layout from '@/components/Layout'
import { blogPosts } from '@/data/writing'
import { renderContent } from '@/lib/renderContent'
import { site } from '@/lib/site'

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
  // wants ISO 8601, and anything unparseable is simply left off.
  const published = Number.isNaN(Date.parse(post.date))
    ? undefined
    : new Date(post.date).toISOString()

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

  return (
    <Layout>
      <article className="article">
        <Link href="/writings" className="back-link">
          <span aria-hidden="true">←</span> All writing
        </Link>

        <FadeIn>
          <header className="article-header">
            <div className="article-tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <h1 className="article-title">{post.title}</h1>

            <p className="article-byline">
              <strong>Gorock Shetty</strong>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </p>
          </header>

          {post.coverImage && (
            <figure className="article-cover">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt || ''}
                sizes="(max-width: 767px) 100vw, 672px"
                priority
              />
            </figure>
          )}

          <div className="article-body">{renderContent(post.content)}</div>

          {post.sourceUrl && (
            <aside className="article-source">
              <p>Source of inspiration</p>
              <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer">
                {post.sourceLabel || 'Read the original post'}{' '}
                <span className="link-arrow" aria-hidden="true">↗</span>
              </a>
            </aside>
          )}
        </FadeIn>

        <div className="article-bottom">
          <Link href="/writings" className="back-link">
            <span aria-hidden="true">←</span> All writing
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export default WritingPostPage
