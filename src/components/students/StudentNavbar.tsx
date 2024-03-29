
"use client"
import React from 'react'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';



const StudentNavbar = () => {
  const { data: session } = useSession();
  function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu?.classList.toggle('hidden');
  }
  return (
    <div className="w-full bg-orange-800 text-white border-b border-orange-800">
      <div className="mx-auto h-16 items-center justify-between px-4 flex">
        <div>
        <Link href="/admin/dashboard">
            <h1 className="text-xl text-white md:text-4xl">
              <span className="font-extrabold font-antialiased">Edu</span>
              <span className="font-serif antialiased text-orange-400">Connect</span>
            </h1>
          </Link>
        </div>
        <div className="ml-40 mr-auto lg:block relative hidden max-w-xs">
          <p className="items-center pl-3 pointer-events-none absolute inset-y-0 left-0 flex">
            <span className="items-center justify-center flex">
              <span className="items-center justify-center flex">
                <span className="h-5 w-5 items-center justify-center text-white flex">
                  <span className="items-center justify-center h-full w-full flex">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0
                        11-14 0 7 7 0 0114 0z"></path></svg>
                  </span>
                </span>
              </span>
            </span>
          </p>
          <input type="search" placeholder="Type to search" className="border  border-white focus:border-white
              focus:ring-white w-full rounded-lg bg-orange-900 px-3 py-2 pb-2 pl-10 pt-2 text-white sm:text-sm"></input>
        </div>
        <div className="ml-auto items-center justify-end md:space-x-6 flex space-x-3">

          <div className="relative">
            <p className="rounded-full bg-orange-400 pb-1 pl-1 pr-1 pt-1 text-white transition-all duration-200
                hover:bg-white hover:text-orange-400 focus:outline-none">
              <span className="items-center justify-center flex">
                <span className="items-center justify-center flex">
                  <span className="h-6 w-6 items-center justify-center flex">
                    <span className="items-center justify-center h-full w-full flex">
                      <svg className="w-full h-full " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                          0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6
                          0v-1m6 0H9"></path></svg>
                    </span>
                  </span>
                </span>
              </span>
            </p>
            <p className="items-center rounded-full bg-white px-1.5 py-0.5 text-xs font-semibold text-orange-400 absolute
                -right-1 -top-px inline-flex">2</p>
          </div>
          <div className="relative inline-block text-left">
  <div className="items-center justify-center relative flex" onClick={toggleDropdown}>
    {/* <img
      src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
      className="object-cover btn- mr-2 h-9 w-9 rounded-full bg-white cursor-pointer"
      
    /> */}
    <p className="text-sm font-semibold">{session?.user?.studentName}</p>
  </div>
  
  <div id="dropdown-menu" className="hidden absolute z-50 mt-2 py-4  bg-white text-orange-800 font-bold rounded-md shadow-lg">
    <div className="py-1">
      <Link href="/student/profile" className="block px-10 py-2 text-sm hover:text-white hover:bg-orange-800"> Profile</Link>
      <button onClick={()=>{signOut({callbackUrl:'/'})}}  className="block px-10 py-2 text-sm hover:text-white hover:bg-orange-800">Logout</button>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default StudentNavbar