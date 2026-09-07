import type { ReactNode } from 'react'

/**
 * The page's main region. The nav and footer around it live in the root
 * layout, so they persist across route changes instead of remounting per view.
 */
const Layout = ({ children }: { children: ReactNode }) => (
  <main id="main" tabIndex={-1} className="grid-section">
    <div className="container">{children}</div>
  </main>
)

export default Layout
