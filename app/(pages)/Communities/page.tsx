
import CommunityCard from '@/components/CommunityCard'
import React from 'react'

const Communities = () => {
  return (
    <div className='bg-slate-900 h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-4 '>
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />

    </div>
    </div>
  )
}

export default Communities