'use client'

import Image from 'next/image'
import React from 'react'
import logo from '/public/Logo.png'
import { WhiteBtn } from '../components/WhiteBtn'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const NavbarSection = () => {

  const pathname = usePathname();
  
  return (
    <nav className='relative w-screen bg-customBlack'>
      <div className='fixed z-[99999] w-full items-center justify-between border-b border-customWhite border-opacity-50 bg-customBlack px-24 pb-2 pt-2 sm:flex'>
        <div className='hoverable relative flex h-24 w-24 items-center justify-center'>
          <Link href='/'>
            <Image
              src={logo}
              alt='SWAV HAIR STUDIOS'
              layout='intrinsic'
              objectFit='contain'
              quality={100}
            />
          </Link>
        </div>

        <div className='flex h-16 items-center justify-center border-l border-r border-customWhite border-opacity-50 px-10'>
      <ul className='flex gap-16 text-sm font-extralight text-customWhite'>
        <Link href='/academy'>
          <li className={`hoverable ${pathname === '/academy' ? 'opacity-50' : ''}`}>
            Academy
          </li>
        </Link>
        <Link href='/products'>
          <li className={`hoverable ${pathname === '/products' ? 'opacity-50' : ''}`}>
            Products
          </li>
        </Link>
        <Link href='/location'>
          <li className={`hoverable ${pathname === '/location' ? 'opacity-50' : ''}`}>
            Location
          </li>
        </Link>
        <Link href='/haircare'>
          <li className={`hoverable ${pathname === '/haircare' ? 'opacity-50' : ''}`}>
            Haircare
          </li>
        </Link>
        <Link href='/about'>
          <li className={`hoverable ${pathname === '/about' ? 'opacity-50' : ''}`}>
            About
          </li>
        </Link>
        <Link href='/contact'>
          <li className={`hoverable ${pathname === '/contact' ? 'opacity-50' : ''}`}>
            Contact
          </li>
        </Link>
      </ul>
    </div>

        <div>
          <WhiteBtn
            text='BOOK NOW'
            link='https://www.barberly.com/'
            target='_blank'
          />
        </div>
      </div>
    </nav>
  )
}
