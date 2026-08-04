import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

const NotFound = () => {
  return (
    <div className="site-shell min-h-screen">
      <PageTitle title="Page not found — Gorock Shetty" />
      <Navbar />

      <main id="main" tabIndex="-1" className="page-container not-found-page">
        <p className="section-label">404</p>
        <h1>Wrong turn.</h1>
        <p>The page you’re looking for doesn’t exist, but the useful stuff is one click away.</p>
        <Link to="/" className="button button-primary">
          Back home <span aria-hidden="true">→</span>
        </Link>
      </main>
    </div>
  )
}

export default NotFound
