import { useEffect, useState } from 'react'

const MOBILE_QUERY = '(max-width: 767px)'

/**
 * Grid/list state for a tile page.
 *
 * The view toggle is hidden below 768px, so a viewer who picks list view on a
 * wide screen and then rotates or resizes down would be stuck in list layout
 * with no control to get back. Force grid whenever the toggle isn't reachable.
 */
export const useViewMode = () => {
  const [view, setView] = useState('grid')

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY)

    const sync = () => {
      if (media.matches) setView('grid')
    }

    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return [view, setView]
}
