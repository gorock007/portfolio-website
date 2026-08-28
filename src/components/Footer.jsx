const Footer = () => {
  return (
    <footer className="revamp-footer">
      <div className="revamp-container compact-container revamp-footer-line">
        <p>© {new Date().getFullYear()} Gorock Shetty · Sydney</p>
        <nav aria-label="Footer navigation">
          <a href="https://github.com/gorock007/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/gorakhshetty/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
