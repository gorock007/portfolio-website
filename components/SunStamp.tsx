import { EAST_WEST_STRETCH, addDays, formatDay, skyPoint } from '@/lib/sun'

/**
 * A date written the way the home page writes a year: a small copy of the
 * noon-sun loop with a dot where the sun stood that day. Every dated thing on
 * the site carries one, the way a letter carries a postmark.
 */

const SCALE = 1 // viewBox units per degree; the stamp is sized by CSS
const PAD = 2.4

const loops = new Map<number, { path: string; minX: number; maxY: number; width: number; height: number }>()

/** The year's whole loop as one path, cached per year. */
const loopFor = (year: number) => {
  const cached = loops.get(year)
  if (cached) return cached

  const start = `${year}-01-01`
  const points = Array.from({ length: 366 }, (_, index) => {
    const point = skyPoint(addDays(start, index))
    return { x: point.x * EAST_WEST_STRETCH, y: point.y }
  })
  const minX = Math.min(...points.map((point) => point.x))
  const maxX = Math.max(...points.map((point) => point.x))
  const minY = Math.min(...points.map((point) => point.y))
  const maxY = Math.max(...points.map((point) => point.y))

  const path =
    points
      .map((point, index) => {
        const x = (PAD + (point.x - minX) * SCALE).toFixed(2)
        const y = (PAD + (maxY - point.y) * SCALE).toFixed(2)
        return `${index ? 'L' : 'M'}${x} ${y}`
      })
      .join('') + 'Z'

  const loop = {
    path,
    minX,
    maxY,
    width: (maxX - minX) * SCALE + PAD * 2,
    height: (maxY - minY) * SCALE + PAD * 2,
  }
  loops.set(year, loop)
  return loop
}

type Props = {
  /** `YYYY-MM-DD` */
  date: string
  className?: string
  /** Give the stamp a name of its own when nothing beside it says the date. */
  label?: boolean
}

const SunStamp = ({ date, className, label = false }: Props) => {
  const loop = loopFor(Number(date.slice(0, 4)))
  const point = skyPoint(date)
  const cx = PAD + (point.x * EAST_WEST_STRETCH - loop.minX) * SCALE
  const cy = PAD + (loop.maxY - point.y) * SCALE

  return (
    <svg
      className={`sun-stamp${className ? ` ${className}` : ''}`}
      viewBox={`0 0 ${loop.width.toFixed(2)} ${loop.height.toFixed(2)}`}
      {...(label
        ? { role: 'img', 'aria-label': `The noon sun over Sydney on ${formatDay(date)}` }
        : { 'aria-hidden': true })}
    >
      <path className="sun-stamp-loop" d={loop.path} />
      <circle className="sun-stamp-sun" cx={cx} cy={cy} r={4} />
    </svg>
  )
}

export default SunStamp
