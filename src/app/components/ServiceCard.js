import Image from 'next/image'

export const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className='h-52 w-[22rem] rounded-xl border-2 border-white/15 bg-customBlack p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
      <Image
        src={icon}
        alt={title}
        width={45}
        height={45}
        layout='intrinsic'
        objectFit='contain'
        quality={100}
      />
      <h4 className='mt-2 text-[1.2rem] font-semibold text-white'>{title}</h4>
      <p className='mt-3 pr-10 text-[0.9rem] font-extralight text-white/70'>
        {description}
      </p>
    </div>
  )
}
