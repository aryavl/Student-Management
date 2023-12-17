"use client"
import GoToLogin from '@/components/admin/GoToLogin';
import ScienceBatchContent from '@/components/admin/ScienceBatch';
import SideNavbar from '@/components/admin/SideNavbar';
import { useSession } from 'next-auth/react';
import { notFound, useRouter } from 'next/navigation';
import React from 'react'




const ScienceBatch = () => {
    
    
    const { data: session } = useSession();

    return (
      <>
        {session ? (
          session?.user?.type === "admin" ? (
            <div>
              <div className="flex-col flex">
                <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
                  <SideNavbar />
                  <div className="mx-auto flex-col container flex max-w-7xl">
                    <ScienceBatchContent/>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        ) : (
          <GoToLogin/>
        )}
      </>
    );
}

export default ScienceBatch