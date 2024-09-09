// academy page sections

import React from 'react'
import { NavbarSection } from '../sections/NavbarSection'
import { FooterAlt } from '../components/FooterAlt'
import { InfoComponent } from '../components/InfoComponent'

export default function AcademyPage() {
  return (
    <section className='bg-customBlack'>
        <NavbarSection/>
        <InfoComponent
        sectionTitle='SWAV HAIR ACADEMY'
        title='Swav Hair Academy' 
        info="Elevate your grooming expertise with SWAV Hair Studio's Academy. Our forthcoming courses and workshops are meticulously crafted to transform passion into mastery, whether you're just beginning your journey or refining your professional skills. Stay ahead of the curve by being among the first to learn about our launch. Kindly click Find Out More, or feel free to email us for further details."
        />
        <FooterAlt/>
    </section>
  )
}
