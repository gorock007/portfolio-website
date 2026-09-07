'use client'

import { MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * The one client boundary the whole tree sits inside. `children` is passed in
 * from the server layout, so everything below stays a server component unless
 * it opts out itself.
 */
const Providers = ({ children }: { children: ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
)

export default Providers
