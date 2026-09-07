import type { StaticImageData } from 'next/image'

/** The tile footprints on the 328px module. */
export type TileSize = 'sm' | 'md' | 'lg' | 'wide' | 'xl' | 'auto'

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
  size: TileSize
  featured?: boolean
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
