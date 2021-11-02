import Header from '../components/Header'
import TopSection from '../components/TopSection'
import Services from '../components/services/Services'
import About from '../components/About'
import RequestDemo from '../components/RequestDemo'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Header />
      <TopSection />
      <div className="container mx-auto px-20">

        <Services />


      </div>
      <About />
      <RequestDemo />
      <Contact />
    </div>
  )
}
