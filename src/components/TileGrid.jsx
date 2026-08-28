const TileGrid = ({ view = 'grid', children, ...rest }) => (
  <div className="tile-grid" data-view={view} {...rest}>
    {children}
  </div>
)

export default TileGrid
