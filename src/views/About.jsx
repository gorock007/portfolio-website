import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

const About = () => {
  return (
    <div className="site-shell revamp-shell">
      <PageTitle title="About — Gorock Shetty" />
      <Navbar />

      <main id="main" tabIndex="-1" className="about-page">
        <h1 className="visually-hidden">About Gorock Shetty</h1>

        <div className="about-copy">
          <p>I’m someone who’s constantly evolving — not in a straight line, but through questioning, rebuilding, and trying again. My mind rarely sits still. I’m always exploring something: an idea, a project, a theory, a fear, a possibility.</p>

          <p>I’m curious in a way that feels almost restless. When something interests me, I dive deep until I understand it from every angle. And when life gets confusing, I don’t run from it — I try to turn that confusion into clarity.</p>

          <p>I feel things intensely. I think about meaning, identity, purpose, time, existence — not because I want to sound deep, but because that’s genuinely how my mind works. I’m trying to understand life beyond the surface, beyond “what I do” or “where I’m from.”</p>

          <p>I’m someone who tries to improve — sometimes quietly, sometimes obsessively. I fail, I pause, I fall off track, but I always come back. There’s a stubbornness in me that refuses to stay down for long.</p>

          <p>And at the core of everything…<br />I’m someone who wants to build something — whether it’s a piece of software, a better version of myself, or a philosophy that makes sense of my existence.</p>

          <p>I’d describe myself as a work in progress — aware, curious, imperfect, and becoming.”</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About
