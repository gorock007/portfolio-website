import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import DotPattern from '@/components/DotPattern'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Providers from '@/components/Providers'
import ReadingRoom from '@/components/ReadingRoom'
import RouteFocus from '@/components/RouteFocus'
import { geist } from '@/lib/fonts'
import { site } from '@/lib/site'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: '%s — Gorock Shetty',
  },
  description: site.description,
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
  themeColor: '#ffffff',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={geist.variable}>
    <body>
      <Providers>
        <DotPattern className="dot-pattern--page" interactive />

        {/* Nav and Footer live outside the route slot so they survive
            navigation. Rendered per-view they were torn down and rebuilt on
            every route change, which left the nav pill with nothing to animate
            from — it mounted already in place. */}
        <RouteFocus />
        <ReadingRoom />
        <Nav />
        {children}
        <Footer />
      </Providers>
    </body>
  </html>
)

export default RootLayout
