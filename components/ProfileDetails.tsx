import Image from 'next/image'
import React from 'react'

const ProfileDetails = () => {
  return (
    <div className='text-white rounded-xl flex flex-col w-full p-2 border-1 me-2 h-1/2 mt-10 bg-slate-900'>
        <div className='bg-blue-500 fill-current relative rounded-lg'>
            <Image 
                src="/img/img.jpg"
                alt='Your background image'
                width={100}
                height={120}
                className='invisible'
            />
        </div>
        {/* <div className='absolute z-10 border-2 rounded-full p-1'>
          <button className='flex mx-auto top-0'>
            <Image 
              src="/icons/Explore.svg"
              alt='Add ur image'
              width={24}
              height={24}
              className='invert flex '
            />
          </button>
        </div> */}
        <div className='text-lg font-semibold ml-2'>
          Your name here nigga
        </div>
        <div className='ml-2 rounded-3xl bg-slate-600 p-2 w-fit flex  mt-2'>
          <Image 
            src="/icons/Home.svg"
            alt='Share'
            width={18}
            height={18}
            className='invert mr-2 my-auto'
          />
          <span className='text-sm my-auto'>
          Share
          </span>
        </div>
        <div className='grid grid-cols-2 mt-4 ml-2'>
          <div className='flex flex-col'>
            <span>1</span>
            <span className='text-xs text-slate-400'>Post Karma</span>
          </div>
          <div className='flex flex-col'>
            <span>1</span>
            <span className='text-xs text-slate-400'>Comment Karma</span>
          </div>
          <div className='flex flex-col'>
            <span>1</span>
            <span className='text-xs text-slate-400'>Cake Day</span>
          </div>
          <div className='flex flex-col'>
            <span>1</span>
            <span className='text-xs text-slate-400'>Gold Recieved</span>
          </div>

        </div>
        <div className='ml-2 mt-4'>
          Settings
        </div>
        <div className='flex mt-4 ml-2 justify-between'>
            <div className='flex'>
            <div>
              <Image 
                src="/icons/Explore.svg"
                alt='Cbg'
                width={40}
                height={40}
                className='invert'
              />
            </div>
            <div className='flex flex-col'>
              <div className='text-sm'>
                Profile
              </div>
              <div className='text-xs text-slate-500'>
                Customize your Profile
              </div>

            </div>
            </div>
            <div className='flex items-center '>
            <div className='flex bg-slate-600 p-2 rounded-lg h-fit  items-center'>
              <button className='text-xs  my-auto'>
                Edit Profile
              </button>
            </div>
            </div>
        </div>
        <div className='flex mt-4 ml-2 justify-between'>
            <div className='flex'>
            <div className='mr-1'>
              <Image 
                src="/icons/You.svg"
                alt='Cbg'
                width={40}
                height={40}
                className='invert'
              />
            </div>
            <div className='flex flex-col'>
              <div className='text-sm'>
                Avatar
              </div>
              <div className='text-xs text-slate-500'>
                Customize your Avatar
              </div>

            </div>
            </div>
            <div className='flex items-center '>
            <div className='flex bg-slate-600 p-2 rounded-lg h-fit  items-center'>
              <button className='text-xs  my-auto'>
                Style Avatar
              </button>
            </div>
            </div>
        </div>
        <div className='flex mt-4 ml-2 justify-between'>
            <div className='flex'>
            <div className='mr-1'>
              <Image 
                src="/icons/You.svg"
                alt='Cbg'
                width={40}
                height={40}
                className='invert'
              />
            </div>
            <div className='flex flex-col'>
              <div className='text-sm'>
                Moderation
              </div>
              <div className='text-xs text-slate-500'>
                Moderation Tools
              </div>

            </div>
            </div>
            <div className='flex items-center '>
            <div className='flex bg-slate-600 p-2 rounded-lg h-fit  items-center'>
              <button className='text-xs  my-auto'>
                Mod Settings
              </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileDetails