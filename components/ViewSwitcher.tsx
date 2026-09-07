'use client'

import type { ReactNode } from 'react'
import GridTopBar from './GridTopBar'
import { useViewMode } from './useViewMode'

type ViewSwitcherProps = {
  caption?: string
  grid: ReactNode
  /** Omitted when there is nothing to list — the toggle then always shows the grid. */
  list?: ReactNode
}

/**
 * The only stateful part of the tile pages, isolated so the pages themselves
 * stay server components: both layouts are rendered on the server and handed
 * over as children, and this just chooses which one is on screen.
 */
const ViewSwitcher = ({ caption, grid, list }: ViewSwitcherProps) => {
  const [view, setView] = useViewMode()

  return (
    <>
      <GridTopBar view={view} onViewChange={setView} caption={caption} />
      {view === 'list' && list ? list : grid}
    </>
  )
}

export default ViewSwitcher
