import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const GITHUB_URL = 'https://github.com/gorock007/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/gorakhshetty/'

const Navbar = () => {
  const { pathname } = useLocation()
  const aboutIsActive = pathname === '/about'
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

      <nav className="revamp-container revamp-nav" aria-label="Primary navigation">
        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Gorock Shetty — home"
          className="revamp-wordmark"
        >
          Gorock<span aria-hidden="true">.</span>
        </Link>

        <div className="revamp-nav-links">
          <Link to="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
          <Link to="/about" aria-current={aboutIsActive ? 'page' : undefined}>About</Link>
          <Link to="/writings" aria-current={writingIsActive ? 'page' : undefined}>Writing</Link>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
