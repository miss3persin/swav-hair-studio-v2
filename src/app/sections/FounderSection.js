import Link from 'next/link';
import React from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { TransparentOutlineBtn } from '../components/TransparentOutlineBtn'
import founder from '/public/founder_edited.jpg'
import Image from 'next/image'

export const FounderSection = () => {
  return (
    <div className='container px-14 pb-40'>
      <div className='-mt-5'>
        <SectionTitle text='THE FOUNDER' color='#222222B3' />
      </div>

      <div className='container flex items-center gap-10 mt-8 rounded-3xl bg-customBlack px-14 py-8 text-customWhite'>
        <div className='my-auto w-full'>
          <div className='mb-5 flex flex-col gap-3'>
            <p className='text-4xl'>
              Mr. KaySwav - Founder of Swav Hair Studio
            </p>

            <p className='text-sm font-light'>
              Mr. KaySwav, the founder and creative force behind Swav Hair
              Studio, is a seasoned grooming expert with over two decades of
              experience. His passion for the craft, paired with an innovative
              spirit, has set him apart as a visionary in the barbering
              industry. Known for his bespoke haircuts and meticulous attention
              to detail, Mr. KaySwav elevates grooming to an art form, creating
              personalized experiences for each client. More than just a barber,
              Mr. KaySwav is a mentor and leader, committed to cultivating a
              community of skilled professionals who share his dedication to
              excellence. His studio stands as a haven of style and
              sophistication, where traditional barbering meets modern
              innovation, all within an atmosphere designed for comfort and
              care. Mr. KaySwav's relentless pursuit of perfection continues to
              inspire both his clients and the next generation of barbers.
            </p>
          </div>

          <Link href="/about">
          <TransparentOutlineBtn text='ABOUT US' />
          </Link>
        </div>

        <div className='w-full h-[30rem] border-[#ffffff26] border flex items-center justify-center rounded-3xl overflow-hidden'>
          <Image
            src={founder}
            className='h-full w-full object-cover'
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
