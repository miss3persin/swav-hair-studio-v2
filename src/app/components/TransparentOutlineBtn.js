'use client'

// transparent button component with an outline

import React from 'react'

export const TransparentOutlineBtn = ({text, link, target}) => {
  return (
    <button className='text-customWhite border hoverable border-customWhite rounded bg-transparent px-8 py-3 font-medium text-xs sm:text-base'>
    <a href={link} target={target}>{text}</a>
</button>
  )
}
