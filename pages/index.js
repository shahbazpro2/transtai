import Header from '../components/Header'
import TopSection from '../components/TopSection'
import Services from '../components/services/Services'
import About from '../components/About'
import RequestDemo from '../components/RequestDemo'
import Contact from '../components/Contact'
import { useRef } from 'react'

export default function Home() {
  const homeRef = useRef()
  const serviceRef = useRef()
  const contactRef = useRef()
  const demoRef = useRef()

  const handleScroll = (ref) => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop - 150
    })
  }

  return (
    <>
      <Header handleScroll={handleScroll} homeRef={homeRef} serviceRef={serviceRef} contactRef={contactRef} demoRef={demoRef} />
      <TopSection homeRef={homeRef} />
      <div className="container mx-auto px-20">

        <Services serviceRef={serviceRef} />


      </div>
      {/* <About /> */}
      <RequestDemo demoRef={demoRef} />
      <Contact contactRef={contactRef} />
    </>
  )
}
