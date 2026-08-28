import { MotionConfig } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import About from './views/About'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Work from './views/Work'
import Writing from './views/Writing'
import WritingPost from './views/WritingPost'

const App = () => (
  <MotionConfig reducedMotion="user">
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/writings" element={<Writing />} />
        <Route path="/writings/:id" element={<WritingPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </MotionConfig>
)

export default App
