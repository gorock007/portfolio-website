/**
 * The page's main region. The nav and footer around it live in App, so they
 * persist across route changes instead of remounting per view.
 */
const Layout = ({ children }) => (
  <main id="main" tabIndex="-1" className="grid-section">
    <div className="container">{children}</div>
  </main>
)

export default Layout
