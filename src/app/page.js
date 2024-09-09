import React from 'react'

import { HomeLocationSection } from './sections/HomeLocationSection'
import { NavbarSection } from './sections/NavbarSection'
import { HeroSection } from './sections/HeroSection'
import { TiktokSection } from './sections/TiktokSection'
import { FounderSection } from './sections/FounderSection'
import { Footer } from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const page = () => {
  return (
    <section className='bg-customWhite'>
      <ScrollToTop/>
    <NavbarSection/>
    <HeroSection/>
      <HomeLocationSection/>
      <TiktokSection/>
      <FounderSection/>
      <Footer/>

  </section>
  )
}

export default page