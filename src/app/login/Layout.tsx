import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/landingpage/Footer'
import Pricing from '@/components/landingpage/Pricing'
import Testimonials from '@/components/landingpage/Testimonials'
import HeroSection from '@/components/landingpage/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login',
  description: 'Student management login',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main '>
        
            {children}
        </div>
        </body>
    </html>
  )
}
