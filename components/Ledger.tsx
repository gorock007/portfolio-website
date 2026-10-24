import Link from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  id: string
  label: string
  children: ReactNode
  /** A closing link under the section, for the page that holds the rest. */
  more?: { href: string; label: string }
}

/**
 * The site's one section shape: a narrow label column and a wide body, ruled
 * off from what came before — the layout of an almanac's tables.
 */
const Ledger = ({ id, label, children, more }: Props) => (
  <section className="ledger" aria-labelledby={id}>
    <h2 id={id} className="ledger-label">
      {label}
    </h2>
    <div className="ledger-body">
      {children}
      {more && (
        <p className="ledger-more">
          <Link href={more.href}>
            {more.label} <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </p>
      )}
    </div>
  </section>
)

export default Ledger
