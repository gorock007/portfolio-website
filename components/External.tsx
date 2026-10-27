import type { ReactNode } from 'react'

/** A closing link that leaves the site: ↗, and says so to a screen reader. */
const External = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children} <span className="arrow" aria-hidden="true">↗</span>
    <span className="visually-hidden"> (opens in a new tab)</span>
  </a>
)

export default External
