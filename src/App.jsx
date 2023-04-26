import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { Home } from './views/Home'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={<Home/>} exact/>
      </Routes>
    </Router>
   
  )
}

export default App
