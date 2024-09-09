import React from 'react'

export const TransparentBtn = ({text, link, target}) => {
  return (
    <button className='text-customBlack border hoverable border-customBlack rounded bg-transparent px-8 py-3 font-medium text-xs sm:text-base'>
    <a href={link} target={target}>{text}</a>
</button>
  )
}
