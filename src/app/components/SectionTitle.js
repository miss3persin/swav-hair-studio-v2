import React from 'react'

// text-[#FFFFFFB3] (white) or text-[#222222B3] (black)

export const SectionTitle = ({text, color}) => {
  return (
    <>
    <div className='font-bold text-xs pb-8 tracking-wider z-10 relative' style={{ color: color }}>{text}</div>
    {/* <div className='font-extrabold text-xs text-[#222222B3]'>SWAV HAIR STUDIO</div> */}
    </>
  )
}
