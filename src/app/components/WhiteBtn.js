'use client'

// white button component

import React from 'react'

export const WhiteBtn = ({text, link, target}) => {
  return (
    <button className='text-customBlack border hoverable border-customWhite rounded bg-customWhite px-8 py-3 font-medium text-xs sm:text-base'>
        <a href={link} target={target}>{text}</a>
    </button>
  )
}
