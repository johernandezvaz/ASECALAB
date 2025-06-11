import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Values from '../components/Values'
import Services from '../components/Services'
import Announcements from '../components/Announcements'
import About from '../components/About'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Values />
      <Services />
      <Announcements />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}