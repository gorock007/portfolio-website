import portrait from '../../images/profile.jpg'
import { profile } from '../../data/siteLinks'
import { XIcon } from '../Icons'
import Tile from '../Tile'

const SocialTile = () => (
  <Tile size="sm">
    <div className="stat-tile">
      <div className="social-head">
        <img className="social-avatar" src={portrait} alt="" loading="lazy" decoding="async" />
        <div>
          <p className="social-name">{profile.name}</p>
          <p className="social-handle">@gorockbits</p>
        </div>
        <span className="social-mark" aria-hidden="true">
          <XIcon />
        </span>
      </div>

      <p className="social-body">
        Notes on what I’m building, what broke, and what I got wrong.
      </p>

      <a
        className="pill-button"
        href="https://x.com/gorockbits"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow along <span className="link-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  </Tile>
)

export default SocialTile
