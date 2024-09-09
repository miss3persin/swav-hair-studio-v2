// contact page sections

import React from 'react'
import { NavbarSection } from '../sections/NavbarSection'
import { Footer } from '../components/Footer'
import { ContactSection } from '../sections/ContactSection'

export default function ContactPage() {
    
  return (
    <section className='bg-customWhite'>
        <NavbarSection/>
        <ContactSection/>
        <Footer/>
    </section>
  )
}
