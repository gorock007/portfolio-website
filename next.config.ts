import type { NextConfig } from 'next'

// The image optimizer only handles the raster images. The drawn SVG covers
// are passed `unoptimized` (see lib/images.ts) and served as static files, so
// SVG stays switched off here — Next's default — and the optimizer never
// parses SVG markup at all.
const nextConfig: NextConfig = {}

export default nextConfig
