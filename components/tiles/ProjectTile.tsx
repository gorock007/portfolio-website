import Image from 'next/image'
import type { Project, TileSize } from '@/data/types'
import Tile from '../Tile'

const ProjectTile = ({ project, size }: { project: Project; size?: TileSize }) => (
  <Tile
    size={size || project.size}
    // No capture means the tile is all copy, which reflows several lines longer
    // as the grid narrows. The auto row track already grows to fit it; this also
    // lifts .tile's overflow at one column, where the margin is thinnest.
    className={`project-card${project.img ? '' : ' tile--grow'}`}
    href={project.url}
    aria-label={`${project.title} — ${project.subtitle}`}
  >
    <article className={`project-tile project-tile--${project.id}`}>
      <div className="project-head">
        <div>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <span className="project-url">
          <span className="project-url-label">{project.urlLabel} </span>
          <span className="link-arrow" aria-hidden="true">↗</span>
        </span>
      </div>

      {project.img ? (
        <figure className="tile-media">
          <Image
            src={project.img}
            alt={project.imgAlt ?? ''}
            fill
            sizes="(max-width: 767px) 100vw, 672px"
          />
        </figure>
      ) : (
        // No capture to show — the claims carry the tile instead of empty grey.
        <div className="project-fallback">
          {project.detail && <p className="stat-body">{project.detail}</p>}
          {project.proof && (
            <ul className="stat-list" role="list">
              {project.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  </Tile>
)

export default ProjectTile
