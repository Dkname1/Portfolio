import React from 'react'
import Banner from '../component/Banner'
import About from './About'
import Services from '../component/Services'
import Skills from './Skills'
import Contact from './Contact'

function Home() {
  return (
<>
  <Banner/>
  <About/>
  <Services/>
  <Skills/>
  <Contact/>
</>
  )
}

export default Home