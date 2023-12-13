import Footer from '@/components/landingpage/Footer'
import Login from '@/components/landingpage/Login'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
     
    <div
    className="  mr-auto ml-auto flex flex-col items-center relative lg:flex-row h-full lg:justify-between lg:gap-16"
  >
    <Login/>
        
    </div>
    <div className='footer px-10 sm:px-20 md:px-28  py-5'>
        <Footer/>
    </div>
    </>
  )
}

export default page