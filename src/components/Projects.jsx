import { projectsData } from './ProjectsData'

const Projects = () => {
  return (
    <section id="work" className="revamp-work" aria-labelledby="work-title">
      <div className="revamp-container">
        <header className="revamp-section-head">
          <h2 id="work-title">Two things I’ve made.</h2>
        </header>

        <div className="revamp-project-list">
          {projectsData.map((project, index) => (
            <article key={project.id} className="revamp-project">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="revamp-project-link"
                aria-label={`Visit ${project.title}`}
              >
                <div className="revamp-project-copy">
                  <span className="revamp-project-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="revamp-project-url">{project.urlLabel} <span aria-hidden="true">↗</span></span>
                </div>

                <figure className="revamp-project-media">
                  <img src={project.img} alt={project.imgAlt} loading="lazy" decoding="async" width="1280" height="800" />
                </figure>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
