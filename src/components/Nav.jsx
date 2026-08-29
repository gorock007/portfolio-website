import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../data/siteLinks'

// The pill takes its geometry from whichever tab is active, so nothing here
// assumes the tabs are all the same width.
const PILL_DURATION = 0.4
const PILL_EASE = [0.65, 0, 0.35, 1]

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
  const reduceMotion = useReducedMotion()

  const navRef = useRef(null)
  const itemRefs = useRef([])
  const [pill, setPill] = useState(null)

  const measure = useCallback(() => {
    const item = itemRefs.current[index]
    // No match means a route outside the nav, and no pill to draw.
    setPill(item ? { left: item.offsetLeft, width: item.offsetWidth } : null)
  }, [index])

  // A layout effect, not an effect: the first measurement has to land before
  // paint, or the pill shows up at the wrong tab and then slides off it.
  useLayoutEffect(() => {
    measure()
  }, [measure])

  useLayoutEffect(() => {
    const nav = navRef.current
    if (!nav || typeof ResizeObserver === 'undefined') return undefined

    // Tabs are 112px wide above 768px and 88px below it, so a measurement
    // taken in one band is wrong in the other.
    const observer = new ResizeObserver(measure)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [measure])

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
        <nav className="nav" aria-label="Primary" ref={navRef}>
          {pill && (
            // left/width rather than a transform: scaling a 230px border-radius
            // sideways would visibly deform the pill's ends mid-slide.
            <motion.span
              className="floating-indicator"
              aria-hidden="true"
              initial={false}
              animate={{ left: pill.left, width: pill.width }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: PILL_DURATION, ease: PILL_EASE }
              }
            />
          )}

          {navItems.map((item, itemIndex) => {
            const isCurrent =
              item.to === '/' ? pathname === '/' : pathname.startsWith(item.to)

            return (
              <Link
                key={item.to}
                to={item.to}
                className="nav-item"
                aria-current={isCurrent ? 'page' : undefined}
                ref={(element) => {
                  itemRefs.current[itemIndex] = element
                }}
              >
                <span className="nav-text">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Nav
