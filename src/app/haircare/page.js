// haircare page sections

import React from 'react'
import { NavbarSection } from '../sections/NavbarSection'
import { InfoComponent } from '../components/InfoComponent'
import { FooterAlt } from '../components/FooterAlt'

export default function HaircarePage() {
  return (
    <section className='bg-customBlack'>
        <NavbarSection/>
        <InfoComponent
        sectionTitle='SWAV HAIRCARE'
        title='Swav Haircare' 
        info="With a wealth of experience, Swav Hair combines modern barbering with traditional values. We offer expert advice on maintaining and growing healthy, vibrant hair, ensuring you leave looking and feeling your best. Experience the perfect blend of contemporary style and timeless expertise at Swav Hair. Each visit is an opportunity to enhance your haircare routine with personalized guidance from our seasoned and skilled professionals. Kindly click Find Out More, or feel free to email us for further details."
        />
        <FooterAlt/>
    </section>
  )
}
