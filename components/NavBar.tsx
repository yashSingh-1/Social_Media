"use client"

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavBar = () => {
    const pathname = usePathname();
  return (
    <div className="h-fit fixed w-full">
        <div className="flex justify-between bg-black text-white p-2  ">
        <div className="text-2xl font-mono">
            Discuss
        </div>
      <Sheet>
        <SheetTrigger className="md:invisible">
            <Image 
                src="/icons/Home.svg"
                alt="Options"
                width={30}
                height={30}
                className="invert "
            />
        </SheetTrigger>
        <SheetClose asChild>
        <SheetContent className="bg-black text-white border-0">
        <Link href="/">
        <div className='p-4 text-3xl font-mono my-4 flex ml-4'>
            Discuss
        </div>
        </Link>
        {
            sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <SheetClose asChild>
                      <Link className='' href={item.route} key={item.label}>
                        <div className={cn('flex p-4 mx-3 rounded-lg cursor-pointer', {'bg-slate-200 text-black ': isActive})} >
                        <Image src={item.imgUrl} alt={item.label} width={30} height={30} className={cn('invert', {'invert-0': isActive})}/>
                        <p className='text-xl ml-2 w-[200px]'>{item.label}</p>
                    </div>
                    </Link>
                    </SheetClose>
                )
            })
        }
        </SheetContent>
        </SheetClose>
      </Sheet>
    </div>
    </div>
  );
};

export default NavBar;
