import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Tile from '../components/Tile'
import TileGrid from '../components/TileGrid'

const NotFound = () => (
  <Layout>
    <PageTitle title="Not found — Gorock Shetty" />

    <TileGrid>
      <Tile size="wide">
        <div className="not-found">
          <p className="stat-label">404</p>
          <h1 className="page-h1">This page doesn’t exist.</h1>
          <p className="page-h2">It may have moved, or it was never here to begin with.</p>
          <Link className="pill-button" to="/">
            Back home <span className="link-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </Tile>
    </TileGrid>
  </Layout>
)

export default NotFound
