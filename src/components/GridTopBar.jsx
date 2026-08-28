import { GridIcon, ListIcon } from './Icons'

const GridTopBar = ({ view, onViewChange, caption }) => (
  <div className="grid-top-bar">
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
