'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '/public/Logo.png';
import { WhiteBtn } from '../components/WhiteBtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavbarSection = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative w-screen bg-customBlack'>
      <div className='fixed z-[99999] w-full flex items-center justify-between border-b border-customWhite border-opacity-50 bg-customBlack px-14 xl:px-24 pb-2 pt-2'>

        {/* Logo Section */}
        <div className='hoverable relative flex h-14 w-14 lg:h-16 lg:w-16 xl:h-24 xl:w-24 items-center justify-center'>
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

        {/* Hamburger Menu for md and below */}
        <div className={`lg:hidden hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links for lg and above (unaltered) */}
        <div className='hidden lg:flex h-16 items-center justify-center border-l border-r border-customWhite border-opacity-50 px-10'>
          <ul className='flex lg:gap-8 xl:gap-16 2xl:gap-28 text-sm font-extralight text-customWhite'>
            <Link href='/academy'>
              <li className={`hoverable ${pathname === '/academy' ? 'opacity-50' : ''}`}>Academy</li>
            </Link>
            <Link href='/products'>
              <li className={`hoverable ${pathname === '/products' ? 'opacity-50' : ''}`}>Products</li>
            </Link>
            <Link href='/location'>
              <li className={`hoverable ${pathname === '/location' ? 'opacity-50' : ''}`}>Location</li>
            </Link>
            <Link href='/haircare'>
              <li className={`hoverable ${pathname === '/haircare' ? 'opacity-50' : ''}`}>Haircare</li>
            </Link>
            <Link href='/about'>
              <li className={`hoverable ${pathname === '/about' ? 'opacity-50' : ''}`}>About</li>
            </Link>
            <Link href='/contact'>
              <li className={`hoverable ${pathname === '/contact' ? 'opacity-50' : ''}`}>Contact</li>
            </Link>
          </ul>
        </div>

        {/* Button for lg and above (unaltered) */}
        <div className='hidden lg:flex'>
          <WhiteBtn text='BOOK NOW' link='https://www.barberly.com/' target='_blank' />
        </div>

      </div>

      {/* Nav Links and Button for md and below */}
      <div className={`lg:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-60px)] bg-customBlack z-[100000] transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} px-6 py-4`}>
        <div className='flex flex-col h-full justify-center'>
          <ul className='flex flex-col items-center gap-8 text-sm font-extralight text-customWhite'>
            <Link href='/academy'>
              <li className={`hoverable ${pathname === '/academy' ? 'opacity-50' : ''}`}>Academy</li>
            </Link>
            <Link href='/products'>
              <li className={`hoverable ${pathname === '/products' ? 'opacity-50' : ''}`}>Products</li>
            </Link>
            <Link href='/location'>
              <li className={`hoverable ${pathname === '/location' ? 'opacity-50' : ''}`}>Location</li>
            </Link>
            <Link href='/haircare'>
              <li className={`hoverable ${pathname === '/haircare' ? 'opacity-50' : ''}`}>Haircare</li>
            </Link>
            <Link href='/about'>
              <li className={`hoverable ${pathname === '/about' ? 'opacity-50' : ''}`}>About</li>
            </Link>
            <Link href='/contact'>
              <li className={`hoverable ${pathname === '/contact' ? 'opacity-50' : ''}`}>Contact</li>
            </Link>
          </ul>

          {/* Button below navbar for smaller screens */}
          <div className='mt-6 flex justify-center'>
            <WhiteBtn text='BOOK NOW' link='https://www.barberly.com/' target='_blank' />
          </div>
        </div>
      </div>
    </nav>
  );
};
