"use client"
import React from 'react'
import {signOut, useSession} from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


const SideNavbar = () => {
  const { data: session } = useSession();
  console.log("session on admin side navbar ");
  console.log(session?.user);
  console.log("end session on admin side navbar ");
  return (
    <div className="bg-gray-900 text-gray-200 md:w-64 md:flex-col lg:flex hidden border-r border-gray-800">
        <div className="h-full flex-col pt-5 flex overflow-y-auto">
          <div className="h-full flex-col flex">
            <div className="px-4 space-y-4">
              <nav className="space-y-1 bg-cover bg-top">
                <Link href="editor#" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 group
                    block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
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
                <a href="editor#" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 group
                    block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
                  <span className="items-center justify-center flex">
                    <span className="items-center justify-center flex">
                      <span className="mr-4 items-center justify-center flex">
                        <span className="items-center justify-center h-full w-full flex">
                          <svg className="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728
                              14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7
                              17" stroke="currentColor" className="text-gray-300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" className="text-gray-300" stroke-width="2"></rect></svg>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span>Statics</span>
                </a>
              
              </nav>
              <div>
                <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">Class</p>
                <nav className="mt-4 space-y-1 bg-cover bg-top">
                  <a href="editor#" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 group
                      block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 items-center justify-center flex">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="7" ry="3" stroke="currentColor" className="text-gray-300" stroke-width="2"></ellipse><path d="M5 13C5 13 5 15.3431 5 17C5 18.6569 8.13401 20 12 20C15.866 20
                                19 18.6569 19 17C19 16.173 19 13 19 13" stroke="currentColor" className="text-gray-300" stroke-width="2" stroke-linecap="square"></path><path d="M5 7C5 7 5 10.3431 5 12C5 13.6569
                                8.13401 15 12 15C15.866 15 19 13.6569 19 12C19 11.173 19 7 19 7" stroke="currentColor" className="text-gray-300" stroke-width="2"></path></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span>Streams</span>
                  </a>
                  {/* <a href="editor#" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 group
                      block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 items-center justify-center flex">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.90112 11.8461C7.55156 9.56955 9.63235 8
                                12 8V8C14.3676 8 16.4484 9.56954 17.0989 11.8461L17.6571 13.7998C17.8843 14.5951 18.2336
                                15.3504 18.6924 16.0386L18.8012 16.2018C18.9408 16.4111 19.0105 16.5158 19.045
                                16.5932C19.3105 17.1894 18.943 17.8759 18.2997 17.9857C18.2162 18 18.0904 18 17.8388
                                18H6.16116C5.90958 18 5.78379 18 5.70027 17.9857C5.05697 17.8759 4.68952 17.1894 4.955
                                16.5932C4.98947 16.5158 5.05924 16.4111 5.19879 16.2018L5.30758 16.0386C5.76642 15.3504
                                6.11569 14.5951 6.34293 13.7998L6.90112 11.8461Z" fill="currentColor" className="text-gray-300"></path><path d="M11 9L12 3" stroke="currentColor" className="text-gray-300" stroke-width="2" stroke-linecap="round"></path><path d="M13 9L12 3" stroke="currentColor" className="text-gray-300" stroke-width="2" stroke-linecap="round"></path><path d="M12.5 21H11.5" stroke="currentColor" className="text-gray-300" stroke-width="2" stroke-linecap="round"></path></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span>Alerts</span>
                  </a> */}
                  <a href="editor#" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 group
                      block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
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
                    {/* <span className="ml-auto items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold
                        text-indigo-600 inline-flex border border-indigo-300 uppercase">New</span> */}
                  </a>
                </nav>
              </div>
              <div>
                <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">Teachers</p>
                <nav className="mt-4 space-y-1 bg-cover bg-top">
                  <a href="editor#" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 group
                      block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
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
                    <span>Teacher</span>
                    {/* <span className="ml-auto items-center rounded-full bg-gray-500 px-2 py-0.5 text-xs font-semibold
                        text-white inline-flex border border-transparent uppercase">15</span> */}
                  </a>
                  {/* <a href="editor#" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 group
                      block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
                    <span className="items-center justify-center flex">
                      <span className="items-center justify-center flex">
                        <span className="mr-4 items-center justify-center flex">
                          <span className="items-center justify-center h-full w-full flex">
                            <svg className="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" className="text-gray-300" stroke-width="2" stroke-linecap="round"></circle><path d="M7.88124
                                15.7559C8.37391 16.1826 9.02309 16.4909 9.72265 16.6928C10.4301 16.897 11.2142 17 12
                                17C12.7858 17 13.5699 16.897 14.2774 16.6928C14.9769 16.4909 15.6261 16.1826 16.1188
                                15.7559" stroke="currentColor" className="text-gray-300" stroke-width="2" stroke-linecap="round"></path><circle cx="9" cy="10" r="1.25" fill="currentColor" stroke="currentColor" className="text-gray-300" stroke-width="0.5" stroke-linecap="round"></circle><circle cx="15" cy="10" r="1.25" fill="currentColor" stroke="currentColor" className="text-gray-300" stroke-width="0.5" stroke-linecap="round"></circle></svg>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span>Agents</span>
                  </a> */}
                  <a href="editor#" className="items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 group
                      block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
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
                  </a>
                </nav>
              </div>
            </div>
            <div className="mt-auto pb-4">
              <nav className="bg-cover bg-top">
                {/* <a href="editor#" className="mx-4 items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200
                    group block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
                  <span className="items-center justify-center flex">
                    <span className="items-center justify-center flex">
                      <span className="mr-4 h-5 w-5 items-center justify-center flex flex-shrink-0">
                        <span className="items-center justify-center h-full w-full flex">
                          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0
                              002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756
                              2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0
                              00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0
                              00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0
                              00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0
                              001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016
                              0z"></path></svg>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span>Settings</span>
                </a> */}
                <button onClick={()=>{signOut({callbackUrl:'/'})}} className="mx-4 mt-1 items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200
                    group block flex cursor-pointer transition-all duration-200 hover:bg-gray-800">
                  <span className="items-center justify-center flex">
                    <span className="items-center justify-center flex">
                      <span className="mr-4 items-center justify-center flex">
                        <span className="items-center justify-center h-full w-full flex">
                          <svg className="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 18.9282C9.21615 19.6303 10.5957 20 12
                              20C13.4043 20 14.7838 19.6303 16 18.9282C17.2162 18.2261 18.2261 17.2162 18.9282
                              16C19.6303 14.7838 20 13.4043 20 12C20 10.5957 19.6303 9.21615 18.9282 8C18.2261 6.78385
                              17.2162 5.77394 16 5.0718C14.7838 4.36965 13.4043 4 12 4C10.5957 4 9.21615 4.36965 8
                              5.0718" stroke="currentColor" className="text-gray-300" stroke-width="2"></path><path d="M2
                              12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12
                              11.4477 11.5523 11 11 11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087
                              7.6247L5.21913 6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087
                              11.3753L1.21913 12.6247ZM2 13H11V11H2V13Z" fill="currentColor" className="text-gray-300"></path></svg>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span>Logout</span>
                </button>
                <div className="mt-4 px-2 py-3 border-t">
                  <div className="items-center justify-between flex">
                    <div className="mr-3 w-fit rounded-full relative">
                      <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" className="object-cover btn- h-10 w-10 rounded-full"/>
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

export default SideNavbar