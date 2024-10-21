'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Sheet, SheetContent } from './ui/sheet'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <header className='flex lg:hidden w-full mb-7'>
      <nav className="bg-white w-full border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">KIOTO</span>
          </Link>

          <button onClick={() => setOpen(true)} data-collapse-toggle="navbar-default" type="button" 
          className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>

          <Sheet open={open} onOpenChange={() => setOpen(false)}>
            <SheetContent className='p-0'>
              <div className='flex flex-col bg-white w-full h-screen'>
                
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default Navbar