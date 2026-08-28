import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const GITHUB_URL = 'https://github.com/gorock007/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/gorakhshetty/'

const Navbar = () => {
  const { pathname } = useLocation()
  const indexRef = useRef(null)
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

  const closeIndex = () => {
    if (indexRef.current) indexRef.current.open = false
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

        <details className="site-index" ref={indexRef}>
          <summary>Index <span aria-hidden="true">+</span></summary>
          <nav className="site-index-panel" aria-label="Site index">
            <Link to="/" onClick={closeIndex} aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
            <Link to="/about" onClick={closeIndex} aria-current={aboutIsActive ? 'page' : undefined}>About</Link>
            <Link to="/writings" onClick={closeIndex} aria-current={writingIsActive ? 'page' : undefined}>Writing</Link>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </nav>
        </details>
      </nav>
    </header>
  )
}

export default Navbar
