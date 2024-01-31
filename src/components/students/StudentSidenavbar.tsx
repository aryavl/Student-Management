"use client"
import React from 'react'
import {signOut, useSession} from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


const StudentSideNavbar = () => {
  const { data: session } = useSession();
  
  return (
    <div className="bg-white text-red-900 md:w-64 md:flex-col lg:flex hidden border border-orange-800 shadow-lg">
        <div className="h-full flex-col pt-5 flex overflow-y-auto">
          <div className="h-full flex-col flex">
            <div className="px-4 space-y-4">
              <nav className="space-y-1 bg-cover bg-top">
                <Link href="/staff/dashboard" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-orange-900 group
                    block flex cursor-pointer transition-all duration-200 hover:bg-orange-800 hover:text-white">
                  <span className="items-center justify-center flex">
                    <span className="items-center justify-center flex">
                      <span className="mr-4 h-5 w-5 items-center justify-center flex flex-shrink-0">
                        <span className="items-center justify-center h-full w-full flex">
                          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1
                              1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        </span>
                      </span>
                    </span>
                  </span>
                  <></>
                  <span>Dashboard</span>
                </Link>
                
              
              </nav>
              <div>
                <p className="px-4 text-xs font-semibold tracking-widest text-orange-800 uppercase">Class</p>
                <nav className="mt-4 space-y-1 bg-cover bg-top">
                  <Link href="/staff/myclass" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-orange-900 font-bold group
                      block flex cursor-pointer transition-all duration-200 hover:bg-orange-800 hover:text-white">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 items-center justify-center flex">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="7" ry="3" stroke="currentColor" className="text-orange-800 hover:text-white" stroke-width="2"></ellipse><path d="M5 13C5 13 5 15.3431 5 17C5 18.6569 8.13401 20 12 20C15.866 20
                                19 18.6569 19 17C19 16.173 19 13 19 13" stroke="currentColor" className="text-orange-080" stroke-width="2" stroke-linecap="square"></path><path d="M5 7C5 7 5 10.3431 5 12C5 13.6569
                                8.13401 15 12 15C15.866 15 19 13.6569 19 12C19 11.173 19 7 19 7" stroke="currentColor" className="text-orange-800 hover:text-white" stroke-width="2"></path></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span>My Attendance</span>
                  </Link>
                  
                  <Link href="/admin/timetable" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-orange-900  group
                      block flex cursor-pointer transition-all duration-200 hover:bg-orange-800 hover:text-white">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 h-5 w-5 items-center justify-center flex flex-shrink-0">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24
                                24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2
                                2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span>Timetable</span>
                    
                  </Link>
                </nav>
              </div>
              {/* <div>
                <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">Attendence</p>
                <nav className="mt-4 space-y-1 bg-cover bg-top">
                  <a href="/admin/staff" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-orange-900 font-bold group
                      block flex cursor-pointer transition-all duration-200 hover:bg-orange-800 hover:text-white">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 h-5 w-5 items-center justify-center flex flex-shrink-0">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24
                                24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0
                                002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0
                                012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span>Add Attendence</span>
                   
                  </a>
                 
                  <Link href="/admin/requests" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-orange-900 font-bold group
                      block flex cursor-pointer transition-all duration-200 hover:bg-orange-800 hover:text-white">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 h-5 w-5 items-center justify-center flex flex-shrink-0">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24
                                24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0
                                0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span>Requests</span>
                                        <span className="ml-auto items-center rounded-full bg-gray-500 px-2 py-0.5 text-xs font-semibold
                        text-white inline-flex border border-transparent uppercase">15</span>
                  </Link>
                </nav>
              </div> */}
              <div>
                <p className="px-4 text-xs font-semibold tracking-widest text-orange-800 uppercase">Marks</p>
                <nav className="mt-4 space-y-1 bg-cover bg-top">
                  <a href="/admin/staff" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-orange-900 font-bold group
                      block flex cursor-pointer transition-all duration-200 hover:bg-orange-800 hover:text-white">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 h-5 w-5 items-center justify-center flex flex-shrink-0">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24
                                24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0
                                002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0
                                012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span>View Marks</span>
                   
                  </a>
                 
                  
                </nav>
              </div>
              <div>
                <p className="px-4 text-xs font-semibold tracking-widest text-orange-800 uppercase">Assignments</p>
                <nav className="mt-4 space-y-1 bg-cover bg-top">
                  <a href="/admin/staff" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-orange-900 font-bold group
                      block flex cursor-pointer transition-all duration-200 hover:bg-orange-800 hover:text-white">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 h-5 w-5 items-center justify-center flex flex-shrink-0">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24
                                24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0
                                002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0
                                012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span> Assignments</span>
                   
                  </a>
                 
                  <Link href="/admin/requests" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-orange-900 font-bold group
                      block flex cursor-pointer transition-all duration-200 hover:bg-orange-800 hover:text-white">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 h-5 w-5 items-center justify-center flex flex-shrink-0">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24
                                24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0
                                0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span>Submissions</span>
                                        <span className="ml-auto items-center rounded-full bg-orange-500 px-2 py-0.5 text-xs font-semibold
                        text-white inline-flex border border-transparent uppercase">15</span>
                  </Link>
                </nav>
              </div>
            </div>
            
            <div className="mt-auto pb-4">
              <nav className="bg-cover bg-top">
                
                <button onClick={()=>{signOut({callbackUrl:'/'})}} className="mx-4 mt-1 items-center rounded-lg px-4 py-2.5 text-sm font-medium text-orange-900 font-bold
                    group block flex cursor-pointer transition-all duration-200 hover:bg-orange-800 hover:text-white">
                  <span className="items-center justify-center flex">
                    <span className="items-center justify-center flex">
                      <span className="mr-4 items-center justify-center flex">
                        <span className="items-center justify-center h-full w-full flex">
                          <svg className="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 18.9282C9.21615 19.6303 10.5957 20 12
                              20C13.4043 20 14.7838 19.6303 16 18.9282C17.2162 18.2261 18.2261 17.2162 18.9282
                              16C19.6303 14.7838 20 13.4043 20 12C20 10.5957 19.6303 9.21615 18.9282 8C18.2261 6.78385
                              17.2162 5.77394 16 5.0718C14.7838 4.36965 13.4043 4 12 4C10.5957 4 9.21615 4.36965 8
                              5.0718" stroke="currentColor" className="text-orange-800" stroke-width="2"></path><path d="M2
                              12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12
                              11.4477 11.5523 11 11 11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087
                              7.6247L5.21913 6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087
                              11.3753L1.21913 12.6247ZM2 13H11V11H2V13Z" fill="currentColor" className="text-orange-800"></path></svg>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className='font-bold'>Logout</span>
                </button>
                <div className="mt-4 px-2 py-3 border-t">
                  <div className="items-center justify-between flex">
                    <div className="mr-3 w-fit rounded-full relative">
                      {/* <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" className="object-cover btn- h-10 w-10 rounded-full"/> */}
                    </div>
                    <div className="ml-0 mr-auto">
                      <p className="text-base font-bold">{session?.user?.firstname}</p>
                      <p className="text-sm">{session?.user?.email}</p>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
  )
}

export default StudentSideNavbar