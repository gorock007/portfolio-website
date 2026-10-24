import snapshot from '@/data/activity.json'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/writing'
import { EAST_WEST_STRETCH, addDays, isoFromHuman, skyPoint, sydneyDate } from './sun'

// GitHub's contribution graph is only exposed through the authenticated
// GraphQL API, so the counts come from this public read-only mirror of it.
const CONTRIBUTIONS_URL = 'https://github-contributions-api.jogruber.de/v4/gorock007?y=last'

/** Re-read hourly, so the loop moves on by a day without a redeploy. */
export const YEAR_REVALIDATE = 3600

const DAYS = 365

export type YearEvent = { label: string; href: string; kind: 'work' | 'note' }

export type YearDay = {
  date: string
  /** Position in the figure's own units: degrees, east–west stretched. */
  x: number
  y: number
  altitude: number
  count: number
  events: YearEvent[]
}

export type Year = {
  days: YearDay[]
  total: number
  activeDays: number
}

/**
 * Live counts where the mirror answers, laid over the committed snapshot in
 * data/activity.json (`npm run snapshot:activity`), so the loop is never
 * drawn empty because a third-party service is down.
 */
const loadContributions = async () => {
  const counts = new Map<string, number>(Object.entries(snapshot.counts))
  try {
    const response = await fetch(CONTRIBUTIONS_URL, {
      headers: { Accept: 'application/json' },
      next: { revalidate: YEAR_REVALIDATE },
      signal: AbortSignal.timeout(5000),
    })
    if (!response.ok) return counts
    const data = (await response.json()) as { contributions?: { date: string; count: number }[] }
    for (const day of data.contributions ?? []) counts.set(day.date, day.count)
  } catch {
    // Keep the snapshot.
  }
  return counts
}

const eventsByDate = () => {
  const map = new Map<string, YearEvent[]>()
  const add = (date: string, event: YearEvent) => map.set(date, [...(map.get(date) ?? []), event])

  for (const project of projects) {
    add(project.started, { label: project.title, href: `/work#${project.id}`, kind: 'work' })
  }
  for (const post of blogPosts) {
    add(isoFromHuman(post.date), { label: post.title, href: `/writings/${post.id}`, kind: 'note' })
  }
  return map
}

/** The last 365 days in Sydney, oldest first, each placed on the noon analemma. */
export const getYear = async (): Promise<Year> => {
  const today = sydneyDate()
  const contributions = await loadContributions()
  const events = eventsByDate()

  const days = Array.from({ length: DAYS }, (_, index) => {
    const date = addDays(today, index - (DAYS - 1))
    const point = skyPoint(date)
    return {
      date,
      x: point.x * EAST_WEST_STRETCH,
      y: point.y,
      altitude: point.altitude,
      count: contributions.get(date) ?? 0,
      events: events.get(date) ?? [],
    }
  })

  return {
    days,
    total: days.reduce((sum, day) => sum + day.count, 0),
    activeDays: days.filter((day) => day.count > 0).length,
  }
}
