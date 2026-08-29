import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { useEffect, useId, useRef } from 'react'

// How far the cursor's light reaches, and how lazily it follows. The spring is
// the whole effect: the light arrives a beat after the pointer, so moving
// across the field pulls a soft wake through it rather than snapping.
const LIGHT_RADIUS = 220
const LIGHT_SPRING = { stiffness: 140, damping: 22, mass: 0.7 }
const PARKED = -9999

/**
 * Tracks the pointer in coordinates local to `ref`, as a pair of springs.
 *
 * The listener is on the window, not the element, so the field keeps
 * responding while the cursor is out in the empty space around it — that
 * travel is most of the effect. The element's rect is cached and refreshed on
 * scroll and resize instead of being read per move, which would force a layout
 * on every pointer event.
 */
const usePointerLight = (ref, enabled) => {
  const x = useMotionValue(PARKED)
  const y = useMotionValue(PARKED)
  const springX = useSpring(x, LIGHT_SPRING)
  const springY = useSpring(y, LIGHT_SPRING)

  useEffect(() => {
    const element = ref.current
    if (!enabled || !element) return undefined

    let rect = null
    const readRect = () => {
      rect = element.getBoundingClientRect()
    }

    const handleMove = (event) => {
      if (!rect) readRect()
      x.set(event.clientX - rect.left)
      y.set(event.clientY - rect.top)
    }

    // Cursor off the page: park the light outside the field so it fades out
    // rather than freezing wherever it was last seen.
    const handleLeave = () => {
      x.set(PARKED)
      y.set(PARKED)
    }

    const listen = (on) => {
      const method = on ? 'addEventListener' : 'removeEventListener'
      window[method]('pointermove', handleMove, { passive: true })
      window[method]('scroll', readRect, { passive: true })
      window[method]('resize', readRect)
      document[method]('pointerleave', handleLeave)
    }

    // Nothing to light up while the field is off screen, so stop listening.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        readRect()
        listen(true)
      } else {
        listen(false)
        handleLeave()
      }
    })
    observer.observe(element)

    return () => {
      observer.disconnect()
      listen(false)
    }
  }, [enabled, ref, x, y])

  return { springX, springY }
}

const DotField = ({ id, width, height, x, y, cx, cy, r }) => (
  <>
    <defs>
      <pattern
        id={id}
        width={width}
        height={height}
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
        x={x}
        y={y}
      >
        <circle cx={cx} cy={cy} r={r} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
  </>
)

/**
 * A tiled dot field, drawn as a single SVG pattern rather than hundreds of
 * nodes. Sits behind content: aria-hidden and pointer-events: none, so it
 * never intercepts a click or reaches the accessibility tree.
 *
 * `interactive` stacks a second, stronger copy of the same field and reveals it
 * through a mask that follows the cursor. Both layers share their geometry, so
 * the bright dots sit exactly on the quiet ones.
 */
const DotPattern = ({
  width = 24,
  height = 24,
  x = 0,
  y = 0,
  cx = 1.25,
  cy = 1.25,
  r = 1.25,
  fade = true,
  interactive = false,
  className = '',
  ...rest
}) => {
  const id = useId()
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  // A light chasing the cursor is exactly the kind of movement a reduced-motion
  // request is asking not to see, so it is dropped rather than shortened.
  const lit = interactive && !reduceMotion
  const { springX, springY } = usePointerLight(ref, lit)

  const mask = useMotionTemplate`radial-gradient(${LIGHT_RADIUS}px circle at ${springX}px ${springY}px, #000 0%, rgba(0, 0, 0, 0.35) 45%, transparent 72%)`

  const geometry = { width, height, x, y, cx, cy, r }

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={['dot-pattern', fade && 'dot-pattern--fade', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <svg className="dot-pattern-layer">
        <DotField id={`${id}-base`} {...geometry} />
      </svg>

      {lit && (
        <motion.svg
          className="dot-pattern-layer dot-pattern-layer--lit"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        >
          <DotField id={`${id}-lit`} {...geometry} />
        </motion.svg>
      )}
    </span>
  )
}

export default DotPattern
