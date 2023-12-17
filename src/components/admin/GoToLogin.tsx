import Link from 'next/link'
import React from 'react'

const GoToLogin = () => {
  return (
    <div className="formContainerOutsideBg pt-24 pr-3 pb-24 pl-3 h-screen">
    <div  className="pt-0 pr-3 pb-0 pl-3 mr-auto ml-auto max-w-7xl sm:px-5 lg:px-12 flex justify-center items-center" >
      <div className="bg-white rounded-xl sm:p-5 w-1/2 h-72 md:h-96 flex flex-col justify-center items-center">
        <h1 className='text-2xl font-bold text-teal-950'>Session Expired!</h1>
        <h2 className='text-md text-gray-600'>Please Login Again</h2>
        <Link href='/admin/login' className='bg-gray-900 text-gray-100 py-2 mt-5 px-8 rounded font-bold'>Login</Link>
        </div>
        </div>
        </div>
  )
}

export default GoToLogin