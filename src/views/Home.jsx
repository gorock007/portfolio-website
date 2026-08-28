import Footer from '../components/Footer'
import GitHubActivity from '../components/GitHubActivity'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Projects from '../components/Projects'

export const Home = () => {
  return (
    <div className="site-shell min-h-screen">
      <PageTitle title="Gorock Shetty — building, learning, becoming" />
      <Navbar />

      <main id="main" tabIndex="-1">
        <Hero />
        <Projects />
        <GitHubActivity />
      </main>

      <Footer />
    </div>
  )
}
