import { stack } from '../../data/siteLinks'
import Tile from '../Tile'

const StackTile = () => (
  <Tile size="sm">
    <div className="stat-tile">
      <p className="stat-label">What I build with</p>
      <ul className="stat-list">
        {stack.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <p className="project-url">Shipped, not evaluated</p>
    </div>
  </Tile>
)

export default StackTile
