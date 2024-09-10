'use client'

// academy page and haircare page main section component

import React from 'react'
import { SectionTitle } from './SectionTitle'
import { WhiteBtn } from './WhiteBtn'
import Image from 'next/image'
import clipper from '/public/Clipper_edited.png'

export const InfoComponent = ({ sectionTitle, title, info }) => {
  return (
    <div className='bg-customBlack pt-32 md:pt-40 pb-16 h-full'>
      <div className='container px-14'>
        <SectionTitle text={sectionTitle} color='#FFFFFFB3' />

        <div className='flex lg:flex-row flex-col'>
          <div className='text-customWhite my-auto lg:w-9/12 flex lg:block flex-col'>
            <div className='flex flex-col gap-10 mb-[25rem] lg:mb-10'>
              <p className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light'>{title}</p>
              <p className='leading-relaxed md:text-lg'>{info}</p>
            </div>

            <WhiteBtn text='FIND OUT MORE' link='mailto:info@swavhair.co.uk' />
          </div>

          <div className='lg:w-4/12 lg:h-full flex justify-center lg:justify-end items-start lg:items-center relative'>
            <Image
              src={clipper}
              alt='Clipper Image'
              layout='intrinsic'
              objectFit='contain'
              quality={100}
              className='w-52 h-52 sm:w-64 sm:h-64 lg:w-full lg:h-full bottom-36 sm:bottom-20 absolute lg:static'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
