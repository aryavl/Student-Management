import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './admin.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Student management admin dashboard',
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