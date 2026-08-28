import { useEffect, useMemo, useState } from 'react'

const GITHUB_EVENTS_URL = 'https://api.github.com/users/gorock007/events/public?per_page=100'
const DAY_COUNT = 84

const toDateKey = (date) => date.toISOString().slice(0, 10)

const buildDays = (events = []) => {
  const counts = events.reduce((result, event) => {
    const key = event.created_at?.slice(0, 10)
    if (key) result[key] = (result[key] || 0) + 1
    return result
  }, {})

  const today = new Date()
  today.setHours(12, 0, 0, 0)

  return Array.from({ length: DAY_COUNT }, (_, index) => {
    const date = new Date(today)
    date.setDate(today.getDate() - (DAY_COUNT - 1 - index))
    const key = toDateKey(date)
    return { key, count: counts[key] || 0 }
  })
}

const getLevel = (count) => {
  if (count === 0) return 0
  if (count === 1) return 1
  if (count <= 3) return 2
  return 3
}

const GitHubActivity = () => {
  const [events, setEvents] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    const loadActivity = async () => {
      try {
        const response = await fetch(GITHUB_EVENTS_URL, {
          headers: { Accept: 'application/vnd.github+json' },
          signal: controller.signal,
        })

        if (!response.ok) throw new Error('GitHub activity unavailable')
        const data = await response.json()
        setEvents(Array.isArray(data) ? data : [])
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('error')
      }
    }

    loadActivity()
    return () => controller.abort()
  }, [])

  const days = useMemo(() => buildDays(events), [events])
  const activeDays = days.filter((day) => day.count > 0).length

  return (
    <section className="activity-section" aria-labelledby="activity-title">
      <div className="revamp-container compact-container">
        <div className="activity-heading">
          <h2 id="activity-title">Activity</h2>
          <a href="https://github.com/gorock007" target="_blank" rel="noopener noreferrer">
            @gorock007 <span aria-hidden="true">↗</span>
          </a>
        </div>

        {status === 'error' ? (
          <p className="activity-status">GitHub activity is taking a break. The profile link still works.</p>
        ) : (
          <>
            <div className={`activity-grid${status === 'loading' ? ' is-loading' : ''}`} aria-hidden="true">
              {days.map((day) => (
                <span
                  key={day.key}
                  className="activity-cell"
                  data-level={getLevel(day.count)}
                  title={`${day.key}: ${day.count} public event${day.count === 1 ? '' : 's'}`}
                />
              ))}
            </div>
            <p className="activity-status" aria-live="polite">
              {status === 'loading'
                ? 'Loading recent public GitHub activity…'
                : `${events.length} recent public events across ${activeDays} days.`}
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default GitHubActivity
