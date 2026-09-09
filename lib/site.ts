/**
 * Everything that needs the site's own origin — canonical URLs, Open Graph,
 * Twitter cards, the sitemap and robots.txt — reads it from here.
 */
export const site = {
  url: 'https://gorock.sh',
  name: 'Gorock Shetty',
  /* Gorock is the brand — the domain, the handles, the byline. Gorakh is the
     same person on official documents, which is the name LinkedIn carries.
     Both need to find this site, so the second is published as an
     alternateName rather than left for a search engine to guess at. */
  alternateName: 'Gorakh Shetty',
  title: 'Gorock Shetty — building, learning, becoming',
  description:
    'Gorock Shetty is learning extensively about AI, building useful products, writing, and trying to stay relevant for the post-AGI world.',
  shortDescription:
    'Learning extensively about AI, building useful products, writing, and trying to stay relevant for the post-AGI world.',
  ogImage: '/og.jpg',
  twitterHandle: '@gorockbits',
} as const

/** Absolute URL for a site-relative path, for metadata that needs one. */
export const absoluteUrl = (path = '/') => new URL(path, site.url).toString()
