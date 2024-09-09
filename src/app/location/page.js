// location page sections

import React from 'react'
import { NavbarSection } from '../sections/NavbarSection'
import { VariousLocationsSection } from '../sections/VariousLocationsSection'
import { Footer } from '../components/Footer'

export default function LocationPage() {
  return (
    <section className='bg-customWhite'>
        <NavbarSection/>
        <VariousLocationsSection/>
        <Footer/>
    </section>
  )
}
