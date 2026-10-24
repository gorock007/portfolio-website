'use client'

import Link from 'next/link'
import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from 'react'
import type { YearDay } from '@/lib/year'
import { formatDay } from '@/lib/sun'

/* ---------------------------------------------------------------------------
   Geometry, in viewBox units. The figure is centred with a label column either
   side; below 560px the labels go and the svg is zoomed so the loop fills the
   width (see .analemma in styles/analemma.css, which reads --crop).
--------------------------------------------------------------------------- */
const K = 14 // units per degree of sky
const PAD_Y = 48 // room above and below for the solstice notes
const MARGIN = 250 // each label column, leader lines included
const LEADER_GAP = 18 // figure edge → elbow
const COLUMN_GAP = LEADER_GAP * 2.5 // figure edge → label column
const LABEL_LINE = 16 // label line height at a 12px rendering, in px
const LABEL_GAP = 8 // between stacked labels, in px
const CHAR = 6.4 // the average width of a 12px Geist character, in px
const NARROW_SIDE = 40 // what is left either side of the loop once zoomed
const PICK_RADIUS = K * 1.6

const levelOf = (count: number) => {
  if (count === 0) return 0
  if (count < 5) return 1
  if (count < 15) return 2
  return 3
}

const wrap = (text: string, limit: number) => {
  const lines: string[] = []
  for (const word of text.split(' ')) {
    const last = lines[lines.length - 1]
    if (last !== undefined && `${last} ${word}`.length <= limit) lines[lines.length - 1] = `${last} ${word}`
    else lines.push(word)
  }
  return lines
}

const eventText = (day: YearDay) =>
  day.events.map((event) => (event.kind === 'note' ? `“${event.label}”` : event.label)).join(' · ')

const contributions = (day: YearDay, isToday: boolean) =>
  `${day.count} contribution${day.count === 1 ? '' : 's'}${isToday ? ' so far' : ''}`

type Label = {
  index: number
  side: 'left' | 'right'
  lines: string[]
  ax: number
  ay: number
  ly: number
  height: number
}

/** Stack labels down a column without overlap, nudging back up off the floor. */
const settle = (labels: Label[], top: number, bottom: number) => {
  labels.sort((a, b) => a.ay - b.ay)
  let floor = top
  for (const label of labels) {
    label.ly = Math.max(label.ay - label.height / 2, floor)
    floor = label.ly + label.height
  }
  let ceiling = bottom
  for (const label of [...labels].reverse()) {
    if (label.ly + label.height > ceiling) label.ly = ceiling - label.height
    ceiling = label.ly
  }
  return labels
}

type Props = { days: YearDay[] }

const Analemma = ({ days }: Props) => {
  const todayIndex = days.length - 1
  // Two kinds of selection. `pinned` is the day you chose — by click, tap or
  // keys — and survives the pointer leaving. `preview` is the day under a
  // mouse that is only passing over, and lasts as long as it does.
  const [pinned, setPinned] = useState(todayIndex)
  const [preview, setPreview] = useState<number | null>(null)
  // How many viewBox units one CSS pixel is, so label text renders at 12px
  // whatever the svg's scale. Null until measured; the server lays the labels
  // out at 1:1, which is close, and they fade in after hydration has landed.
  const [unit, setUnit] = useState<number | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const instrumentRef = useRef<HTMLDivElement>(null)

  const selected = preview ?? pinned

  const frame = useMemo(() => {
    const xs = days.map((day) => day.x)
    const ys = days.map((day) => day.y)
    const minX = Math.min(...xs)
    const maxX = Math.max(...xs)
    const maxY = Math.max(...ys)
    const minY = Math.min(...ys)
    const figW = (maxX - minX) * K
    const width = figW + MARGIN * 2
    const height = (maxY - minY) * K + PAD_Y * 2

    const points = days.map((day) => ({
      cx: MARGIN + (day.x - minX) * K,
      cy: PAD_Y + (maxY - day.y) * K,
    }))

    return {
      width,
      height,
      points,
      left: MARGIN,
      right: MARGIN + figW,
      crop: width / (figW + NARROW_SIDE * 2),
      highest: ys.indexOf(maxY),
      lowest: ys.indexOf(minY),
    }
  }, [days])

  useLayoutEffect(() => {
    const svg = svgRef.current
    if (!svg || typeof ResizeObserver === 'undefined') return undefined
    const observer = new ResizeObserver(([entry]) => {
      const rendered = entry.contentRect.width
      if (rendered > 0) setUnit(frame.width / rendered)
    })
    observer.observe(svg)
    return () => observer.disconnect()
  }, [frame.width])

  const scale = unit ?? 1

  const labels = useMemo(() => {
    const { points } = frame
    const placed: Label[] = []
    // Wrap to whatever the column holds at this size, so a label never runs
    // past the edge of the figure.
    const columnPx = (MARGIN - COLUMN_GAP) / scale - 10
    const limit = Math.max(12, Math.floor(columnPx / CHAR))

    days.forEach((day, index) => {
      if (!day.events.length) return
      const { cx, cy } = points[index]
      // Which side of the loop is this dot on? Compare it with every other day
      // the sun stood at the same height.
      const level = points.filter((point) => Math.abs(point.cy - cy) < K * 0.8)
      const mid = (Math.min(...level.map((p) => p.cx)) + Math.max(...level.map((p) => p.cx))) / 2
      const lines = wrap(eventText(day), limit)
      placed.push({
        index,
        side: cx <= mid ? 'left' : 'right',
        lines,
        ax: cx,
        ay: cy,
        ly: 0,
        height: (lines.length * LABEL_LINE + LABEL_GAP) * scale,
      })
    })

    return [
      ...settle(placed.filter((label) => label.side === 'left'), 0, frame.height),
      ...settle(placed.filter((label) => label.side === 'right'), 0, frame.height),
    ]
  }, [days, frame, scale])

  /** The day nearest the pointer, or -1 if no dot is close enough. */
  const nearest = useCallback(
    (clientX: number, clientY: number) => {
      const matrix = svgRef.current?.getScreenCTM()
      if (!matrix) return -1
      const point = new DOMPoint(clientX, clientY).matrixTransform(matrix.inverse())
      let best = -1
      let bestDistance = PICK_RADIUS ** 2
      frame.points.forEach(({ cx, cy }, index) => {
        const distance = (cx - point.x) ** 2 + (cy - point.y) ** 2
        if (distance < bestDistance) {
          best = index
          bestDistance = distance
        }
      })
      return best
    },
    [frame.points],
  )

  const onPointerMove = (event: PointerEvent<SVGSVGElement>) => {
    if (event.pointerType !== 'mouse') return
    // While someone is stepping through days with the keys, a mouse resting
    // on the figure must not change the day being read out to them.
    if (instrumentRef.current?.matches(':focus-visible')) return
    const hit = nearest(event.clientX, event.clientY)
    if (hit >= 0) setPreview(hit)
  }

  // Click rather than pointerdown, so a swipe that starts on the figure
  // scrolls the page instead of choosing a day.
  const onClick = (event: MouseEvent<SVGSVGElement>) => {
    const hit = nearest(event.clientX, event.clientY)
    if (hit < 0) return
    setPinned(hit)
    setPreview(null)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const steps: Record<string, number> = {
      ArrowLeft: -1,
      ArrowDown: -1,
      ArrowRight: 1,
      ArrowUp: 1,
      PageDown: -7,
      PageUp: 7,
    }
    let next = selected
    if (event.key in steps) next = selected + steps[event.key]
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End' || event.key === 'Escape') next = todayIndex
    else if (event.key === ' ') next = selected
    else return
    event.preventDefault()
    setPreview(null)
    setPinned(Math.min(todayIndex, Math.max(0, next)))
  }

  const day = days[selected]
  const isToday = selected === todayIndex
  const describe = (target: YearDay, today: boolean) => {
    const events = target.events.map((event) =>
      event.kind === 'note' ? `published “${event.label}”` : `started ${event.label}`,
    )
    return [
      today ? `Today, ${formatDay(target.date, { weekday: true })}` : formatDay(target.date, { weekday: true }),
      `noon sun ${target.altitude.toFixed(1)}°`,
      contributions(target, today),
      ...events,
    ].join(', ')
  }

  const { width, height, points, left, right, crop, highest, lowest } = frame
  const fontSize = 12 * scale
  const solstice = (index: number) =>
    `${formatDay(days[index].date).replace(/ \d{4}$/, '')} · ${days[index].altitude.toFixed(1)}°`

  return (
    <div
      className="analemma"
      style={{ '--crop': crop } as CSSProperties}
      // The readout is inside this box, so the pointer can travel from a dot
      // down to its links without the preview snapping back to today.
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setPreview(null)
      }}
    >
      <div
        ref={instrumentRef}
        className="analemma-instrument"
        role="slider"
        tabIndex={0}
        aria-label="A year of work, one day at a time"
        aria-valuemin={1}
        aria-valuemax={days.length}
        aria-valuenow={selected + 1}
        aria-valuetext={describe(day, isToday)}
        onKeyDown={onKeyDown}
        // A click on the figure chooses a day; it should not also scroll the
        // 600px-tall slider into view or draw a focus ring meant for keys.
        onMouseDown={(event) => event.preventDefault()}
      >
        <svg
          ref={svgRef}
          className="analemma-svg"
          viewBox={`0 0 ${width.toFixed(1)} ${height.toFixed(1)}`}
          aria-hidden="true"
          onPointerMove={onPointerMove}
          onClick={onClick}
        >
          <g className="analemma-notes" style={{ fontSize }}>
            <text x={points[highest].cx} y={points[highest].cy - 20} textAnchor="middle">
              {solstice(highest)}
            </text>
            <text x={points[lowest].cx} y={points[lowest].cy + 20 + fontSize * 0.7} textAnchor="middle">
              {solstice(lowest)}
            </text>
          </g>

          <g className="analemma-leaders">
            {labels.map((label) => {
              const edge = label.side === 'left' ? left - LEADER_GAP : right + LEADER_GAP
              const column = label.side === 'left' ? left - COLUMN_GAP : right + COLUMN_GAP
              const ly = label.ly + (LABEL_LINE * scale) / 2 + 1
              return (
                <path
                  key={label.index}
                  className={label.index === selected ? 'is-active' : undefined}
                  d={`M${label.ax} ${label.ay}H${edge}L${column} ${ly}`}
                />
              )
            })}
          </g>

          <g className="analemma-dots">
            {points.map(({ cx, cy }, index) => (
              <circle
                key={days[index].date}
                cx={cx}
                cy={cy}
                r={[1.8, 2.6, 3.1, 3.6][levelOf(days[index].count)]}
                className={`analemma-dot level-${levelOf(days[index].count)}`}
                style={{ '--i': index } as CSSProperties}
              />
            ))}
            {days.map((target, index) =>
              target.events.length ? (
                <circle
                  key={`ring-${target.date}`}
                  className="analemma-ring"
                  cx={points[index].cx}
                  cy={points[index].cy}
                  r={6.5}
                />
              ) : null,
            )}
          </g>

          <g className="analemma-labels" style={{ fontSize }}>
            {labels.map((label) => {
              const x =
                label.side === 'left' ? left - COLUMN_GAP - 6 * scale : right + COLUMN_GAP + 6 * scale
              return (
                // A label is a target for its own day, so pointing at the name
                // reads the day as well as pointing at the dot.
                <text
                  key={label.index}
                  x={x}
                  textAnchor={label.side === 'left' ? 'end' : 'start'}
                  className={label.index === selected ? 'is-active' : undefined}
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse') setPreview(label.index)
                  }}
                  onClick={(event) => {
                    event.stopPropagation()
                    setPinned(label.index)
                    setPreview(null)
                  }}
                >
                  {label.lines.map((line, lineIndex) => (
                    <tspan key={lineIndex} x={x} y={label.ly + (lineIndex + 0.8) * LABEL_LINE * scale}>
                      {line}
                    </tspan>
                  ))}
                </text>
              )
            })}
          </g>

          <circle className="analemma-sun-halo" cx={points[todayIndex].cx} cy={points[todayIndex].cy} r={10} />
          <circle className="analemma-sun" cx={points[todayIndex].cx} cy={points[todayIndex].cy} r={5} />

          {!isToday && (
            <circle className="analemma-cursor" cx={points[selected].cx} cy={points[selected].cy} r={8.5} />
          )}
        </svg>
      </div>

      <div className="analemma-readout">
        <p className="readout-line">
          <span>{isToday ? 'Today' : formatDay(day.date, { weekday: true }).split(' ')[0]}</span>
          <span>{formatDay(day.date)}</span>
          <span>noon sun {day.altitude.toFixed(1)}°</span>
          <span>{contributions(day, isToday)}</span>
          {pinned !== todayIndex && preview === null && (
            <button
              type="button"
              className="readout-reset"
              onClick={() => setPinned(todayIndex)}
            >
              Back to today
            </button>
          )}
        </p>
        <p className="readout-events">
          {day.events.length
            ? day.events.map((event) => (
                <span key={event.href}>
                  {event.kind === 'note' ? 'Published ' : 'Started '}
                  <Link href={event.href}>
                    {event.kind === 'note' ? `“${event.label}”` : event.label}
                  </Link>
                </span>
              ))
            : isToday
              ? 'The haloed dot is today. Point at any day to read it, click to keep it, or focus the loop and use the arrow keys.'
              : ' '}
        </p>
      </div>
    </div>
  )
}

export default Analemma
