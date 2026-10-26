import type { StaticImageData } from 'next/image'

/**
 * `product` — shipped and run as a business, shown with its capture.
 * `tool` — open source and experiments from the last year.
 */
export type ProjectTier = 'product' | 'tool'

export type Project = {
  id: string
  title: string
  subtitle: string
  /** A line or two under the subtitle on the home page; /work shows `detail`. */
  summary?: string
  detail?: string
  proof?: string[]
  img?: StaticImageData
  imgAlt?: string
  urlLabel: string
  url: string
  tier: ProjectTier
  /** What it is, in a word or two: "Mac app", "Claude Code skill". */
  kind: string
  /** Where it stands — "Live", "Shipped" — shown in place of the date on the home page. */
  status?: string
  /** The day it began (`YYYY-MM-DD`) — the repository's first day, where there is one. */
  started: string
}

export type BlogPost = {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  coverImage?: StaticImageData
  coverImageAlt?: string
  sourceUrl?: string
  sourceLabel?: string
  content: string
}
