'use client'

// founder section on home page

import React from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { TransparentOutlineBtn } from '../components/TransparentOutlineBtn'
import founder from '/public/founder_edited.jpg'
import Image from 'next/image'

export const FounderSection = () => {
  return (
    <div className='container px-14 pb-40'>
      <div className='mt-5 sm:-mt-5'>
        <SectionTitle text='THE FOUNDER' color='#222222B3' />
      </div>

      <div className='container flex lg:flex-row flex-col-reverse items-center gap-5 sm:gap-10 mt-8 rounded-3xl bg-customBlack px-5 py-8 sm:px-14 sm:py-8 text-customWhite'>
        <div className='my-auto w-full flex flex-col sm:block'>
          <div className='mb-5 flex flex-col gap-3'>
            <p className='text-lg text-center sm:text-left sm:text-4xl'>
              Mr. KaySwav - Founder of Swav Hair Studio
            </p>

            <p className='text-xs sm:text-sm font-light md:text-left text-justify '>
              Mr. KaySwav, the founder and creative force behind Swav Hair
              Studio, is a seasoned grooming expert with over two decades of
              experience. His passion for the craft, paired with an innovative
              spirit, has set him apart as a visionary in the barbering
              industry. Known for his bespoke haircuts and meticulous attention
              to detail, Mr. KaySwav elevates grooming to an art form, creating
              personalized experiences for each client. More than just a barber,
              Mr. KaySwav is a mentor and leader, committed to cultivating a
              community of skilled professionals who share his dedication to
              excellence. His studio stands as a haven of style and
              sophistication, where traditional barbering meets modern
              innovation, all within an atmosphere designed for comfort and
              care. Mr. KaySwav's relentless pursuit of perfection continues to
              inspire both his clients and the next generation of barbers.
            </p>
          </div>

          <TransparentOutlineBtn text='ABOUT US' link='/about' />
        </div>

        <div className='w-full h-full sm:h-[30rem] border-[#ffffff26] border flex items-center justify-center rounded-3xl overflow-hidden'>
          <Image
            src={founder}
            alt='Mr. KaySwav'
            className='h-full w-full object-cover'
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
