"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';



const AdminNavbar = () => {
  const { data: session } = useSession();
  console.log("session on admin  navbar ");
  console.log(session?.user);
  console.log("end session on admin  navbar ");
  return (
    <div className="w-full bg-gray-900 text-gray-200 border-b border-gray-800">
      <div className="mx-auto h-16 items-center justify-between px-4 flex">
        <div>
        <Link href="/admin/dashboard">
            <h1 className="text-xl text-white md:text-4xl">
              <span className="font-extrabold font-antialiased">SCHU</span>
              <span className="font-serif antialiased text-gray-400">LER</span>
            </h1>
          </Link>
        </div>
        <div className="ml-40 mr-auto lg:block relative hidden max-w-xs">
          <p className="items-center pl-3 pointer-events-none absolute inset-y-0 left-0 flex">
            <span className="items-center justify-center flex">
              <span className="items-center justify-center flex">
                <span className="h-5 w-5 items-center justify-center text-gray-400 flex">
                  <span className="items-center justify-center h-full w-full flex">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0
                        11-14 0 7 7 0 0114 0z"></path></svg>
                  </span>
                </span>
              </span>
            </span>
          </p>
          <input type="search" placeholder="Type to search" className="border border border-gray-700 focus:border-indigo-600
              focus:ring-indigo-600 w-full rounded-lg bg-gray-800 px-3 py-2 pb-2 pl-10 pt-2 text-gray-300 sm:text-sm"></input>
        </div>
        <div className="ml-auto items-center justify-end md:space-x-6 flex space-x-3">

          <div className="relative">
            <p className="rounded-full bg-gray-800 pb-1 pl-1 pr-1 pt-1 text-gray-300 transition-all duration-200
                hover:bg-gray-700 hover:text-gray-300 focus:outline-none">
              <span className="items-center justify-center flex">
                <span className="items-center justify-center flex">
                  <span className="h-6 w-6 items-center justify-center flex">
                    <span className="items-center justify-center h-full w-full flex">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                          0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6
                          0v-1m6 0H9"></path></svg>
                    </span>
                  </span>
                </span>
              </span>
            </p>
            <p className="items-center rounded-full bg-indigo-600 px-1.5 py-0.5 text-xs font-semibold text-white absolute
                -right-1 -top-px inline-flex">2</p>
          </div>
          <div className="items-center justify-center relative flex">
          {/* <Image 
            src={session?.user?.image}
            alt='profile Pic'
            height={100}
            width={100}
            /> */}
            <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" className="object-cover btn- mr-2 h-9 w-9 rounded-full bg-gray-300"/>
            <p className="text-sm font-semibold">{session?.user?.firstname}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar