'use client'

// story section on about page

import React from 'react'
import { SectionTitle } from '../components/SectionTitle'
import story from '/public/story_img.jpg'
import Image from 'next/image'

export const StorySection = () => {
  return (
    <div className='bg-customBlack pb-28 pt-32 md:pt-40'>
      <div className='container px-14'>
        <div className='pb-7'>
          <SectionTitle text='ABOUT SWAV HAIR' color='#FFFFFFB3' />
        </div>

        <div className='flex items-center gap-10 rounded-3xl bg-customWhite px-14 py-8 text-customBlack'>
          <div className='my-auto w-full'>
            <div className='mb-5 flex flex-col gap-5'>
              <p className='text-5xl'>Our Story</p>

              <p className='text-base font-light'>
                At Swav Hair, we blend modern barbering with over two decades of
                traditional experience, all centered on customer satisfaction.
                Our skilled professionals bring passion, creativity, and
                expertise to every service, elevating the art of grooming.
                Dedicated to excellence, we offer bespoke haircuts, styling, and
                grooming in a setting designed for your comfort. Swav Hair is
                more than a barbershop—it's a community of professionals
                inspiring clients and barbers alike with innovative techniques
                and unwavering commitment to excellent service. Experience the
                exceptional at Swav Hair, where tradition meets modern
                sophistication.
              </p>
            </div>
          </div>

          <div className='flex h-[30rem] w-full items-center justify-center overflow-hidden rounded-3xl border border-[#ffffff26]'>
            <Image
              src={story}
              alt='SWAV HAIR STUDIO'
              className='h-full w-full object-cover'
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
