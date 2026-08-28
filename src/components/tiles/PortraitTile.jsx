import portrait from '../../images/portrait.jpg'
import portraitLaughing from '../../images/portrait-laughing.jpg'
import { profile } from '../../data/siteLinks'
import Tile from '../Tile'

const PortraitTile = () => (
  <Tile size="sm" className="portrait-tile">
    <img
      src={portrait}
      alt={`${profile.name}, photographed outdoors`}
      loading="lazy"
      decoding="async"
    />
    {/* The same frame, laughing, cross-faded in on hover. Decorative: the
        image underneath already names the subject, so announcing this one
        would just repeat it. */}
    <img
      className="portrait-hover"
      src={portraitLaughing}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
    />
  </Tile>
)

export default PortraitTile
