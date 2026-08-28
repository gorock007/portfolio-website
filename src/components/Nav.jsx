import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { navItems, profile, socialLinks } from '../data/siteLinks'
import { icons } from './Icons'
import Tooltip from './Tooltip'

const activeIndex = (pathname) => {
  if (pathname === '/') return 0
  const match = navItems.findIndex(
    (item) => item.to !== '/' && pathname.startsWith(item.to),
  )
  return match
}

const Nav = () => {
  const { pathname } = useLocation()
  const index = activeIndex(pathname)

  const handleSkip = (event) => {
    event.preventDefault()
    const main = document.getElementById('main')
    if (!main) return
    main.focus()
    main.scrollIntoView({ block: 'start' })
  }

  return (
    <header>
      <a href="#main" onClick={handleSkip} className="skip-link">
        Skip to main content
      </a>

      <div className="nav-fixed">
        <nav className="nav" aria-label="Primary">
          {index >= 0 && (
            <motion.span
              className="floating-indicator"
              aria-hidden="true"
              initial={false}
              animate={{ x: `${index * 100}%` }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
          )}

          {navItems.map((item) => {
            const isCurrent =
              item.to === '/' ? pathname === '/' : pathname.startsWith(item.to)

            return (
              <Link
                key={item.to}
                to={item.to}
                className="nav-item"
                aria-current={isCurrent ? 'page' : undefined}
              >
                <span className="nav-text">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="nav-info">
        <Link to="/" className="nav-logo">
          {profile.name}
        </Link>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon]
            if (!Icon) return null
            const isExternal = link.href.startsWith('http')

            return (
              <li key={link.id}>
                <Tooltip label={link.label}>
                  <a
                    href={link.href}
                    className="nav-icon"
                    aria-label={link.label}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <Icon />
                  </a>
                </Tooltip>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Nav
