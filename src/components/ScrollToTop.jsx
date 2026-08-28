import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On navigation, reset the scroll position and move focus into <main>.
 * Without the focus move a screen-reader user activating a nav link gets no
 * signal that anything changed — focus would stay on the link they just used.
 *
 * The guard compares the previous pathname rather than using a "first render"
 * flag: StrictMode runs effects twice on mount, and a boolean flag would be
 * flipped by the first pass and let the second pass steal focus on page load.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    window.scrollTo(0, 0)

    if (previousPath.current === pathname) return
    previousPath.current = pathname

    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname])

  return null
}

export default ScrollToTop
