'use client'

import { useEffect, useState } from 'react'
import { HORIZON, SYDNEY, sunAt } from '@/lib/sun'
import { SKY_EVENT, applySky, nextHorizonCrossing, readMode } from '@/lib/sky'

const TICK = 20_000

const timeFormatter = new Intl.DateTimeFormat('en-AU', {
  timeZone: SYDNEY.zone,
  hour: 'numeric',
  minute: '2-digit',
})

type Reading = { time: string; altitude: number; crossing: string; rises: boolean }

const read = (): Reading => {
  const now = new Date()
  const { altitude } = sunAt(now)
  const { at, rises } = nextHorizonCrossing(now)
  return { time: timeFormatter.format(now), altitude, crossing: timeFormatter.format(at), rises }
}

/**
 * The sun over Sydney, now: the time there, how high the sun stands, and when
 * it next rises or sets. It also keeps the page's light in step — if the sun
 * sets while the page is open, the page goes dark with it.
 */
const SkyClock = () => {
  // Null on the server and the first client render, so hydration matches;
  // the reading lands one effect later.
  const [reading, setReading] = useState<Reading | null>(null)

  useEffect(() => {
    const tick = () => {
      setReading(read())
      if (readMode() === 'auto') applySky('auto')
    }
    // Another tab pinning the sky changes localStorage here too.
    const onStorage = (event: StorageEvent) => {
      if (event.key !== 'sky') return
      applySky()
      window.dispatchEvent(new Event(SKY_EVENT))
    }
    tick()
    const timer = window.setInterval(tick, TICK)
    window.addEventListener(SKY_EVENT, tick)
    window.addEventListener('storage', onStorage)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener(SKY_EVENT, tick)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const up = reading ? reading.altitude > HORIZON : true
  // The glyph: a horizon line with the sun above or below it. The offset is
  // eased so a sun 10° down already reads as clearly below the line.
  const lift = reading
    ? Math.sign(reading.altitude) * Math.min(5, 2 + Math.abs(reading.altitude) / 15)
    : 0
  const sunY = 8 - lift

  return (
    <p className="sky-clock" aria-live="off">
      <svg className="sky-glyph" viewBox="0 0 22 16" aria-hidden="true">
        <line x1="1" x2="21" y1="8" y2="8" />
        {/* No sun until there is a reading: the server cannot know whether
            it is up, and guessing would flip it on hydration. */}
        {reading && <circle cx="11" cy={sunY} r="3" className={up ? 'is-up' : 'is-down'} />}
      </svg>
      <span className="sky-clock-place">Sydney</span>
      {reading && (
        <>
          <span className="sky-clock-time">{reading.time}</span>
          <span className="sky-clock-detail">
            sun {Math.abs(reading.altitude).toFixed(0)}° {up ? 'up' : 'below'}
          </span>
          <span className="sky-clock-detail">
            {reading.rises ? 'rises' : 'sets'} {reading.crossing}
          </span>
        </>
      )}
    </p>
  )
}

export default SkyClock
