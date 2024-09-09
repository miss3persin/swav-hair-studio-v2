// about page sections

import React from 'react'
import { NavbarSection } from '../sections/NavbarSection';
import { StorySection } from '../sections/StorySection';
import { JoinSection } from '../sections/JoinSection';
import { CommunityServiceSection } from '../sections/CommunityServiceSection';
import { Footer } from '../components/Footer';


export default function AboutPage() {
    return (
      <section className='bg-customWhite'>
        <NavbarSection/>
        <StorySection/>
        <JoinSection/>
        <CommunityServiceSection/>
        <Footer textColor = 'customWhite' bgColor = 'customBlack'  img_1 = '/instagram_white.png' img_2 = '/tiktok_white.png'/>
      </section>
    );
  }
  