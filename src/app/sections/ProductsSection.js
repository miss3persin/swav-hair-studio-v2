'use client'

// products section on products page

import React from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { WhiteBtn } from '../components/WhiteBtn'
import product_1 from '/public/product_1.jpg'
import product_2 from '/public/product_2.jpg'
import product_3 from '/public/product_3.jpg'
import product_4 from '/public/product_4.jpg'
import product_5 from '/public/product_5.jpg'
import product_6 from '/public/product_6.jpg'
import Image from 'next/image'

export const ProductsSection = () => {
  return (
    <div className='h-full bg-customBlack pb-10 pt-32 md:pt-40'>
      <div className='container px-14'>
        <SectionTitle text='SWAV HAIR PRODUCTS' color='#FFFFFFB3' />

        <div className='flex lg:flex-row flex-col gap-10 items-center'>
          <div className='lg:w-full xl:w-6/12 text-customWhite my-auto flex flex-col lg:block'>
          <p className='text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3.5rem] md:leading-none mb-7'>
            Swav Hair: Modern Grooming Essentials
          </p>

            <p className='text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed mb-5 sm:mb-[33rem] md:mb-[41rem] lg:mb-7 text-justify'>
              Swav Hair Studio blends the artistry of traditional barbering with
              modern grooming innovations. Our carefully experience curated
              range of premium hair care products and essential grooming tools
              reflects this balance, offering everything you need for a sharp,
              contemporary look. Explore our exclusive products and be a part of
              the brand with our merchandise, designed to keep you looking and
              feeling your best. Kindly click Find Out More or send us an email
              for details.
            </p>

            <WhiteBtn text='FIND OUT MORE' link='mailto:info@swavhair.co.uk' />
          </div>


          {/* image container gallery */}

          <div className='h-full w-full flex flex-col gap-3 sm:gap-0 lg:gap-3 relative'>

            {/* first group of pictures */}
            <div className='flex sm:flex-row flex-col h-full w-full gap-3 sm:gap-0 lg:gap-2 xl:gap-3 lg:static sm:absolute sm:bottom-[36.5rem] md:bottom-[44rem]'>
              <div className='h-full w-full lg:w-[68.8%] xl:w-[68.5%]'>
                <Image
                  src={product_1}
                  alt='product 1'
                  layout='intrinsic'
                  objectFit='contain'
                  quality={100}
                  className='transition-transform duration-300 hover:scale-105 hoverable'
                />
              </div>

              <div className='flex h-full w-full sm:w-1/2 lg:w-[33%] flex-col items-center justify-between gap-3 sm:gap-0 lg:gap-2 xl:gap-3'>
                <div className='w-full'>
                  <Image
                    src={product_2}
                    alt='product 2'
                    layout='intrinsic'
                    objectFit='contain'
                    quality={100}
                    className='transition-transform duration-300 hover:scale-105 hoverable'
                  />
                </div>

                <div className='w-full'>
                  <Image
                    src={product_3}
                    alt='product 3'
                    layout='intrinsic'
                    objectFit='contain'
                    quality={100}
                    className='transition-transform duration-300 hover:scale-105 hoverable'
                  />
                </div>
              </div>
            </div>

            {/* second group of pictures */}

            <div className='flex sm:flex-row flex-col h-full w-full gap-3 sm:gap-0 lg:gap-2 xl:gap-3 lg:static sm:absolute sm:bottom-[21.8rem] md:bottom-[25.8rem]'>
             
              <div className='flex h-full w-full sm:w-1/2 lg:w-[33%] flex-col items-center justify-between gap-3 sm:gap-0 lg:gap-2 xl:gap-3'>
                <div className='w-full'>
                  <Image
                    src={product_5}
                    alt='product 5'
                    layout='intrinsic'
                    objectFit='contain'
                    quality={100}
                    className='transition-transform duration-300 hover:scale-105 hoverable'
                  />
                </div>

                <div className='w-full'>
                  <Image
                    src={product_6}
                    alt='product 6'
                    layout='intrinsic'
                    objectFit='contain'
                    quality={100}
                    className='transition-transform duration-300 hover:scale-105 hoverable'
                  />
                </div>
              </div>

              <div className='h-full w-full lg:w-[68.8%] xl:w-[68.5%]'>
                <Image
                  src={product_4}
                  alt='product 4'
                  layout='intrinsic'
                  objectFit='contain'
                  quality={100}
                  className='transition-transform duration-300 hover:scale-105 hoverable'
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
