'use client'

import { useEffect, useState } from 'react'
import { SKY_EVENT, readMode, writeMode, type SkyMode } from '@/lib/sky'

const OPTIONS: { mode: SkyMode; label: string }[] = [
  { mode: 'auto', label: 'Sydney’s sky' },
  { mode: 'day', label: 'Day' },
  { mode: 'night', label: 'Night' },
]

/** Lets a visitor pin the light instead of following the sun. */
const SkyControl = () => {
  const [mode, setMode] = useState<SkyMode | null>(null)

  useEffect(() => {
    const sync = () => setMode(readMode())
    sync()
    window.addEventListener(SKY_EVENT, sync)
    return () => window.removeEventListener(SKY_EVENT, sync)
  }, [])

  return (
    <div className="sky-control" role="group" aria-labelledby="sky-control-label">
      <span id="sky-control-label" className="meta">
        Light
      </span>
      {OPTIONS.map((option) => (
        <button
          key={option.mode}
          type="button"
          className="sky-option"
          aria-pressed={mode === option.mode}
          onClick={() => writeMode(option.mode)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default SkyControl
