import Image from 'next/image'
import React from 'react'

const PostCard = () => {
  return (
    <div className='flex flex-col m-2 bg-white rounded-lg max-h-fit max-w-fit'>
        <div className='border-2 border-black p-2 rounded-lg '>
        <div>
            <Image 
                src="/img/img.jpg"
                alt='Image'
                width={0}
                height={0}
                className='w-[300px] h-fit'
            />
        </div>
        <div className='flex justify-between mt-1'>
            <div className='flex'>
                <Image 
                    src="/icons/Home.svg"
                    alt='Somethinf'
                    width={24}
                    height={24}
                />
                <span className='ml-1 my-auto'>
                    Some title...
                </span>
            </div>
            <div>
                <Image 
                    src="/icons/Explore.svg"
                    alt='Share'
                    width={24}
                    height={24}
                />
            </div>
        </div>
        </div>
    </div>
  )
}

export default PostCard