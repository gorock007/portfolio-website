import Tile from '../Tile'

const ProjectTile = ({ project, size }) => (
  <Tile
    size={size || project.size}
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
          <img src={project.img} alt={project.imgAlt} loading="lazy" decoding="async" />
        </figure>
      ) : (
        // No capture to show — the claims carry the tile instead of empty grey.
        <div className="project-fallback">
          {project.detail && <p className="stat-body">{project.detail}</p>}
          {project.proof && (
            <ul className="stat-list">
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
