import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-base min-h-screen relative">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <main className="relative z-10">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
      </main>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center text-ink-light hover:text-ink hover:border-ink/30 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-xs" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
