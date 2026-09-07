import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/writing'
import { absoluteUrl } from '@/lib/site'

const sitemap = (): MetadataRoute.Sitemap => {
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/about'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/work'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/writings'), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const notes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/writings/${post.id}`),
    // The dates in the data are human-readable ("7 September 2026"); anything
    // Date can't parse is left off rather than emitted as an invalid stamp.
    lastModified: Number.isNaN(Date.parse(post.date)) ? undefined : new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...pages, ...notes]
}

export default sitemap
