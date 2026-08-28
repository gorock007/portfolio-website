import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

/**
 * Wraps a single interactive child and lifts a dark label above it.
 * Opens on hover *and* on keyboard focus, so it is not a pointer-only
 * affordance. The label is aria-hidden because the trigger already carries the
 * same text as its aria-label — exposing both makes screen readers say it twice.
 */
const Tooltip = ({ label, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.span
            className="tooltip"
            aria-hidden="true"
            initial={{ opacity: 0, y: 4, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 4, x: '-50%' }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}

export default Tooltip
