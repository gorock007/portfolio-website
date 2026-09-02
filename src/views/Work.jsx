import GridTopBar from '../components/GridTopBar'
import Layout from '../components/Layout'
import ListView from '../components/ListView'
import PageTitle from '../components/PageTitle'
import Tile from '../components/Tile'
import TileGrid from '../components/TileGrid'
import { useViewMode } from '../components/useViewMode'
import ProjectTile from '../components/tiles/ProjectTile'
import { projects } from '../data/projects'

const listItems = projects.map((project) => ({
  id: project.id,
  href: project.url,
  title: project.title,
  description: project.subtitle,
  meta: project.urlLabel,
}))

const Work = () => {
  const [view, setView] = useViewMode()

  return (
    <Layout>
      <PageTitle title="Work — Gorock Shetty" />

      <GridTopBar view={view} onViewChange={setView} caption="Everything I’ve shipped…" />

      {view === 'list' ? (
        <ListView items={listItems} />
      ) : (
        <TileGrid>
          <Tile size="wide">
            <h1 className="page-h1">Work.</h1>
            <p className="page-h2">
              Products and tools designed, built, and run end to end.
            </p>
          </Tile>

          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </TileGrid>
      )}
    </Layout>
  )
}

export default Work
