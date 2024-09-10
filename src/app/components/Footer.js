'use client'

// main footer component

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export const Footer = ({
  textColor = 'customBlack',
  bgColor = 'customWhite',
  img_1 = '/bi_instagram.png',
  img_2 = '/simple-icons_tiktok.png'
}) => {
  return (
    <div
      className={`bg-${bgColor} text-${textColor} border-t border-${textColor} border-opacity-15 py-16`}
    >
      <div className='container px-8 sm:px-14'>
        <div className='mb-14 flex justify-between lg:pr-44 text-[0.7rem] font-semibold'>
          <div className='flex flex-col gap-2 w-full'>
            <p className='font-bold'>CONTACT INFORMATION</p>
            
            <a href='tel:+447732175493' className='hoverable font-semibold'>
              +44 7732 175493
            </a>
           
            <a
              href='mailto:info@swavhair.co.uk'
              className='hoverable text-sm font-semibold'
            >
              info@swavhair.co.uk
            </a>
          </div>

          <div className='sm:flex justify-between w-full'>

          <div className='flex flex-col gap-4 mb-4 sm:mb-0 text-right sm:text-left'>
            <Link href='/academy'>
              <p className='hoverable'>ACADEMY</p>
            </Link>
            <Link href='/products'>
              <p className='hoverable'>PRODUCTS</p>
            </Link>
            <Link href='/location'>
              <p className='hoverable'>LOCATION</p>
            </Link>
          </div>

          <div className='flex flex-col gap-4 text-right sm:text-left'>
            <Link href='/haircare'>
              <p className='hoverable'>HAIRCARE</p>
            </Link>

            <Link href='/about'>
              <p className='hoverable'>ABOUT</p>
            </Link>
            <Link href='/contact'>
              <p className='hoverable'>CONTACT</p>
            </Link>
          </div>
        </div>

        </div>

        <div className='flex sm:flex-row flex-col sm:items-center gap-6 sm:gap-10'>
          <p className='text-xs sm:text-sm font-semibold'>
            © 2024 Swav Barbers. All rights reserved.
          </p>
          <div className='item-center flex gap-5'>
            <div className='hoverable relative flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center'>
            <a className='h-4 w-4 sm:h-6 sm:w-6' href='https://www.instagram.com/swavhairstudio/' target='_blank'>
              <Image
                width={100}
                height={100}
                src={img_1}
                alt='instagram'
                layout='intrinsic'
                objectFit='contain'
                quality={100}
                className='h-full w-full'
              />
              </a>
            </div>

            <div className='hoverable relative flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center'>
              <a className='h-4 w-4 sm:h-6 sm:w-6' href='https://www.tiktok.com/@swavhairstudio' target='_blank'>
                <Image
                  width={100}
                  height={100}
                  src={img_2}
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
    </div>
  )
}
