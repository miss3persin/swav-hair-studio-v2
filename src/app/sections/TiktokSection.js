import React from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { TiktokComponent } from '../components/TiktokComponent'
import top_curve from '/public/curve-guide-top.png'
import Image from 'next/image'

export const TiktokSection = () => {
  return (
    <div className='bg-customBlack pb-24 '>
    <div className='relative'>
    <div className='container px-14 pt-10'>
    <SectionTitle text='TIKTOK HIGHLIGHTS' color='#FFFFFFB3' />
    </div>

    <div className=''>
        <TiktokComponent/>
    </div>

    <div className='w-full absolute -bottom-[1.5rem]'>
        <Image
          src={top_curve}
          alt=''
          layout='intrinsic'
          objectFit='contain'
          quality={100}
          className='absolute'
        />
      </div>

      </div>
    
    </div>
  )
}
