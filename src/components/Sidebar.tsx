'use client'
import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import Image from 'next/image'
import { sidebar } from '@/data/sidebar'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useMediaQuery } from 'usehooks-ts'

const SideBar = () => {

  const path = usePathname()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // DESKTOP
  if (isDesktop) {
    return (
      isMounted && (<aside className=" bg-white lg:flex lg:items-center min-w-[350px] h-screen overflow-y-auto px-[70px] border-r bg-background lg:sticky top-0">
        <ScrollArea className="flex flex-col items-start justify-center pt-2.5 w-full">
          <Image src={'/dark.png'} alt="Logo" width={150} height={30} />
          <ol className="flex flex-col items-start py-[50px] w-full">
            {
              sidebar.map((item, i) => (
                <li className="mb-2.5 uppercase w-full" key={i}>
                  <Link className={`${path === item.path && '!text-black'} text-gray-1 inline-block font-medium w-full text-[13px] hover:text-black transition duration-200`} href={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ol>
          <p className="text-black/50">© 2024 Kioto</p>
          <p className="text-black/50">Created by <Link className="text-black/60 hover:text-black transition duration-300" href={'/'}>Marketify</Link></p>
        </ScrollArea>
      </aside>)
    )
  }
}

export default SideBar