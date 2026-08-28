import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

const enter = {
  hidden: { opacity: 0, y: 48, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

/**
 * The single surface primitive: a rounded grey panel on the 328px module.
 * `size` picks the footprint — sm/md (1×1), lg (1×2), wide (2×1), xl (2×2),
 * auto (2 wide, content height). Pass `to` for an internal link tile, `href`
 * for an external one, or neither for a static panel.
 */
const Tile = ({ size = 'sm', className = '', to, href, children, ...rest }) => {
  const classes = ['tile', `tile--${size}`, className].filter(Boolean).join(' ')

  const motionProps = {
    className: classes,
    variants: enter,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }

  if (to) {
    return (
      <MotionLink {...motionProps} to={to} {...rest}>
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
