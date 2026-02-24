import React, { useState, useEffect, useCallback } from 'react'
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [handleMouseMove]);

  return (
    <div className="bg-base min-h-screen relative noise-overlay">
      {/* Cursor spotlight — warm subtle glow */}
      <div
        className="fixed inset-0 z-40 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(8, 145, 178, 0.03), transparent 50%)`,
        }}
      />

      {/* Ambient soft blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] bg-cyan/[0.04] rounded-full blur-[180px]" />
        <div className="absolute top-[50%] -left-[10%] w-[400px] h-[400px] bg-purple/[0.03] rounded-full blur-[180px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] bg-green/[0.03] rounded-full blur-[150px]" />
      </div>

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
            className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-surface border border-border shadow-lg shadow-ink/5 flex items-center justify-center text-ink-light hover:text-cyan hover:border-cyan/30 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-xs" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
