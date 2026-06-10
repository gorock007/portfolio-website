import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import './App.css'
import { Home } from './views/Home'
import Blog from './views/Blog'
import BlogPost from './views/BlogPost'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router className="App">
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/writings' element={<Blog/>} />
          <Route path='/writings/:id' element={<BlogPost/>} />
        </Routes>
      </Router>
    </MotionConfig>
  )
}

export default App
