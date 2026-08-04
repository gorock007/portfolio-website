import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Projects from '../components/Projects'
import WritingPreview from '../components/WritingPreview'

export const Home = () => {
  return (
    <div className="site-shell min-h-screen">
      <PageTitle title="Gorock Shetty — AI-native product builder" />
      <Navbar />

      <main id="main" tabIndex="-1">
        <Hero />
        <Projects />
        <AboutMe />
        <WritingPreview />
      </main>

      <Footer />
    </div>
  )
}
