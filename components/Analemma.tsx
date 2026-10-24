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
const MARGIN = 236 // each label column, leader lines included
const LEADER_GAP = 18 // figure edge → elbow
const LABEL_LINE = 16 // label line height at a 12px rendering, in px
const LABEL_GAP = 8 // between stacked labels, in px
const WRAP = 26 // characters per label line
const NARROW_SIDE = 40 // what is left either side of the loop once zoomed

const levelOf = (count: number) => {
  if (count === 0) return 0
  if (count < 5) return 1
  if (count < 15) return 2
  return 3
}

const wrap = (text: string) => {
  const lines: string[] = []
  for (const word of text.split(' ')) {
    const last = lines[lines.length - 1]
    if (last !== undefined && (last + ' ' + word).length <= WRAP) lines[lines.length - 1] = `${last} ${word}`
    else lines.push(word)
  }
  return lines
}

const eventText = (day: YearDay) =>
  day.events.map((event) => (event.kind === 'note' ? `“${event.label}”` : event.label)).join(' · ')

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
  const [selected, setSelected] = useState(todayIndex)
  const [unit, setUnit] = useState(1)
  const svgRef = useRef<SVGSVGElement>(null)

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

    const highest = ys.indexOf(maxY)
    const lowest = ys.indexOf(minY)

    return {
      width,
      height,
      points,
      left: MARGIN,
      right: MARGIN + figW,
      crop: width / (figW + NARROW_SIDE * 2),
      highest,
      lowest,
    }
  }, [days])

  // Label text is meant to render at 12px whatever the svg's scale, so the
  // layout needs to know how many viewBox units one CSS pixel is.
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

  const labels = useMemo(() => {
    const { points } = frame
    const placed: Label[] = []

    days.forEach((day, index) => {
      if (!day.events.length) return
      const { cx, cy } = points[index]
      // Which side of the loop is this dot on? Compare it with every other day
      // the sun stood at the same height.
      const level = points.filter((point) => Math.abs(point.cy - cy) < K * 0.8)
      const mid = (Math.min(...level.map((p) => p.cx)) + Math.max(...level.map((p) => p.cx))) / 2
      const lines = wrap(eventText(day))
      placed.push({
        index,
        side: cx <= mid ? 'left' : 'right',
        lines,
        ax: cx,
        ay: cy,
        ly: 0,
        height: (lines.length * LABEL_LINE + LABEL_GAP) * unit,
      })
    })

    const top = 0
    const bottom = frame.height
    return [
      ...settle(placed.filter((label) => label.side === 'left'), top, bottom),
      ...settle(placed.filter((label) => label.side === 'right'), top, bottom),
    ]
  }, [days, frame, unit])

  const pick = useCallback(
    (event: PointerEvent<SVGSVGElement>) => {
      const svg = svgRef.current
      const matrix = svg?.getScreenCTM()
      if (!svg || !matrix) return
      const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse())
      let best = -1
      let bestDistance = (K * 1.6) ** 2
      frame.points.forEach(({ cx, cy }, index) => {
        const distance = (cx - point.x) ** 2 + (cy - point.y) ** 2
        if (distance < bestDistance) {
          best = index
          bestDistance = distance
        }
      })
      if (best >= 0) setSelected(best)
    },
    [frame.points],
  )

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
    else if (event.key === 'End') next = todayIndex
    else return
    event.preventDefault()
    setSelected(Math.min(todayIndex, Math.max(0, next)))
  }

  const day = days[selected]
  const isToday = selected === todayIndex
  const describe = (target: YearDay) => {
    const contributions = `${target.count} contribution${target.count === 1 ? '' : 's'}`
    const events = target.events.map((event) =>
      event.kind === 'note' ? `published “${event.label}”` : `started ${event.label}`,
    )
    return [formatDay(target.date, { weekday: true }), contributions, ...events].join(', ')
  }

  const { width, height, points, left, right, crop, highest, lowest } = frame
  const fontSize = 12 * unit

  return (
    <div className="analemma" style={{ '--crop': crop } as CSSProperties}>
      <div
        className="analemma-instrument"
        role="slider"
        tabIndex={0}
        aria-label="A year of work, one day at a time"
        aria-valuemin={1}
        aria-valuemax={days.length}
        aria-valuenow={selected + 1}
        aria-valuetext={describe(day)}
        onKeyDown={onKeyDown}
      >
        <svg
          ref={svgRef}
          className="analemma-svg"
          viewBox={`0 0 ${width.toFixed(1)} ${height.toFixed(1)}`}
          aria-hidden="true"
          onPointerMove={(event) => {
            if (event.pointerType === 'mouse') pick(event)
          }}
          onPointerDown={pick}
          onPointerLeave={(event) => {
            if (event.pointerType === 'mouse') setSelected(todayIndex)
          }}
        >
          <g className="analemma-notes" style={{ fontSize }}>
            <text x={points[highest].cx} y={points[highest].cy - 20} textAnchor="middle">
              {formatDay(days[highest].date).replace(/ \d{4}$/, '')} · {days[highest].altitude.toFixed(1)}°
            </text>
            <text x={points[lowest].cx} y={points[lowest].cy + 20 + fontSize * 0.7} textAnchor="middle">
              {formatDay(days[lowest].date).replace(/ \d{4}$/, '')} · {days[lowest].altitude.toFixed(1)}°
            </text>
          </g>

          <g className="analemma-leaders">
            {labels.map((label) => {
              const edge = label.side === 'left' ? left - LEADER_GAP : right + LEADER_GAP
              const column = label.side === 'left' ? left - LEADER_GAP * 2.5 : right + LEADER_GAP * 2.5
              const ly = label.ly + (LABEL_LINE * unit) / 2 + 1
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
              const x = label.side === 'left' ? left - LEADER_GAP * 2.5 - 6 * unit : right + LEADER_GAP * 2.5 + 6 * unit
              return (
                <text
                  key={label.index}
                  x={x}
                  textAnchor={label.side === 'left' ? 'end' : 'start'}
                  className={label.index === selected ? 'is-active' : undefined}
                >
                  {label.lines.map((line, lineIndex) => (
                    <tspan key={lineIndex} x={x} y={label.ly + (lineIndex + 0.8) * LABEL_LINE * unit}>
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
            <circle
              className="analemma-cursor"
              cx={points[selected].cx}
              cy={points[selected].cy}
              r={8.5}
            />
          )}
        </svg>
      </div>

      <div className="analemma-readout">
        <p className="readout-line">
          <span>{isToday ? 'Today' : formatDay(day.date, { weekday: true }).split(' ')[0]}</span>
          <span>{formatDay(day.date)}</span>
          <span>noon sun {day.altitude.toFixed(1)}°</span>
          <span>
            {day.count} contribution{day.count === 1 ? '' : 's'}
          </span>
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
              ? 'The orange dot is today. Move along the loop to read any day.'
              : ' '}
        </p>
      </div>
    </div>
  )
}

export default Analemma
