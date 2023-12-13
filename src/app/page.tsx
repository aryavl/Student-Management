"use client"
import Footer from '@/components/landingpage/Footer'
import HeroSection from '@/components/landingpage/HeroSection'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/landingpage/Pricing'
import Testimonials from '@/components/landingpage/Testimonials'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Dashboard from './admin/dashboard/page'

export default function Home() {
  const { data: session } = useSession();
  console.log("session on admin dashboard navbar ");
  console.log(session);
  console.log("end session on admin dashboard navbar ");
  
  
  return (
    <>
    {session?(

      <Dashboard/>
    ):(
      <main className=" ">
    
      <HeroSection/>
      <Pricing/>
      <Testimonials/>
      <div className='footer px-10 sm:px-20 md:px-28  py-5'>
      <Footer/>
      </div>
  </main>
    )}
    </>

  )
}
