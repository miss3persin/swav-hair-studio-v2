'use client'

// alternate footer component

import React from 'react'
import insta_icon from '/public/instagram_white.png'
import tiktok_icon from '/public/tiktok_white.png'
import Image from 'next/image'

export const FooterAlt = () => {
  return (
    <div className='pt-8 pb-8 bg-customBlack'>
        <div className='container px-8 sm:px-14 flex sm:flex-row flex-col gap-6 sm:gap-0 justify-between sm:items-center'>
            <div>
            <p className='text-xs sm:text-sm font-light text-customWhite'>
            © 2024 Swav Barbers. All rights reserved.
          </p>
            </div>

            <div className='flex gap-4'>
            <div className='relative flex h-4 w-4 sm:h-6 sm:w-6 items-center hoverable justify-center'>
            <a className='h-4 w-4 sm:h-6 sm:w-6' href='https://www.instagram.com/swavhairstudio/' target='_blank'>
              <Image
                width={100}
                height={100}
                src={insta_icon}
                alt='instagram'
                layout='intrinsic'
                objectFit='contain'
                quality={100}
                className='h-full w-full'
              />
              </a>
            </div>

            <div className='relative flex h-4 w-4 sm:h-6 sm:w-6 hoverable items-center justify-center'>
                <a className='h-4 w-4 sm:h-6 sm:w-6' href='https://www.tiktok.com/@swavhairstudio' target='_blank'>
              <Image
                width={100}
                height={100}
                src={tiktok_icon}
                alt='tiktok'
                layout='intrinsic'
                objectFit='contain'
                quality={100}
                className='h-full w-full'
              />
              </a>
            </div>
            </div>
        </div>
    </div>
  )
}
