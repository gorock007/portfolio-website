import type { StaticImageData } from 'next/image'

/**
 * `product` — shipped and run as a business, shown with its capture.
 * `tool` — open source and experiments from the last year.
 * `earlier` — the long tail, back to the first thing ever shipped.
 */
export type ProjectTier = 'product' | 'tool' | 'earlier'

export type Project = {
  id: string
  title: string
  subtitle: string
  detail?: string
  proof?: string[]
  img?: StaticImageData
  imgAlt?: string
  urlLabel: string
  url: string
  tier: ProjectTier
  /** What it is, in a word or two: "Mac app", "Claude Code skill". */
  kind: string
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
