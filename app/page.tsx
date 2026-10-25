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

// The loop ends on today and counts today's work, so the page is rebuilt
// every 15 minutes to keep up with it.
export const revalidate = 900

const HomePage = async () => {
  const year = await getYear()
  const [statement, ...creed] = manifestoLines
  const first = year.days[0]

  return (
    <Layout>
      <section className="hero" aria-labelledby="hero-title">
        {/* The name is in the header already; it stays in the h1 for the
            document outline and search, but isn't shown twice. */}
        <h1 id="hero-title" className="display hero-title">
          <span className="visually-hidden">Gorock Shetty: </span>
          {statement}
        </h1>

        <figure className="hero-figure">
          <p className="figure-head meta">
            Noon sun over Sydney · {formatDay(first.date)} – today · one dot per day
          </p>
          <Analemma days={year.days} />
          <figcaption className="caption">
            Photograph the sun from one spot at the same hour every day and it draws a
            figure-eight across the sky. This is that loop over Sydney at noon for the last year,
            and each dot is one of my days: the darker, the more code I shipped —{' '}
            {year.total.toLocaleString('en-AU')} contributions on {year.activeDays} days. Ringed
            days are where a project began or an essay went out. East–west is stretched threefold
            so the lobes read.
          </figcaption>
        </figure>

        <div className="hero-creed">
          <ul className="creed" role="list">
            {creed.map((line) => (
              <li key={line}>
                {/* The asterisk points at the footnote below; to a screen
                    reader it would only be read out as "star". */}
                {line.split('*').map((part, index) =>
                  index === 0 ? part : [<span key={index} aria-hidden="true">*</span>, part],
                )}
              </li>
            ))}
          </ul>

          <p className="creed-foot">
            <span aria-hidden="true">* </span>
            <Link href={manifestoFootnote.href}>{manifestoFootnote.text}</Link>
          </p>
        </div>
      </section>

      <Ledger id="work-label" label="Work" more={{ href: '/work', label: 'Everything, back to 2018' }}>
        <WorkIndex projects={productProjects} />
      </Ledger>

      <Ledger id="tools-label" label="Open source">
        <WorkIndex projects={toolProjects} />
      </Ledger>

      <Ledger id="writing-label" label="Writing">
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
            {contactHandle} on X<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </Ledger>
    </Layout>
  )
}

export default HomePage
