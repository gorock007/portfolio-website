import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Home } from './views/Home'
import About from './views/About'
import Blog from './views/Blog'
import BlogPost from './views/BlogPost'
import NotFound from './views/NotFound'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/writings' element={<Blog/>} />
          <Route path='/writings/:id' element={<BlogPost/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </MotionConfig>
  )
}

export default App
