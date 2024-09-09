'use client'

// hero section on home page

import React from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { WhiteBtn } from '../components/WhiteBtn'
import { HeroImg } from '../components/HeroImg'
import { RingFeatures } from '../components/RingFeatures'

export const HeroSection = () => {
  return (
    <div className='bg-customBlack pb-40 pt-40'>
      <div className='container px-14'>
        <SectionTitle text='SWAV HAIR STUDIOS' color='#FFFFFFB3' />

        <div className='flex justify-between gap-14'>
          <div className='my-auto w-full text-customWhite'>
            <div className='mb-5 flex flex-col gap-3'>
              <p className='text-6xl leading-tight'>
                Expert Grooming with Over 20 Years of Timeless Tradition
              </p>
              <p className='text-lg font-light'>
                With over 2 decades of experience we pride ourselves in
                providing expert barbering services and exceptional customer
                service. A modern barbershop with all the traditional values,
                offering a complete men's grooming experience.
              </p>
            </div>
            <WhiteBtn
              text='BOOK NOW'
              link='https://www.barberly.com/'
              target='_blank'
            />
          </div>

          <div className='relative'>
            <div className=''>
              <div className='absolute left-20 top-16'>
                <RingFeatures text='Haircut & Styling' />
              </div>

              <div className='absolute right-5 top-1/3'>
                <RingFeatures text='Haircare' />
              </div>

              <div className='absolute bottom-28 left-8'>
                <RingFeatures text='Products' />
              </div>
            </div>
            <HeroImg />
          </div>
        </div>
      </div>
    </div>
  )
}
