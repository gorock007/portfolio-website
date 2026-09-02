import { profile } from '../../data/siteLinks'
import Tile from '../Tile'

const NowTile = () => (
  <Tile size="sm">
    <div className="stat-tile">
      <p className="stat-label">Now</p>
      <p className="stat-body">
        Building <strong>{profile.building.label}</strong>, <strong>Revisit</strong>, and{' '}
        <strong>Don’t Make It Ugly</strong> from <strong>Sydney</strong> — learning extensively
        about AI, and genuinely optimistic about what comes next.
      </p>
      <p className="project-url">{profile.location}</p>
    </div>
  </Tile>
)

export default NowTile
