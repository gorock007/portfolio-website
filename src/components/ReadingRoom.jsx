import { useLocation } from 'react-router-dom'
import { blogPosts } from '../data/writing'

// Only a note that exists. The writing index is a tile grid and tiles carry
// their own surface, so the field behind them reads as texture, not noise —
// and a 404 under a note's URL is a tile too.
const readingRoutes = new Set(blogPosts.map((post) => `/writings/${post.id}`))

/**
 * A column of paper laid over the dot field, the width of the article plus its
 * margins, pinned to the viewport so it holds while the note scrolls through.
 *
 * The field stays lit out in the margins; it just stops running underneath the
 * body copy, where a 1px dot every 24px sits right on the x-height and fights
 * the text. It crossfades rather than switching, so arriving at a note reads as
 * the room going quiet and leaving it as the room coming back. The transition
 * is CSS, which the `prefers-reduced-motion` block in index.css already covers.
 */
const ReadingRoom = () => {
  const { pathname } = useLocation()
  const reading = readingRoutes.has(pathname)

  return (
    <div
      aria-hidden="true"
      className={`reading-room${reading ? ' reading-room--open' : ''}`}
    />
  )
}

export default ReadingRoom
