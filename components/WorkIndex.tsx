import type { Project } from '@/data/types'
import { formatDay } from '@/lib/sun'
import SunStamp from './SunStamp'

/** One line per project, stamped with the sun on the day it began. */
const WorkIndex = ({ projects }: { projects: Project[] }) => (
  <ol className="index" role="list">
    {projects.map((project) => (
      <li key={project.id}>
        <a className="index-row" href={project.url} target="_blank" rel="noopener noreferrer">
          <SunStamp date={project.started} />
          <span className="index-title">{project.title}</span>
          <span className="index-desc">{project.subtitle}</span>
          <span className="index-meta">
            {project.kind} · <time dateTime={project.started}>{formatDay(project.started)}</time>
          </span>
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </li>
    ))}
  </ol>
)

export default WorkIndex
