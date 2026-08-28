import { Link } from 'react-router-dom'
import AnimatedAvatar from './AnimatedAvatar'

const Hero = () => {
  return (
    <section className="revamp-hero" aria-labelledby="hero-title">
      <div className="revamp-container revamp-hero-grid">
        <div className="revamp-hero-copy">
          <h1 id="hero-title">
            <span aria-hidden="true">--</span>dangeriously skipping permission, trying to stay releveant for the post-agi world.
          </h1>
          <p>learning extensively about AI, optimistic and genuinely excieted about the future.</p>
          <div className="hero-blog-prompt">
            <p>Read about the AI skills that wont become obselete</p>
            <Link className="ink-link hero-blog-link" to="/writings/ai-skills-that-compound">
              Read it <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <AnimatedAvatar />
      </div>
    </section>
  )
}

export default Hero
