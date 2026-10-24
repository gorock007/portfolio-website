/**
 * Where the sun stands over Sydney. The whole site is organised around this:
 * the home page plots a year of work on the noon-sun analemma, every dated
 * thing carries a small stamp of that loop, and the page is lit or dark
 * depending on whether the sun is up in Sydney right now.
 *
 * The solar position is NOAA's low-precision series (good to about a minute
 * of time and a tenth of a degree), which is far finer than anything drawn.
 */

export const SYDNEY = { lat: -33.8688, lon: 151.2093, zone: 'Australia/Sydney' } as const

/** The sun's centre at the horizon once refraction and its radius are counted. */
export const HORIZON = -0.833

/**
 * The analemma is drawn at a fixed clock time. 12:00 standard time (AEST,
 * UTC+10) rather than civil time: daylight saving would shift half the year by
 * an hour and tear the figure-eight in two.
 */
const NOON_UTC_HOUR = 2

const RAD = Math.PI / 180

export type SunPosition = {
  /** Degrees above the horizon; negative below it. */
  altitude: number
  /** Degrees clockwise from true north. */
  azimuth: number
}

const isLeap = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

/** Fractional year (radians), equation of time (minutes) and declination (radians). */
const orbit = (date: Date) => {
  const year = date.getUTCFullYear()
  const dayOfYear = Math.floor((date.getTime() - Date.UTC(year, 0, 1)) / 864e5) + 1
  const hours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600
  const g = ((2 * Math.PI) / (isLeap(year) ? 366 : 365)) * (dayOfYear - 1 + (hours - 12) / 24)

  const equationOfTime =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(g) -
      0.032077 * Math.sin(g) -
      0.014615 * Math.cos(2 * g) -
      0.040849 * Math.sin(2 * g))

  const declination =
    0.006918 -
    0.399912 * Math.cos(g) +
    0.070257 * Math.sin(g) -
    0.006758 * Math.cos(2 * g) +
    0.000907 * Math.sin(2 * g) -
    0.002697 * Math.cos(3 * g) +
    0.00148 * Math.sin(3 * g)

  return { hours, equationOfTime, declination }
}

/** The sun's altitude and azimuth over Sydney at an instant. */
export const sunAt = (date: Date): SunPosition => {
  const { hours, equationOfTime, declination } = orbit(date)
  const trueSolarMinutes = hours * 60 + equationOfTime + 4 * SYDNEY.lon
  const hourAngle = (trueSolarMinutes / 4 - 180) * RAD
  const phi = SYDNEY.lat * RAD

  const cosZenith =
    Math.sin(phi) * Math.sin(declination) +
    Math.cos(phi) * Math.cos(declination) * Math.cos(hourAngle)
  const altitude = 90 - Math.acos(Math.min(1, Math.max(-1, cosZenith))) / RAD

  const azimuth =
    Math.atan2(
      Math.sin(hourAngle),
      Math.cos(hourAngle) * Math.sin(phi) - Math.tan(declination) * Math.cos(phi),
    ) /
      RAD +
    180

  return { altitude, azimuth: (azimuth + 360) % 360 }
}

/** The instant the analemma samples for a calendar date (`YYYY-MM-DD`). */
export const noonOf = (isoDate: string) => {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day, NOON_UTC_HOUR))
}

/**
 * The analemma flattened onto the sky as you see it facing north from Sydney:
 * x is degrees east of the meridian (scaled by cos altitude, so it is a true
 * angle rather than an azimuth), y is degrees of altitude.
 */
export const skyPoint = (isoDate: string) => {
  const { altitude, azimuth } = sunAt(noonOf(isoDate))
  const east = ((azimuth + 180) % 360) - 180
  return { x: east * Math.cos(altitude * RAD), y: altitude, altitude }
}

/**
 * The loop is about six times taller than it is wide. Every drawing of it
 * stretches east–west by this much so the two lobes can be told apart.
 */
export const EAST_WEST_STRETCH = 3

/* ---------------------------------------------------------------------------
   Calendar helpers. Everything is keyed by Sydney's calendar date, because
   that is the day the work happened in.
--------------------------------------------------------------------------- */

const isoFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: SYDNEY.zone,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

/** Sydney's calendar date for an instant, as `YYYY-MM-DD`. */
export const sydneyDate = (instant: Date = new Date()) => isoFormatter.format(instant)

export const addDays = (isoDate: string, days: number) => {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day + days)).toISOString().slice(0, 10)
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/** "30 September 2026" → "2026-09-30". The notes are dated for people. */
export const isoFromHuman = (human: string) => {
  const [day, monthName, year] = human.trim().split(/\s+/)
  const month = MONTHS.indexOf(monthName) + 1
  if (!month) throw new Error(`Unrecognised date: ${human}`)
  return `${year}-${String(month).padStart(2, '0')}-${day.padStart(2, '0')}`
}

const SHORT_MONTHS = MONTHS.map((month) => month.slice(0, 3))
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/** "2026-09-30" → "30 Sep 2026", with the weekday if asked. Locale-free, so SSR matches. */
export const formatDay = (isoDate: string, { weekday = false } = {}) => {
  const [year, month, day] = isoDate.split('-').map(Number)
  const text = `${day} ${SHORT_MONTHS[month - 1]} ${year}`
  if (!weekday) return text
  return `${WEEKDAYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()]} ${text}`
}

/** "2026-09-30" → "Sep 2026". */
export const formatMonth = (isoDate: string) => {
  const [year, month] = isoDate.split('-').map(Number)
  return `${SHORT_MONTHS[month - 1]} ${year}`
}
