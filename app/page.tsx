import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import ListView, { type ListItem } from '@/components/ListView'
import Tile from '@/components/Tile'
import TileGrid from '@/components/TileGrid'
import ViewSwitcher from '@/components/ViewSwitcher'
import ActivityTile from '@/components/tiles/ActivityTile'
import ManifestoTile from '@/components/tiles/ManifestoTile'
import NowTile from '@/components/tiles/NowTile'
import PortraitTile from '@/components/tiles/PortraitTile'
import ProjectTile from '@/components/tiles/ProjectTile'
import SocialTile from '@/components/tiles/SocialTile'
import StackTile from '@/components/tiles/StackTile'
import WritingTile from '@/components/tiles/WritingTile'
import { featuredProjects, projects } from '@/data/projects'
import { contactHandle, contactUrl } from '@/data/siteLinks'
import { blogPosts } from '@/data/writing'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: site.title,
  alternates: { canonical: '/' },
}

const listItems: ListItem[] = [
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

const HomePage = () => {
  const latestPost = blogPosts[0]

  return (
    <Layout>
      <ViewSwitcher
        caption="Look around…"
        list={<ListView items={listItems} />}
        grid={
          <TileGrid>
            {/* The products come first. Dense packing promotes whatever is
                early enough to fill a gap, so listing the small tiles ahead of
                these would put trivia above the work. */}
            <ManifestoTile />
            {featuredProjects.map((project) => (
              <ProjectTile key={project.id} project={project} />
            ))}

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
                  Products and tools designed, built, and run end to end.
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
        }
      />
    </Layout>
  )
}

export default HomePage
