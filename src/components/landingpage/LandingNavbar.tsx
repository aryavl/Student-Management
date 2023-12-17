"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation' 
const LandingNavbar = () => {
    const pathname = usePathname()
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
     const navLinks = [
      {name:"About",href:"/about"},
      {name:"Login",href:"/login"},
      
     ]
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
            <div className="flex justify-between items-center nav text-white px-10 sm:px-20 md:px-28  py-5">
        <div className="flex flex-row justify-between items-center mt-2 mb-2 md:m-0 md:flex">
          <Link href="/">
            <h1 className="text-xl text-white md:text-4xl">
              <span className="font-extrabold font-antialiased">Edu</span>
              <span className="font-serif antialiased secondHalfHeading">Connect</span>
            </h1>
          </Link>
        </div>

        <div className="justify-center items-center md:justify-start hidden md:flex">
          {navLinks.map(link=>{
            const isActive = pathname === link.href
            return (
              <Link key={link.name} href={link.href}>
               {link.name === "Register" ? (
        <button className=" text-white darkbtn hover:bg-teal-900 font-bold py-3 px-5 flex items-center justify-center text-center text-lg mr-auto">
          {link.name}
        </button>
      ) : (
        <button className={isActive?"h-9 w-24 border-b-2 font-bold flex items-center justify-center text-center text-lg  mr-6":"h-9 w-24 text-white font-bold flex items-center justify-center text-center rounded-lg text-lg  mr-6"}>{link.name}</button>
      )}
               </Link>
            )
          })}
         
        </div>
        <div className="md:hidden flex items-center">
          <div className="outline-none mobile-menu-button" onClick={toggleMobileMenu}>
            <svg
              id="Windframe_upCcmZw8jy"
              fill="none"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white hover:text-green-500 cursor-pointer"
            >
              <path id="Windframe_ggSZe1s2Cw" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className={`md:hidden mobile-menu ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col">
          <Link href="/about">
            <button className="h-9 w-24 text-white font-bold flex items-center justify-center text-center rounded-lg text-lg mt-2 mr-auto ml-auto">About</button>
          </Link>
          <Link href="/login">
            <button className="h-9 w-24 text-white font-bold flex items-center justify-center text-center rounded-lg text-lg mt-2 mr-auto ml-auto">Login</button>
          </Link>
          <Link href="/register">
            <button className="text-white darkbtn hover:bg-teal-900 font-bold py-3 px-5 flex items-center justify-center text-center text-lg mt-2 mr-auto ml-auto">Register</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LandingNavbar