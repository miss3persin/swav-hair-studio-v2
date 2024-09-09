'use client'

// location and address section on home page

import { useState } from 'react'
import { Address } from '../components/Address'
import newcastle_img from '/public/newcastle.jpg'
import sunderland_img from '/public/sunderland.jpg'
import top_curve from '/public/curve-guide-top.png'
import bottom_curve from '/public/curve-guide-bottom.png'
import Image from 'next/image'

const storeData = [
  {
    id: 1,
    name: 'Swav Hair Newcastle',
    address: '71 Westgate Road, Newcastle upon Tyne, NE1 1SG',
    info: 'Located near the city centre, our Newcastle shop combines expert barbering with modern grooming, backed by over 20 years of experience. We deliver top-notch services with a traditional touch, ensuring every customer enjoys a personalized and professional grooming experience.',
    openingHours: [
      'Tuesday - Saturday : 9:00 AM - 7:00 PM',
      'Sunday - Monday : Closed'
    ],
    imageUrl: newcastle_img,
    link: 'https://www.barberly.com/',
    coordinates: [52.489471, -1.898575]
  },
  {
    id: 2,
    name: 'Swav Hair Sunderland',
    address: '151 Hylton Road, Sunderland, SR4 7YF',
    info: "Our Sunderland shop is conveniently located on Hylton Road, right on the bus route, making it easily accessible. With our skilled barbers and over 20 years of experience, we offer top-quality grooming services in a welcoming, relaxed environment. Whether you're looking for a sharp haircut or a traditional shave, we ensure every visit is tailored to your needs.",
    openingHours: [
      'Tuesday - Saturday : 9:00 AM - 7:00 PM',
      'Sunday - Monday : Closed'
    ],
    imageUrl: sunderland_img,
    link: 'https://www.barberly.com/',
    coordinates: [54.906101, -1.38113]
  }
]

export const HomeLocationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevStore = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? storeData.length - 1 : prevIndex - 1
    )
  }

  const handleNextStore = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === storeData.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className='relative pt-14 pb-16'>
      <div className='w-full absolute hidden sm:block sm:-top-[2.15rem] md:-top-[2.58rem] lg:-top-[3.5rem] xl:-top-[4.5rem] select-none 2xl:hidden'>
        <Image
          src={top_curve}
          layout='intrinsic'
          objectFit='contain'
          quality={100}
          className='absolute'
        />
      </div>

      <Address
        stores={storeData}
        currentIndex={currentIndex}
        handlePrevStore={handlePrevStore}
        handleNextStore={handleNextStore}
      />

<div className='w-full absolute hidden sm:block sm:bottom-[1.6rem] md:bottom-[2rem] lg:bottom-[2.8rem] xl:bottom-[3.5rem] select-none 2xl:hidden'>
        <Image
          src={bottom_curve}
          layout='intrinsic'
          objectFit='contain'
          quality={100}
          className='absolute'
        />
      </div>

    </div>
  )
}
