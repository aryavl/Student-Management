"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

const DashboardContent = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    console.log(session);
    
  return (
    <>
    <div className="flex flex-col justify-center  items-center ">
        <h1 className="text-center font-bold md:pt-12 md:pb-6 text-3xl">Welcome {session?.user?.teacherName}</h1>
        <h1 className='text-center shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20 font-bold text-white bg-lime-500 flex items-center justify-center capitalize'>{session?.user?.teacherName}</h1>
        <div className='mt-5 flex flex-col justify-center item-center'>
            <h1 className='bg-green-900 text-emerald-100 rounded-lg px-10 py-2 text-center mb-3 '>Name: {session?.user?.teacherName}</h1>
            <h1 className='bg-green-900 text-emerald-100 rounded-lg px-10 py-2 text-center mb-3 '>Email: {session?.user?.email}</h1>
            <h1 className='bg-green-900 text-emerald-100 rounded-lg px-10 py-2 text-center mb-3 '>Stream: {session?.user?.stream}</h1>
            <h1 className='bg-green-900 text-emerald-100 rounded-lg px-10 py-2 text-center mb-3 '>Subject: {session?.user?.subject}</h1>
        </div>
            <button className='bg-green-900 text-white rounded-lg px-10
            
            
            
            py-2 text-center mb-3 mt-5 '>Update profile</button>
        </div>
    </>
  )
}

export default DashboardContent