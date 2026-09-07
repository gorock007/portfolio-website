'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

/**
 * On navigation, move focus into <main>. Without it a screen-reader user
 * activating a nav link gets no signal that anything changed — focus would
 * stay on the link they just used. Scroll restoration is the App Router's own
 * job, so unlike the react-router version this no longer resets scrollTop.
 *
 * The guard compares the previous pathname rather than using a "first render"
 * flag: effects can run twice in development, and a boolean flag would be
 * flipped by the first pass and let the second pass steal focus on page load.
 */
const RouteFocus = () => {
  const pathname = usePathname()
  const previousPath = useRef(pathname)

  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname

    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname])

  return null
}

export default RouteFocus
