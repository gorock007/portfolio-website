import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Tile from '../components/Tile'
import TileGrid from '../components/TileGrid'
import ActivityTile from '../components/tiles/ActivityTile'
import PortraitTile from '../components/tiles/PortraitTile'
import SocialTile from '../components/tiles/SocialTile'
import StackTile from '../components/tiles/StackTile'
import { aboutBlocks } from '../data/about'
import { profile } from '../data/siteLinks'

const About = () => (
  <Layout>
    <PageTitle title="About — Gorock Shetty" />

    <TileGrid>
      <Tile size="auto">
        <h1 className="display-heading">
          <span className="display-emphasis">What I’m about.</span>
        </h1>

        <hr className="intro-hr" />

        {aboutBlocks.map((block) => (
          <section key={block.label} className="about-block">
            <h2 className="work-label">{block.label}</h2>
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </section>
        ))}
      </Tile>

      <PortraitTile />
      <SocialTile />
      <StackTile />
      <ActivityTile />

      <Tile size="wide">
        <div className="stat-tile">
          <p className="stat-label">Where to find me</p>
          <p className="stat-body">
            I’m in <strong>{profile.location}</strong>. If you’re building something in this
            space, or you just want to argue about what AI actually changes, the inbox is open.
          </p>
          <a className="pill-button" href={`mailto:${profile.email}`}>
            {profile.email} <span className="link-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </Tile>
    </TileGrid>
  </Layout>
)

export default About
