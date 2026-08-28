import { Link } from 'react-router-dom'
import AnimatedAvatar from './AnimatedAvatar'

const Hero = () => {
  return (
    <section className="revamp-hero" aria-labelledby="hero-title">
      <div className="revamp-container compact-container">
        <div className="profile-lockup">
          <AnimatedAvatar />
          <div>
            <p className="profile-name">Gorock Shetty</p>
            <p className="profile-note">AI-native builder · Sydney</p>
          </div>
        </div>

        <div className="revamp-hero-copy">
          <h1 id="hero-title">
            <span aria-hidden="true">--</span>dangeriously skipping permission, trying to stay releveant for the post-agi world.
          </h1>
          <p>learning extensively about AI, optimistic and genuinely excieted about the future.</p>
          <Link className="hero-writing-link" to="/writings/ai-skills-that-compound" aria-label="Read about the AI skills that wont become obselete">
            <span className="hero-writing-link-long">Read about the AI skills that wont become obselete</span>
            <span className="hero-writing-link-short" aria-hidden="true">Read the post</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
