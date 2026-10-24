import Link from 'next/link'
import Layout from '@/components/Layout'
import SunStamp from '@/components/SunStamp'
import { sydneyDate } from '@/lib/sun'

export const metadata = { title: 'Note not found' }

const NoteNotFound = () => (
  <Layout>
    <section className="lost page-head">
      <p className="lost-mark">
        <SunStamp date={sydneyDate()} />
        <span className="meta">404</span>
      </p>
      <h1 className="page-title">Note not found.</h1>
      <p className="lead lead--quiet">This note hasn’t been written yet, or it has moved.</p>
      <Link className="entry-link" href="/writings">
        All writing <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </section>
  </Layout>
)

export default NoteNotFound
