"use client"
import SideNavbar from '@/components/admin/SideNavbar';
import SubjectContent from '@/components/admin/SubjectContent';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

const Subjects = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
  
    return (
      <>
        {status === "loading" && (
          <>
            <div className="flex-col flex">
              <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
                <SideNavbar />
                <div className="mx-auto flex-col container flex justify-center items-center max-w-7xl">
                  <h1>Loading ...</h1>
                </div>
              </div>
            </div>
          </>
        )}
        {status === "authenticated" && (
          session?(
            session?.user?.type === 'admin' ? (
              <>
                <div className="flex-col flex">
                  <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
                    <SideNavbar />
                    <div className="mx-auto flex-col container flex max-w-7xl">
                      
                      <SubjectContent/>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )
          ):(
            router.replace('/admin/login')
          )
          
        )}
        
      </>
    );
          }
export default Subjects