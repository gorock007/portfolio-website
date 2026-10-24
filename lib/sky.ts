import { HORIZON, SYDNEY, sunAt } from './sun'

/**
 * The page is lit by Sydney's sky: day while the sun is up there, night once
 * it has set. A visitor can pin either one; the choice is kept in
 * localStorage under `sky`. `<html data-sky>` carries the result and the
 * stylesheet does the rest.
 */

export type Sky = 'day' | 'night'
export type SkyMode = 'auto' | Sky

const STORAGE_KEY = 'sky'
export const SKY_EVENT = 'skychange'

/** Matches --color-paper in each sky, for the browser's own chrome. */
const THEME_COLOR: Record<Sky, string> = { day: '#ffffff', night: '#0b0b0c' }

export const skyAt = (date: Date): Sky => (sunAt(date).altitude > HORIZON ? 'day' : 'night')

export const readMode = (): SkyMode => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'day' || stored === 'night' ? stored : 'auto'
  } catch {
    return 'auto'
  }
}

/**
 * The theme-color meta is created by SKY_SCRIPT, not rendered by React, so a
 * client-side navigation never resets it to the day colour behind our back.
 */
const setThemeColor = (sky: Sky) => {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'theme-color'
    document.head.appendChild(meta)
  }
  meta.content = THEME_COLOR[sky]
}

export const applySky = (mode: SkyMode = readMode()) => {
  const sky = mode === 'auto' ? skyAt(new Date()) : mode
  const root = document.documentElement
  const change = () => {
    root.dataset.sky = sky
    root.dataset.skyMode = mode
    setThemeColor(sky)
  }
  // Only a change of sky is animated, as one crossfade of the whole page —
  // tokens switching one by one under a CSS transition would pass through
  // states where the dots and the paper are nearly the same grey.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (root.dataset.sky !== sky && !reduce && 'startViewTransition' in document) {
    document.startViewTransition(change)
  } else {
    change()
  }
}

export const writeMode = (mode: SkyMode) => {
  try {
    if (mode === 'auto') localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    // Private windows can refuse storage; the choice still holds for this page.
  }
  applySky(mode)
  window.dispatchEvent(new Event(SKY_EVENT))
}

/** The next time the sun crosses the horizon over Sydney, and which way. */
export const nextHorizonCrossing = (from: Date) => {
  const STEP = 10 * 60_000
  const above = (time: number) => sunAt(new Date(time)).altitude > HORIZON
  const startAbove = above(from.getTime())

  let low = from.getTime()
  let high = low
  for (let i = 0; i < 6 * 26; i += 1) {
    high = low + STEP
    if (above(high) !== startAbove) break
    low = high
  }
  // Narrow the ten-minute window to the minute.
  while (high - low > 60_000) {
    const mid = (low + high) / 2
    if (above(mid) === startAbove) low = mid
    else high = mid
  }
  return { at: new Date(high), rises: !startAbove }
}

/**
 * Runs in <head> before first paint so the page never flashes the wrong sky.
 * It repeats the solar series from lib/sun.ts in miniature: the bundle is not
 * loaded yet when it has to run.
 */
export const SKY_SCRIPT = `(function(){try{var m=null;try{m=localStorage.getItem('${STORAGE_KEY}')}catch(e){}
if(m!=='day'&&m!=='night')m='auto';var s=m;if(m==='auto'){var n=new Date(),y=n.getUTCFullYear(),
l=(y%4===0&&y%100!==0)||y%400===0,d=Math.floor((n-Date.UTC(y,0,1))/864e5)+1,
h=n.getUTCHours()+n.getUTCMinutes()/60,g=2*Math.PI/(l?366:365)*(d-1+(h-12)/24),C=Math.cos,S=Math.sin,
e=229.18*(0.000075+0.001868*C(g)-0.032077*S(g)-0.014615*C(2*g)-0.040849*S(2*g)),
k=0.006918-0.399912*C(g)+0.070257*S(g)-0.006758*C(2*g)+0.000907*S(2*g)-0.002697*C(3*g)+0.00148*S(3*g),
r=Math.PI/180,a=((h*60+e+4*${SYDNEY.lon})/4-180)*r,f=${SYDNEY.lat}*r,
t=Math.asin(S(f)*S(k)+C(f)*C(k)*C(a))/r;s=t>${HORIZON}?'day':'night'}
var o=document.documentElement;o.dataset.sky=s;o.dataset.skyMode=m;
var c=document.createElement('meta');c.name='theme-color';c.content=s==='day'?'${THEME_COLOR.day}':'${THEME_COLOR.night}';
document.head.appendChild(c)}catch(e){}})()`
