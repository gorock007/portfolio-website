import { GridIcon, ListIcon } from './Icons'
import type { ViewMode } from './useViewMode'

type GridTopBarProps = {
  view: ViewMode
  onViewChange: (view: ViewMode) => void
  caption?: string
  /** Matches the bar's width to a `tile-grid--pairs` grid at the 3-column band. */
  pairs?: boolean
}

const GridTopBar = ({ view, onViewChange, caption, pairs }: GridTopBarProps) => (
  <div className={`grid-top-bar${pairs ? ' grid-top-bar--pairs' : ''}`}>
    {caption && <p className="grid-caption">{caption}</p>}

    <div className="view-controls" role="group" aria-label="Layout">
      <button
        type="button"
        className="view-control"
        aria-pressed={view === 'grid'}
        aria-label="Grid view"
        onClick={() => onViewChange('grid')}
      >
        <GridIcon />
      </button>
      <button
        type="button"
        className="view-control"
        aria-pressed={view === 'list'}
        aria-label="List view"
        onClick={() => onViewChange('list')}
      >
        <ListIcon />
      </button>
    </div>
  </div>
)

export default GridTopBar
