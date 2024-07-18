import Image from 'next/image'
import React from 'react'

const CommunityCard = () => {
  return (
    <div className='relative flex border-2 border-white max-w-full md:max-w-[300px] justify-evenly p-2 m-2 bg-slate-800 text-white rounded-lg '>
      <div className='rounded-full mr-1 p-1 my-auto'>
        <Image 
          src="/icons/Home.svg"
          alt='Icon'
          width={30}
          height={30}
          className='invert'
        />
      </div>
      <div className='flex flex-col'>
        <span className='font-semibold '>
        Community Name
        </span>
        <span className='text-sm '>
          Some 4 word description
        </span>
      </div>
    </div>
  )
}

export default CommunityCard