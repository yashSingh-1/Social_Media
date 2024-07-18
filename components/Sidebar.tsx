"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <div className='flex flex-col w-fit bg-black h-screen gap-4 fixed invisible md:visible text-white'>
        
        <Link href="/" >
        <div className='p-4 text-3xl font-mono my-4 flex ml-4'>
            Discuss
        </div>
        </Link>
        {
            sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link className='' href={item.route} key={item.label}>
                        <div className={cn('flex p-4 mx-3 rounded-lg cursor-pointer', {'bg-slate-200 text-black ': isActive})} >
                        <Image src={item.imgUrl} alt={item.label} width={30} height={30} className={cn('invert', {'invert-0': isActive})}/>
                        <p className='text-xl ml-2 w-[200px]'>{item.label}</p>
                    </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Sidebar