import type { Metadata } from 'next'
import Link from 'next/link'
import Analemma from '@/components/Analemma'
import Layout from '@/components/Layout'
import Ledger from '@/components/Ledger'
import WorkIndex from '@/components/WorkIndex'
import WritingIndex from '@/components/WritingIndex'
import { manifestoFootnote, manifestoLines } from '@/data/manifesto'
import { productProjects, toolProjects } from '@/data/projects'
import { contactHandle, contactUrl } from '@/data/siteLinks'
import { blogPosts } from '@/data/writing'
import { site } from '@/lib/site'
import { formatDay } from '@/lib/sun'
import { getYear } from '@/lib/year'

export const metadata: Metadata = {
  title: site.title,
  alternates: { canonical: '/' },
}

// The loop ends on today, so the page is rebuilt hourly to keep up with it.
export const revalidate = 3600

const HomePage = async () => {
  const year = await getYear()
  const [statement, ...creed] = manifestoLines
  const first = year.days[0]

  return (
    <Layout>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <h1 id="hero-title" className="display">
            <span className="hero-name">Gorock Shetty</span>
            {statement}
          </h1>

          <ul className="creed" role="list">
            {creed.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <p className="creed-foot">
            <span aria-hidden="true">* </span>
            <Link href={manifestoFootnote.href}>{manifestoFootnote.text}</Link>
          </p>
        </div>

        <figure className="hero-figure">
          <Analemma days={year.days} />
          <figcaption className="caption">
            Photograph the sun from one spot at the same hour every day and it draws a
            figure-eight across the sky. This is that loop over Sydney at noon, from{' '}
            {formatDay(first.date)} to today, and each dot is one of my days: the darker, the more
            code I shipped — {year.total.toLocaleString('en-AU')} contributions on{' '}
            {year.activeDays} days. Ringed days are launches and essays. East–west is stretched threefold so the lobes
            read.
          </figcaption>
        </figure>
      </section>

      <Ledger id="work-label" label="Work" more={{ href: '/work', label: 'Everything, back to 2018' }}>
        <WorkIndex projects={[...productProjects, ...toolProjects]} />
      </Ledger>

      <Ledger id="writing-label" label="Writing" more={{ href: '/writings', label: 'All writing' }}>
        <WritingIndex posts={blogPosts} />
      </Ledger>

      <Ledger id="now-label" label="Now">
        <p className="lead">
          Running NaatiAce and Revisit, building Klypst and Don’t Make It Ugly, and open-sourcing
          the tools I make along the way — from Sydney. Learning extensively about AI, and
          genuinely optimistic about what comes next.
        </p>
        <p className="lead lead--quiet">
          If you’re building in this space, or want to argue about what AI actually changes, my DMs
          are open:{' '}
          <a href={contactUrl} target="_blank" rel="noopener noreferrer">
            {contactHandle} on X
          </a>
          .
        </p>
      </Ledger>
    </Layout>
  )
}

export default HomePage
