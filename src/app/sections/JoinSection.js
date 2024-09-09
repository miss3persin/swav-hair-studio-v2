'use client'

// join swav section on about page

import React from 'react'
import top_curve from '/public/curve-guide-top.png'
import Image from 'next/image'
import { SectionTitle } from '../components/SectionTitle'
import join_swav from '/public/join_swav.jpg'
import { TransparentBtn } from '../components/TransparentBtn'

export const JoinSection = () => {
  return (
    <div className='relative pb-16'>
    <div className='w-full absolute -top-[3.25rem] select-none'>
      <Image
        src={top_curve}
        layout='intrinsic'
        objectFit='contain'
        quality={100}
        className='absolute'
      />
    </div>


    <div className='container px-14'>

    <div className='-mt-5 pb-8'>
        <SectionTitle text='JOIN SWAV HAIR' color='#222222B3' />
      </div>

      <div className='flex lg:flex-row flex-col border'>

        <div className='flex lg:w-10/12 py-6 lg:py-0 w-full flex-col justify-center text-customBlack relative'>
          <div className='flex flex-col mb-7 gap-5 px-10 lg:px-8'>
            <p className='text-xl sm:text-3xl xl:text-4xl font-medium'>Join Us At Swav Hair Studio</p>
            <p className='text-xs sm:text-base lg:text-xs xl:text-sm'>Do you have a strong interest in grooming and a desire to change things? Talented people are always welcome to become a part of the SWAV Hair Studio family. Regardless of your level of experience, we provide a vibrant and encouraging environment to assist your success.</p>
          </div>


          <div className='flex flex-col items-start pl-10 sm:px-10 lg:px-8'>
            <TransparentBtn
              text='FIND OUT MORE'
              link='mailto:info@swavhair.co.uk'
              target='_blank'
            />
          </div>
        </div>

        <div className='flex h-[30rem] sm:h-96 md:h-80 lg:h-[28rem] w-full overflow-hidden'>
          <Image
            src={join_swav}
            alt='SWAV HAIR STUDIO'
            layout='intrinsic'
            quality={100}
            className='h-full w-full object-cover'
          />
        </div>

      </div>
    </div>

    </div>
  )
}
