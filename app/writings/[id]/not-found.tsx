import Link from 'next/link'
import Layout from '@/components/Layout'
import Tile from '@/components/Tile'
import TileGrid from '@/components/TileGrid'

export const metadata = { title: 'Note not found' }

const NoteNotFound = () => (
  <Layout>
    <TileGrid>
      <Tile size="wide">
        <div className="not-found">
          <p className="stat-label">404</p>
          <h1 className="page-h1">Note not found.</h1>
          <p className="page-h2">This note doesn’t exist yet, or it may have moved.</p>
          <Link className="pill-button" href="/writings">
            All writing <span className="link-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </Tile>
    </TileGrid>
  </Layout>
)

export default NoteNotFound
