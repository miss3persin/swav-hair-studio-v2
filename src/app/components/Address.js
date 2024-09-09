'use client'

// address and location component

import Image from 'next/image'
import { TransparentBtn } from './TransparentBtn'
import arrow_btn from '/public/arrow_btn.png'

export const Address = ({ stores, currentIndex, handlePrevStore, handleNextStore }) => {
  const currentStore = stores[currentIndex]

  return (
    <div className='container px-14'>
      <div className='flex lg:flex-row flex-col border'>
        <div className='flex h-[30rem] sm:h-96 md:h-80 lg:h-[28rem] w-full overflow-hidden'>
          <Image
            src={currentStore.imageUrl}
            alt={currentStore.name}
            layout='intrinsic'
            quality={100}
            className='h-full w-full object-cover'
          />
        </div>

        <div className='flex lg:w-10/12 py-6 lg:py-0 w-full flex-col justify-center text-customBlack relative'>
          <div className='flex flex-col gap-2 px-10 lg:px-8'>
            <p className='text-xl sm:text-3xl xl:text-4xl font-medium'>{currentStore.name}</p>
            <p className='text-base sm:text-lg xl:text-xl font-medium'>{currentStore.address}</p>
            <p className='text-xs sm:text-base lg:text-xs xl:text-sm'>{currentStore.info}</p>
          </div>

          <div className='flex justify-between px-3 py-1 absolute w-full top-1/2'>
            <button
              className={`hoverable ${currentIndex === 0 ? 'cursor-default opacity-30' : ''}`}
              onClick={handlePrevStore}
              disabled={currentIndex === 0}
            >
              <Image src={arrow_btn} alt='Previous' width={8} height={8} className='rotate-180' />
            </button>

            <button
              className={`hoverable ${currentIndex === stores.length - 1 ? 'cursor-default opacity-30' : ''}`}
              onClick={handleNextStore}
              disabled={currentIndex === stores.length - 1}
            >
              <Image src={arrow_btn} alt='Next' width={8} height={8} />
            </button>
          </div>

          <div className='flex flex-col px-10 lg:px-8 pb-5 mt-5 lg:mt-7'>
            <p className='mb-2 text-sm sm:text-base xl:text-lg font-semibold'>Opening Times</p>
            {currentStore.openingHours.map((time, index) => (
              <p className='text-xs sm:text-sm' key={index}>
                {time}
              </p>
            ))}
          </div>

          <div className='flex flex-col items-start pl-10 sm:px-10 lg:px-8'>
            <TransparentBtn
              text='BOOK NOW'
              link={currentStore.link}
              target='_blank'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
