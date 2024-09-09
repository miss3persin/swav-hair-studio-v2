'use client'

// black button component

import React from 'react'

export const BlackBtn = ({text, link, target}) => {
  return (
    <button className='text-customWhite border border-customBlack rounded bg-customBlack px-8 py-3 font-medium text-xs sm:text-base'>
    <a href={link} target={target}>{text}</a>
</button>
  )
}
