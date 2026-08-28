import { Link } from 'react-router-dom'
import { manifestoFootnote, manifestoLines } from '../../data/manifesto'
import { profile } from '../../data/siteLinks'
import Tile from '../Tile'

const ManifestoTile = () => (
  <Tile size="xl" className="tile--grow">
    <div className="manifesto">
      <h1 className="display-heading">
        {profile.name.split(' ')[0]} is building{' '}
        <a
          className="display-emphasis inline-link"
          href={profile.building.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.building.label}
        </a>
        .
      </h1>

      <hr className="intro-hr" />

      <div className="manifesto-lines">
        {manifestoLines.map((line) => (
          <p key={line} className="display-2-heading">
            {line}
          </p>
        ))}
      </div>

      <p className="asterisk">
        <span aria-hidden="true">* </span>
        <Link to={manifestoFootnote.href} className="inline-link">
          {manifestoFootnote.text}
        </Link>
      </p>
    </div>
  </Tile>
)

export default ManifestoTile
