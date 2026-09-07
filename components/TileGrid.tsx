import type { ComponentPropsWithoutRef } from 'react'
import type { ViewMode } from './useViewMode'

type TileGridProps = { view?: ViewMode } & ComponentPropsWithoutRef<'div'>

const TileGrid = ({ view = 'grid', children, ...rest }: TileGridProps) => (
  <div className="tile-grid" data-view={view} {...rest}>
    {children}
  </div>
)

export default TileGrid
