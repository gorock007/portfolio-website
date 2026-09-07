import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import ListView, { type ListItem } from '@/components/ListView'
import Tile from '@/components/Tile'
import TileGrid from '@/components/TileGrid'
import ViewSwitcher from '@/components/ViewSwitcher'
import ProjectTile from '@/components/tiles/ProjectTile'
import { projects } from '@/data/projects'

const description = 'Products and tools designed, built, and run end to end.'

export const metadata: Metadata = {
  title: 'Work',
  description,
  alternates: { canonical: '/work' },
  openGraph: { title: 'Work — Gorock Shetty', description, url: '/work' },
  twitter: { title: 'Work — Gorock Shetty', description },
}

const listItems: ListItem[] = projects.map((project) => ({
  id: project.id,
  href: project.url,
  title: project.title,
  description: project.subtitle,
  meta: project.urlLabel,
}))

const WorkPage = () => (
  <Layout>
    <ViewSwitcher
      caption="Everything I’ve shipped…"
      list={<ListView items={listItems} />}
      grid={
        <TileGrid>
          <Tile size="wide">
            <h1 className="page-h1">Work.</h1>
            <p className="page-h2">{description}</p>
          </Tile>

          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </TileGrid>
      }
    />
  </Layout>
)

export default WorkPage
