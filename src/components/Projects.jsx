import { motion } from 'framer-motion'
import { projectsData } from './ProjectsData'

const Projects = () => {
  return (
    <section id="work" className="section-block" aria-labelledby="work-title">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="section-heading"
        >
          <p className="section-label">Selected work</p>
          <h2 id="work-title">Two small bets, out in the world.</h2>
        </motion.div>

        <div className="project-list">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.68, delay: index * 0.06 }}
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-card project-card-${project.theme}`}
                aria-label={`Visit ${project.title}`}
              >
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>Live product</span>
                  </div>

                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>

                  <div>
                    <ul className="project-proof" aria-label={`${project.title} highlights`}>
                      {project.proof.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <span className="project-link">
                      Visit {project.urlLabel} <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </div>

                <div className={`project-media project-media-${project.id}`}>
                  <div className="project-window">
                    <div className="window-bar" aria-hidden="true">
                      <span className="window-dots"><i /><i /><i /></span>
                      <span>{project.urlLabel}</span>
                    </div>
                    <img src={project.img} alt={project.imgAlt} loading="lazy" decoding="async" />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
