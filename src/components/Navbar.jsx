import { Link, useLocation } from 'react-router-dom'

const GITHUB_URL = 'https://github.com/gorock007/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/gorakhshetty/'

const Navbar = () => {
  const { pathname } = useLocation()
  const writingIsActive = pathname.startsWith('/writings')

  const handleLogoClick = (event) => {
    if (pathname !== '/') return
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSkipClick = (event) => {
    event.preventDefault()
    const main = document.getElementById('main')
    if (!main) return
    main.focus()
    main.scrollIntoView({ block: 'start' })
  }

  return (
    <header className="site-header">
      <a href="#main" onClick={handleSkipClick} className="skip-link">
        Skip to main content
      </a>

      <nav className="page-container nav-inner" aria-label="Primary navigation">
        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Gorock Shetty — home"
          className="wordmark"
        >
          Gorock<span aria-hidden="true">.</span>
        </Link>

        <div className="nav-links">
          <Link
            to="/writings"
            aria-current={writingIsActive ? 'page' : undefined}
            className={writingIsActive ? 'nav-link nav-link-active' : 'nav-link'}
          >
            Writing
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link nav-link-external"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link nav-link-external"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
