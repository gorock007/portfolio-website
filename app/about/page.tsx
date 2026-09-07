import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Tile from '@/components/Tile'
import TileGrid from '@/components/TileGrid'
import ActivityTile from '@/components/tiles/ActivityTile'
import PortraitTile from '@/components/tiles/PortraitTile'
import SocialTile from '@/components/tiles/SocialTile'
import StackTile from '@/components/tiles/StackTile'
import { aboutBlocks } from '@/data/about'
import { contactHandle, contactUrl, profile } from '@/data/siteLinks'

const description =
  'Who Gorock Shetty is, how he thinks, what he is building from Sydney, and what he is after.'

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: { title: 'About — Gorock Shetty', description, url: '/about' },
  twitter: { title: 'About — Gorock Shetty', description },
}

const AboutPage = () => (
  <Layout>
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
            space, or you just want to argue about what AI actually changes, my DMs are open.
          </p>
          <a
            className="pill-button"
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactHandle} on X <span className="link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </Tile>
    </TileGrid>
  </Layout>
)

export default AboutPage
