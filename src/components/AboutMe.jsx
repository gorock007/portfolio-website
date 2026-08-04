import { motion } from 'framer-motion'

const tools = ['Claude Code', 'Codex', 'Agent workflows', 'AI products', 'Payments']

const AboutMe = () => {
  return (
    <section className="personal-section" aria-labelledby="personal-title">
      <div className="page-container personal-grid">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          How I think
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <h2 id="personal-title" className="personal-statement">
            Curious by default. I turn the annoying little problems everyone works around into
            things people can use.
          </h2>
          <ul className="tool-line" aria-label="Tools and capabilities">
            {tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
