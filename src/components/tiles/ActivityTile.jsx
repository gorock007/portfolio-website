import { useEffect, useMemo, useState } from 'react'
import Tile from '../Tile'

// GitHub's own contribution graph is only exposed through the authenticated
// GraphQL API, so the real counts come from this public read-only mirror of it.
// The REST events endpoint this used to call reports public events, which is a
// different and much narrower number.
const CONTRIBUTIONS_URL =
  'https://github-contributions-api.jogruber.de/v4/gorock007?y=last'
const DAY_COUNT = 84

const toDateKey = (date) => date.toISOString().slice(0, 10)

// Keeps the grid at full size while the request is in flight, so the tile does
// not collapse and then jump when the data lands.
const placeholderDays = Array.from({ length: DAY_COUNT }, (_, index) => ({
  date: `placeholder-${index}`,
  count: 0,
}))

const lastWeeks = (contributions = []) => {
  const today = toDateKey(new Date())
  return contributions.filter((day) => day.date <= today).slice(-DAY_COUNT)
}

const getLevel = (count) => {
  if (count === 0) return 0
  if (count === 1) return 1
  if (count <= 3) return 2
  return 3
}

const ActivityTile = () => {
  const [contributions, setContributions] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    const loadActivity = async () => {
      try {
        const response = await fetch(CONTRIBUTIONS_URL, {
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        })

        if (!response.ok) throw new Error('GitHub activity unavailable')
        const data = await response.json()
        setContributions(lastWeeks(data?.contributions))
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('error')
      }
    }

    loadActivity()
    return () => controller.abort()
  }, [])

  const days = contributions.length ? contributions : placeholderDays
  const { total, activeDays } = useMemo(
    () =>
      contributions.reduce(
        (result, day) => ({
          total: result.total + day.count,
          activeDays: result.activeDays + (day.count > 0 ? 1 : 0),
        }),
        { total: 0, activeDays: 0 },
      ),
    [contributions],
  )

  return (
    <Tile size="sm">
      <div className="stat-tile">
        <p className="stat-label">Public activity</p>

        {status === 'error' ? (
          <p className="stat-body" role="status">
            GitHub is taking a break. The profile link still works.
          </p>
        ) : (
          <>
            <div
              className={`activity-grid${status === 'loading' ? ' is-loading' : ''}`}
              aria-hidden="true"
            >
              {days.map((day) => (
                <span
                  key={day.date}
                  className="activity-cell"
                  data-level={getLevel(day.count)}
                  title={`${day.date}: ${day.count} contribution${day.count === 1 ? '' : 's'}`}
                />
              ))}
            </div>
            <p className="stat-body stat-body--small" aria-live="polite">
              {status === 'loading'
                ? 'Loading the last 12 weeks…'
                : `${total} contributions across ${activeDays} days.`}
            </p>
          </>
        )}

        <a
          className="project-url"
          href="https://github.com/gorock007"
          target="_blank"
          rel="noopener noreferrer"
        >
          @gorock007 <span className="link-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </Tile>
  )
}

export default ActivityTile
