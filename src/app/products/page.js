// products page sections

import React from 'react'
import { NavbarSection } from '../sections/NavbarSection'
import { FooterAlt } from '../components/FooterAlt'
import { ProductsSection } from '../sections/ProductsSection'

export default function ProductsPage() {
  return (
    <section className='bg-customBlack'>
        <NavbarSection/>
        <ProductsSection/>
        <FooterAlt/>
    </section>
  )
}
