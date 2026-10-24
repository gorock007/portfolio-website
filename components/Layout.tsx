import type { ReactNode } from 'react'

/**
 * The page's main region. The header and footer around it live in the root
 * layout, so they persist across route changes instead of remounting per view.
 * `.page` replays its entrance on every navigation, because each route mounts
 * a fresh one.
 */
const Layout = ({ children, narrow = false }: { children: ReactNode; narrow?: boolean }) => (
  <main id="main" tabIndex={-1} className="page">
    <div className={narrow ? 'container container--narrow' : 'container'}>{children}</div>
  </main>
)

export default Layout
