import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { Home } from './views/Home'
import Blog from './views/Blog'
import BlogPost from './views/BlogPost'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:id' element={<BlogPost/>} />
      </Routes>
    </Router>

  )
}

export default App
