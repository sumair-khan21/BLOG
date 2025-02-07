import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
    <header className="flex justify-between py-5 px-4 bg-black text-white  max-w-screen-2xl mx-auto border-b border-gray-900">
      {/* Logo */}
      <div >
        <Link href=""><h2 className="transition-all duration-500 font-serif font-bold lg:text-3xl md:text-xl sm:text-lg text-gray-300 pl-5 hover:scale-110 ease-out ">Magic Stories</h2></Link>
      </div>
      {/* Nav buttons */}
      <ul className="hidden md:block">
        <li className="space-x-10 lg:text-lg font-mono pr-4 font-bold
">
          <Link href="/" className='hover:underline hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] '>Home</Link>
          <Link href="/about" className='hover:underline hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]'>About</Link>
          <Link href="/blog" className='hover:underline hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]'>Blog</Link>
          <Link href="/contact" className='hover:underline hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]'>Contact</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />  
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li className="space-x-5 py-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
    </>
  )
}

export default Navbar
