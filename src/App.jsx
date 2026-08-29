import { MotionConfig } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import About from './views/About'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Work from './views/Work'
import Writing from './views/Writing'
import WritingPost from './views/WritingPost'

// Nav and Footer sit outside <Routes> so they survive navigation. Rendered
// per-view they were torn down and rebuilt on every route change, which left
// the nav pill with nothing to animate from — it mounted already in place.
const App = () => (
  <MotionConfig reducedMotion="user">
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/writings" element={<Writing />} />
        <Route path="/writings/:id" element={<WritingPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </MotionConfig>
)

export default App
