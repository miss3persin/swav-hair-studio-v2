import React from 'react'
import insta_icon from '/public/instagram_white.png'
import tiktok_icon from '/public/tiktok_white.png'
import Image from 'next/image'

export const FooterAlt = () => {
  return (
    <div className='pt-8 pb-8 bg-customBlack'>
        <div className='container px-14 flex justify-between items-center'>
            <div>
            <p className='text-sm font-light text-customWhite'>
            © 2024 Swav Barbers. All rights reserved.
          </p>
            </div>

            <div className='flex gap-4'>
            <div className='relative flex h-6 w-6 items-center hoverable justify-center'>
              <Image
                width={100}
                height={100}
                src={insta_icon}
                layout='intrinsic'
                objectFit='contain'
                quality={100}
                className='h-full w-full'
              />
            </div>

            <div className='relative flex h-6 w-6 hoverable items-center justify-center'>
                <a href='https://www.tiktok.com/@swavhairstudio' target='_blank'>
              <Image
                width={100}
                height={100}
                src={tiktok_icon}
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
