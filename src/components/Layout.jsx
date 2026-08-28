import Nav from './Nav'

const Layout = ({ children }) => (
  <>
    <Nav />
    <main id="main" tabIndex="-1" className="grid-section">
      <div className="container">{children}</div>
    </main>
  </>
)

export default Layout
