import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PersonSchema from '@/components/PersonSchema'
import RouteFocus from '@/components/RouteFocus'
import { geist, geistMono } from '@/lib/fonts'
import { SKY_SCRIPT } from '@/lib/sky'
import { site } from '@/lib/site'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: '%s — Gorock Shetty',
  },
  description: site.description,
  // Both spellings, so a search for either name has something to match.
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [site.name, site.alternateName, 'NaatiAce', 'Revisit', 'AI products', 'Sydney'],
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: '/',
    title: site.title,
    description: site.shortDescription,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: 'summary_large_image',
    site: site.twitterHandle,
    creator: site.twitterHandle,
    title: site.title,
    description: site.shortDescription,
    images: [site.ogImage],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // The sky script below rewrites this to the night colour after sunset.
  themeColor: '#ffffff',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  // suppressHydrationWarning: the sky script sets data-sky on <html> before
  // React hydrates, and React should keep it rather than strip it.
  <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{ __html: SKY_SCRIPT }} />
    </head>
    <body>
      <PersonSchema />
      {/* Header and Footer live outside the route slot so they survive
          navigation — the sky clock keeps ticking instead of remounting. */}
      <RouteFocus />
      <Header />
      {children}
      <Footer />
    </body>
  </html>
)

export default RootLayout
