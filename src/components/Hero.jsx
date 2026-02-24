import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import summaizeImg from '../images/summaize.png';

const roles = ['API/Tech Support', 'AI/Tech Content Creator', 'AI Generalist', 'Vibe Coder'];

const TypedText = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="font-mono text-cyan">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[2px] h-[1em] bg-cyan ml-0.5 align-middle"
      />
    </span>
  );
};

const Hero = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: false,
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'grab' } },
      modes: { grab: { distance: 140, links: { opacity: 0.15, color: '#0891b2' } } },
    },
    particles: {
      color: { value: ['#0891b2', '#7c3aed'] },
      links: { color: '#0891b2', distance: 150, enable: true, opacity: 0.04, width: 1 },
      move: { enable: true, speed: 0.4, outModes: { default: 'out' } },
      number: { density: { enable: true, area: 1400 }, value: 40 },
      opacity: { value: { min: 0.05, max: 0.2 } },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  const spring = { type: 'spring', stiffness: 80, damping: 20 };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Particles */}
      {engineReady && (
        <Particles id="hero-particles" className="absolute inset-0 z-0" options={particlesOptions} />
      )}

      {/* Soft ambient shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan/[0.05] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-purple/[0.04] rounded-full blur-[200px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center py-32 lg:py-0">

          {/* LEFT — Text */}
          <div className="order-2 lg:order-1 max-w-xl">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface/60 mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
              </span>
              <span className="font-mono text-[11px] text-muted tracking-wide">Available for work</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
              className="font-heading font-800 tracking-[-0.04em] leading-[0.92] mb-7"
            >
              <span className="text-[clamp(2.8rem,7vw,5.5rem)] text-ink block">GOROCK</span>
              <span className="text-[clamp(2.8rem,7vw,5.5rem)] gradient-text block">SHETTY<span className="text-cyan">.</span></span>
            </motion.h1>

            {/* Typed subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.35 }}
              className="text-base md:text-lg mb-5 h-7"
            >
              <TypedText />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.45 }}
              className="text-muted text-[15px] leading-relaxed mb-10 max-w-md"
            >
              AI/Tech support by day. AI builder by night. I prototype vibe-coded apps, explore agents/workflows, and share what I learn in public.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-7 py-3 rounded-full font-semibold text-white text-sm overflow-hidden cursor-pointer shadow-lg shadow-cyan/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan to-purple transition-all duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT — Floating card stack */}
          <div className="order-1 lg:order-2 relative h-[340px] sm:h-[400px] lg:h-[520px]">
            {/* Card 1 — Project preview (back, tilted) */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ ...spring, delay: 0.3 }}
              className="absolute top-[8%] right-[2%] sm:right-[5%] w-[210px] sm:w-[250px] bg-surface rounded-2xl border border-border shadow-xl shadow-ink/[0.06] overflow-hidden hover:rotate-2 transition-transform duration-500"
            >
              <img src={summaizeImg} alt="SummAIze" className="w-full h-32 sm:h-36 object-cover" />
              <div className="p-3.5">
                <p className="text-xs font-heading font-700 text-ink">SummAIze</p>
                <p className="text-[10px] text-muted mt-0.5">AI Article Summarizer</p>
                <div className="flex gap-1.5 mt-2">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-accent-bg text-cyan">React</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-purple-bg text-purple">Redux</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-green-bg text-green">OpenAI</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 — Claude Code terminal card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ ...spring, delay: 0.45 }}
              className="absolute top-[30%] left-[0%] sm:left-[3%] w-[230px] sm:w-[270px] rounded-2xl overflow-hidden shadow-xl shadow-ink/[0.1] hover:rotate-0 transition-transform duration-500 border border-white/[0.06]"
              style={{ background: '#1a1a2e' }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-white/[0.06]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f38ba8]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f9e2af]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#a6e3a1]/80" />
                <span className="ml-2 text-[9px] font-mono text-[#6c7086]">claude-code</span>
              </div>
              {/* Terminal body */}
              <div className="p-3.5 font-mono text-[10px] leading-[1.8]">
                <p><span className="text-[#a6e3a1]">$</span> <span className="text-[#cdd6f4]">claude</span> <span className="text-[#f9e2af]">"build a podcast app"</span></p>
                <p className="text-[#6c7086] mt-1">⠋ Analyzing project structure...</p>
                <p className="text-[#89b4fa] mt-1">✓ Created 4 files</p>
                <p className="text-[#89b4fa]">✓ Installed dependencies</p>
                <p className="text-[#a6e3a1] mt-1">🚀 App running on :3000</p>
              </div>
              {/* Tags */}
              <div className="flex gap-1.5 px-3.5 pb-3">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#cba6f7]/15 text-[#cba6f7]">Claude</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#89b4fa]/15 text-[#89b4fa]">Cursor</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#a6e3a1]/15 text-[#a6e3a1]">Prompting</span>
              </div>
            </motion.div>

            {/* Card 3 — TikTok Content card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ ...spring, delay: 0.6 }}
              className="absolute bottom-[5%] right-[8%] sm:right-[15%] w-[190px] sm:w-[230px] rounded-2xl overflow-hidden shadow-xl shadow-ink/[0.1] hover:rotate-0 transition-transform duration-500 border border-white/[0.06]"
              style={{ background: '#000' }}
            >
              {/* TikTok header bar */}
              <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/[0.08]">
                {/* TikTok logo */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17a8.16 8.16 0 003.76.92V6.69z" fill="#fff"/>
                </svg>
                <span className="text-[10px] font-semibold text-white">TikTok</span>
              </div>
              {/* Profile section */}
              <a href="https://www.tiktok.com/@gorockbits" target="_blank" rel="noopener noreferrer" className="block p-3.5">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25F4EE] to-[#FE2C55] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white">@gorockbits</p>
                    <p className="text-[9px] text-[#8a8b91]">AI Content Creator</p>
                  </div>
                </div>
                <p className="text-[10px] text-[#8a8b91] leading-relaxed mb-3">Sharing AI tools and learnings</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-[#FE2C55]/15 text-[#FE2C55]">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    600K+ views
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.75 }}
              className="absolute top-[3%] left-[8%] sm:left-[15%] px-4 py-3 rounded-2xl bg-surface border border-border shadow-lg"
            >
              <p className="text-[10px] font-mono text-muted">projects</p>
              <p className="text-2xl font-heading font-800 gradient-text">6+</p>
            </motion.div>

            {/* Floating React icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-[20%] left-[3%] w-11 h-11 rounded-xl bg-surface border border-border shadow-md flex items-center justify-center text-lg"
            >
              <span className="text-cyan">🤖</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-muted/60 tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-cyan/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
