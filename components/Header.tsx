'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { MouseEvent } from 'react'
import { navItems } from '@/data/siteLinks'
import SkyClock from './SkyClock'

const Header = () => {
  const pathname = usePathname()

  const handleSkip = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const main = document.getElementById('main')
    if (!main) return
    main.focus()
    main.scrollIntoView({ block: 'start' })
  }

  return (
    <header className="site-header">
      <a href="#main" onClick={handleSkip} className="skip-link">
        Skip to main content
      </a>

      <div className="container header-row">
        <Link href="/" className="brand" aria-current={pathname === '/' ? 'page' : undefined}>
          Gorock Shetty
        </Link>

        <SkyClock />

        <nav aria-label="Primary">
          <ul className="nav-list" role="list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className="nav-link"
                  // A note is inside Writing but is not the Writing page itself.
                  aria-current={pathname === item.to ? 'page' : pathname.startsWith(`${item.to}/`) ? 'true' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
