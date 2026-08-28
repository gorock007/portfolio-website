import GridTopBar from '../components/GridTopBar'
import Layout from '../components/Layout'
import ListView from '../components/ListView'
import PageTitle from '../components/PageTitle'
import TileGrid from '../components/TileGrid'
import { useViewMode } from '../components/useViewMode'
import ActivityTile from '../components/tiles/ActivityTile'
import ManifestoTile from '../components/tiles/ManifestoTile'
import NowTile from '../components/tiles/NowTile'
import PortraitTile from '../components/tiles/PortraitTile'
import ProjectTile from '../components/tiles/ProjectTile'
import SocialTile from '../components/tiles/SocialTile'
import StackTile from '../components/tiles/StackTile'
import Tile from '../components/Tile'
import WritingTile from '../components/tiles/WritingTile'
import { featuredProjects, projects } from '../data/projects'
import { contactHandle, contactUrl } from '../data/siteLinks'
import { blogPosts } from '../data/writing'

const listItems = [
  ...projects.map((project) => ({
    id: project.id,
    href: project.url,
    title: project.title,
    description: project.subtitle,
    meta: project.urlLabel,
  })),
  ...blogPosts.map((post) => ({
    id: post.id,
    to: `/writings/${post.id}`,
    title: post.title,
    description: post.excerpt,
    meta: post.date,
  })),
]

export const Home = () => {
  const [view, setView] = useViewMode()
  const [naatiace, revisit] = featuredProjects
  const latestPost = blogPosts[0]

  return (
    <Layout>
      <PageTitle title="Gorock Shetty — building, learning, becoming" />
      <GridTopBar view={view} onViewChange={setView} caption="Look around…" />

      {view === 'list' ? (
        <ListView items={listItems} />
      ) : (
        <TileGrid>
          {/* The products come first. Dense packing promotes whatever is
              early enough to fill a gap, so listing the small tiles ahead of
              these would put trivia above the work people pay for. */}
          <ManifestoTile />
          {naatiace && <ProjectTile project={naatiace} />}
          {revisit && <ProjectTile project={revisit} />}

          <WritingTile post={latestPost} />
          <NowTile />
          <ActivityTile />
          <StackTile />

          <PortraitTile />
          <SocialTile />

          <Tile size="sm" to="/work">
            <div className="stat-tile">
              <p className="stat-label">Work</p>
              <p className="stat-body">
                The two products people pay for, designed, built, and run end to end.
              </p>
              <p className="project-url">
                See the work <span className="link-arrow" aria-hidden="true">→</span>
              </p>
            </div>
          </Tile>

          <Tile size="sm" href={contactUrl}>
            <div className="stat-tile">
              <p className="stat-label">Say hello</p>
              <p className="stat-body">
                If you’re building something in this space, or want to argue about what AI
                actually changes, my DMs are open.
              </p>
              <p className="project-url">
                {contactHandle} on X <span className="link-arrow" aria-hidden="true">↗</span>
              </p>
            </div>
          </Tile>
        </TileGrid>
      )}
    </Layout>
  )
}

export default Home
