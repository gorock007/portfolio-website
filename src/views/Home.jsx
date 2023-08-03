import React, { useState } from 'react'
import About from '../components/About'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'
import BlogSnippets from '../components/BlogSnippets'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero />
        <AboutMe/>
        <Projects />
        {/* <BlogSnippets /> */}
        <Skills />
        <Footer />
    </div>
  )
}
