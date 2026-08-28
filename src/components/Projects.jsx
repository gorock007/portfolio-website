import { projectsData } from './ProjectsData'

const Projects = () => {
  return (
    <section id="work" className="revamp-work" aria-labelledby="work-title">
      <div className="revamp-container compact-container">
        <header className="revamp-section-head">
          <h2 id="work-title">Projects</h2>
        </header>

        <div className="revamp-project-list">
          {projectsData.map((project) => (
            <article key={project.id} className="revamp-project">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="revamp-project-link"
                aria-label={`Visit ${project.title}`}
              >
                <figure className="revamp-project-media">
                  <img src={project.img} alt={project.imgAlt} loading="lazy" decoding="async" width="1280" height="720" />
                </figure>

                <div className="revamp-project-copy">
                  <h3>{project.title}</h3>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                  <p>{project.description}</p>
                  <span className="revamp-project-url">{project.urlLabel}</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
