import { Geist } from 'next/font/google'

/**
 * One family for the whole site. Loaded once here and handed to CSS as
 * --font-geist, which styles/globals.css folds into the --font-sans token.
 */
export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
})
