"use client" 
import GoToLogin from '@/components/admin/GoToLogin';
import SideNavbar from '@/components/admin/SideNavbar';
import TeacherList from '@/components/admin/TeacherList';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

const StaffList = () => {
  const router = useRouter()
  const { data: session } = useSession();



  return (
    <>
      {session ? (
        session?.user?.type === 'admin' ? (
          <div>
            <div className="flex-col flex">
              <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
                <SideNavbar />
                <div className="mx-auto flex-col container flex max-w-7xl">
                  <TeacherList/>
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

export default StaffList