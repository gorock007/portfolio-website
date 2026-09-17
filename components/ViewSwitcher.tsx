'use client'

import type { ReactNode } from 'react'
import GridTopBar from './GridTopBar'
import { useViewMode } from './useViewMode'

type ViewSwitcherProps = {
  caption?: string
  /** The page's <h1>. The grid carries one in a tile; the list has no tile to
      put it in, so without this a visitor whose saved view is the list lands
      on a page with no headings at all. */
  heading?: ReactNode
  /** Set alongside `<TileGrid className="tile-grid--pairs">` on a page whose
      every tile spans two tracks, so the toggle keeps the grid's width. */
  pairs?: boolean
  grid: ReactNode
  /** Omitted when there is nothing to list — the toggle then always shows the grid. */
  list?: ReactNode
}

/**
 * The only stateful part of the tile pages, isolated so the pages themselves
 * stay server components: both layouts are rendered on the server and handed
 * over as children, and this just chooses which one is on screen.
 */
const ViewSwitcher = ({ caption, heading, pairs, grid, list }: ViewSwitcherProps) => {
  const [view, setView] = useViewMode()

  return (
    <>
      <GridTopBar view={view} onViewChange={setView} caption={caption} pairs={pairs} />
      {view === 'list' && list ? (
        <>
          {heading}
          {list}
        </>
      ) : (
        grid
      )}
    </>
  )
}

export default ViewSwitcher
