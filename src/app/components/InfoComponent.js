'use client'

// academy page and haircare page main section component

import React from 'react'
import { SectionTitle } from './SectionTitle'
import { WhiteBtn } from './WhiteBtn'
import Image from 'next/image'
import clipper from '/public/Clipper_edited.png'

export const InfoComponent = ({ sectionTitle, title, info }) => {
  return (
    <div className='bg-customBlack pt-40 pb-10 h-full'>
      <div className='container px-14'>
        <SectionTitle text={sectionTitle} color='#FFFFFFB3' />

        <div className='flex'>
          <div className='text-customWhite my-auto w-9/12'>
            <div className='flex flex-col gap-10 mb-10'>
              <p className='text-7xl font-light'>{title}</p>
              <p className='leading-relaxed text-lg'>{info}</p>
            </div>

            <WhiteBtn text='FIND OUT MORE' link='mailto:info@swavhair.co.uk' />
          </div>

          <div className='w-4/12 h-full flex justify-end items-center'>
            <Image
              src={clipper}
              alt='Clipper Image'
              layout='intrinsic'
              objectFit='contain'
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
