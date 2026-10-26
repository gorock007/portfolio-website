import type { Metadata } from 'next'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Ledger from '@/components/Ledger'
import SunStamp from '@/components/SunStamp'
import type { Project } from '@/data/types'
import { productProjects, toolProjects } from '@/data/projects'
import { formatDay } from '@/lib/sun'

const description =
  'Products Gorock Shetty runs and the tools he has open-sourced.'

export const metadata: Metadata = {
  title: 'Work',
  description,
  alternates: { canonical: '/work' },
  openGraph: { title: 'Work — Gorock Shetty', description, url: '/work' },
  twitter: { title: 'Work — Gorock Shetty', description },
}

const Begun = ({ project }: { project: Project }) => (
  <p className="entry-stamp">
    <SunStamp date={project.started} />
    <span className="meta">
      {project.kind}
      <br />
      Begun {formatDay(project.started)}
    </span>
  </p>
)

const ExternalLink = ({ project }: { project: Project }) => (
  <a className="entry-link" href={project.url} target="_blank" rel="noopener noreferrer">
    {project.urlLabel} <span className="arrow" aria-hidden="true">↗</span>
    <span className="visually-hidden"> (opens in a new tab)</span>
  </a>
)

const Proof = ({ items }: { items?: string[] }) =>
  items?.length ? (
    <ul className="proof" role="list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ) : null

const WorkPage = () => (
  <Layout>
    <header className="page-head">
      <h1 className="page-title">Work</h1>
      <p className="lead">
        The products I run and the tools I’ve given away. Each is stamped with the sun as it stood
        over Sydney on the day it began.
      </p>
    </header>

    <Ledger id="products-label" label="Products">
      {productProjects.map((project, index) => (
        <article key={project.id} id={project.id} className="product" aria-labelledby={`${project.id}-title`}>
          {project.img && (
            <a
              className="product-shot"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={project.img}
                alt=""
                sizes="(max-width: 999px) 100vw, 640px"
                loading={index === 0 ? 'eager' : undefined}
              />
            </a>
          )}
          <div>
            <Begun project={project} />
            <h3 id={`${project.id}-title`} className="entry-title">
              {project.title}
            </h3>
            <p className="entry-subtitle">{project.subtitle}</p>
            {project.detail && <p className="entry-detail">{project.detail}</p>}
            <Proof items={project.proof} />
            <ExternalLink project={project} />
          </div>
        </article>
      ))}
    </Ledger>

    <Ledger id="tools-label" label="Open source & experiments">
      <div className="shelf">
        {toolProjects.map((project) => (
          <article key={project.id} id={project.id} className="tool" aria-labelledby={`${project.id}-title`}>
            <Begun project={project} />
            <h3 id={`${project.id}-title`} className="entry-title">
              {project.title}
            </h3>
            <p className="entry-subtitle">{project.subtitle}</p>
            {project.detail && <p className="entry-detail">{project.detail}</p>}
            <Proof items={project.proof} />
            <ExternalLink project={project} />
          </article>
        ))}
      </div>
    </Ledger>
  </Layout>
)

export default WorkPage
