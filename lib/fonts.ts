import { Geist, Geist_Mono } from 'next/font/google'

/**
 * Geist for everything that is read, Geist Mono for everything that is
 * measured — dates, altitudes, counts. Loaded once here and handed to CSS as
 * --font-geist and --font-geist-mono.
 */
export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
})

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
})
