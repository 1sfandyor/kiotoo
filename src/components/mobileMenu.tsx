'use client'
import React from 'react'
import { sidebar } from '@/data/sidebar'
import Link from 'next/link'

const MobileMenu = () => {

  return (
    <aside className=" bg-white flex h-screen w-full pt-[100px] py-[50px] px-5 overflow-y-auto  border-r bg-background sticky top-0">
      <ol className="flex flex-col items-end text-end  w-full">
          {
            sidebar.map((item, i) => (
              <li className="mb-2.5 uppercase w-full" key={i}>
                <Link className={'!text-black inline-block font-medium w-full text-[13px] hover:text-black transition duration-200]'} href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ol>
    </aside>)
}

export default MobileMenu;