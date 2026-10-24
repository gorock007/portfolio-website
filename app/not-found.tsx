import Link from 'next/link'
import Layout from '@/components/Layout'
import SunStamp from '@/components/SunStamp'
import { sydneyDate } from '@/lib/sun'

export const metadata = { title: 'Not found' }

const NotFound = () => (
  <Layout>
    <section className="lost page-head">
      <p className="lost-mark">
        <SunStamp date={sydneyDate()} />
        <span className="meta">404</span>
      </p>
      <h1 className="page-title">Nothing rises here.</h1>
      <p className="lead lead--quiet">
        This page is below the horizon. It may have moved, or it was never here to begin with.
      </p>
      <Link className="entry-link" href="/">
        Back to the loop <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </section>
  </Layout>
)

export default NotFound
