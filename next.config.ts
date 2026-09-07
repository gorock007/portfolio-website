import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // One cover (agi-smear-cover.svg) is a hand-drawn SVG built from the theme
    // tokens. Every image on the site is a local asset imported at build time,
    // so the optimizer is never pointed at third-party markup — and the policy
    // below keeps anything it does serve inert.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig
