'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import type { ReactNode } from 'react'
import type { TileSize } from '@/data/types'

const MotionLink = motion.create(Link)

const enter: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

type TileProps = {
  size?: TileSize
  className?: string
  to?: string
  href?: string
  children?: ReactNode
  /* A tile renders as a div, an anchor or a Link depending on its props, and
     the three disagree about their event handlers. Rather than union the lot,
     only the attributes tiles actually pass through are accepted. */
  id?: string
  'aria-label'?: string
}

/**
 * The single surface primitive: a rounded grey panel on the 328px module.
 * `size` picks the footprint — sm/md (1×1), lg (1×2), wide (2×1), xl (2×2),
 * auto (2 wide, content height). Pass `to` for an internal link tile, `href`
 * for an external one, or neither for a static panel.
 */
const Tile = ({ size = 'sm', className = '', to, href, children, ...rest }: TileProps) => {
  const classes = ['tile', `tile--${size}`, className].filter(Boolean).join(' ')

  const motionProps = {
    className: classes,
    variants: enter,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  } as const

  if (to) {
    return (
      <MotionLink {...motionProps} href={to} {...rest}>
        {children}
      </MotionLink>
    )
  }

  if (href) {
    // mailto: and tel: must not open a blank tab.
    const isExternal = /^https?:/.test(href)

    return (
      <motion.a
        {...motionProps}
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div {...motionProps} {...rest}>
      {children}
    </motion.div>
  )
}

export default Tile
