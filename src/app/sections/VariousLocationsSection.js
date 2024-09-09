'use client'

import { useState } from 'react'
import { Address } from '../components/Address'
import newcastle_img from '/public/newcastle.jpg'
import sunderland_img from '/public/sunderland.jpg'
// import { MapComponent } from '../components/MapComponent'
import Image from 'next/image'
import { SectionTitle } from '../components/SectionTitle'
import dynamic from 'next/dynamic';

// Dynamically import the named export with SSR disabled
const MapComponent = dynamic(() =>
    import('../components/MapComponent').then((mod) => mod.MapComponent), // Access named export
    { ssr: false }
  );

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
    coordinates: [54.97025636350617, -1.6179690660549104]
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
    coordinates: [54.90625649814807, -1.4031258297397453]
  }
]
export const VariousLocationsSection = () => {

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
    <div className='relative pt-40 pb-16'>
        <div className='container px-14'>
            <SectionTitle text='SWAV HAIR LOCATIONS'/>
        </div>

      <Address
        stores={storeData}
        currentIndex={currentIndex}
        handlePrevStore={handlePrevStore}
        handleNextStore={handleNextStore}
      />


      <div className='container px-14 hoverable'>
  <MapComponent coordinates={storeData[currentIndex].coordinates} zoom={15} />
  </div>
    </div>
  )
}
