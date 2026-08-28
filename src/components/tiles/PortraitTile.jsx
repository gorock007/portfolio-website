import portrait from '../../images/profile.jpg'
import { profile } from '../../data/siteLinks'
import Tile from '../Tile'

const PortraitTile = () => (
  <Tile size="sm" className="portrait-tile">
    <img src={portrait} alt={`${profile.name}, photographed outdoors`} loading="lazy" decoding="async" />
  </Tile>
)

export default PortraitTile
