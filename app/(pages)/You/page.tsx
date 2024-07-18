import PostCard from '@/components/PostCard'
import ProfileDetails from '@/components/ProfileDetails'
import YourData from '@/components/YourData'
import React from 'react'

const You = () => {
  return (
    <div className='max-w-full bg-slate-950  md:grid grid-cols-4 p-2'>
      <div className='col-span-3'>
      <YourData />
      <hr className="h-px my-8 bg-gray-100 border-0 dark:bg-gray-100 max-w-full me-2 " />
     <div className='grid grid-cols-3 justify-items-center'>
     <PostCard />
     <PostCard />
     <PostCard />
     <PostCard />
     </div>

      </div>
      <div className='invisible md:visible '>
        <ProfileDetails />
      </div>
    </div>
  )
}

export default You