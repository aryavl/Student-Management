
"use client"
import AddDivisionModal from '@/components/admin/AddDivisionModal';
import SideNavbar from '@/components/admin/SideNavbar';
import SingleStreamContent from '@/components/admin/SingleStreamContent';
import SingleStreamSubjects from '@/components/admin/SingleStreamSubjects';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import useSWR from 'swr';

const SubjectList = ({params}:ParamsType) => {
    const { data: session , status} = useSession();
    const router = useRouter()
    console.log(status);
    console.log({params}); 
    const {id} = params

  return (
    <>
      
        {status === 'unauthenticated' && (
        router.replace('/admin/login')
      )}
      {status === "loading" && (
        <>
              <div className="flex-col flex">
                <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden  ">
                  {/* <SideNavbar /> */}
                  <div className="mx-auto flex-col container flex justify-center items-center max-w-7xl h-full">
                      <h1>Loading ...</h1>
                  </div>
                </div>
              </div>
            </>
      )}

      {status === 'authenticated' && (
session ? (
  session?.user?.type === "admin" ? (
    <>
      <div className="flex-col flex">
        <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
          <SideNavbar />
          <div className="mx-auto flex-col container flex max-w-7xl">
            <SingleStreamSubjects id={id}/>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  )
) : (
router.replace('/admin/login')
)
      )}
    
      
      </>
  )
}

export default SubjectList