import { motion } from 'framer-motion'

const LINKEDIN_URL = 'https://www.linkedin.com/in/gorakhshetty/'
const ease = [0.22, 1, 0.36, 1]

const reveal = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease },
})

const Hero = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="page-container hero-inner">
        <motion.div {...reveal(0.04)} className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          AI-native builder · Sydney
        </motion.div>

        <motion.h1 {...reveal(0.12)} id="hero-title" className="hero-title">
          I build AI products for problems I <em>want solved.</em>
        </motion.h1>

        <motion.div {...reveal(0.22)} className="hero-bottom">
          <p className="hero-intro">
            Endlessly curious, and usually building with Claude Code, Codex, and agent workflows.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              See what I’ve built <span aria-hidden="true">↓</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Find me on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>

        <motion.div {...reveal(0.34)} className="hero-rule" aria-hidden="true">
          <span>Built, shipped, used.</span>
          <span>2 live products</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
