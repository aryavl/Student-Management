"use client"
import Content from "@/components/admin/Content";
import SideNavbar from "@/components/admin/SideNavbar";
import React, { useLayoutEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { addCurrentUser } from "@/redux/slices/userSlice";
import { Metadata } from "next";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import TeacherNavbar from "@/components/teacher/TeacherNavbar";
import TeacherSideNavbar from "@/components/teacher/TeacherSideNavbar";
import DashboardContent from "@/components/teacher/DashboardContent";


// export const metadata: Metadata = {
//   title: 'Admin Dashboard',
//   description: 'Student management admin dashboard',
// }
const StaffDashboard = () => {
  const router = useRouter()
  const { data: session ,status} = useSession();
  
  useLayoutEffect(() => {

    if (session) {
      // redirect('/admin/dashboard')
      router.replace('/staff/dashboard');
    } else{
      router.replace('/staff/login/form')
    }
  }, [session,router]);
 
  return (
    <>
   
    {status === 'loading' && (
 <>
 <div className="flex-col flex">
   <div className="bg-black text-emerald-100 flex overflow-x-hidden">
     <TeacherSideNavbar />
     <div className="mx-auto flex-col container font-bold text-2xl flex justify-center items-center max-w-7xl">
       <h1>Loading ...</h1>
     </div>
   </div>
 </div>
</>
    )}



    {status === 'authenticated' && (
session ? (
  session?.user?.type === 'teacher' ? (
    <>
      <div className="flex-col flex">
        <div className="bg-black text-emerald-100 flex overflow-x-hidden">
          <TeacherSideNavbar />
          <div className="mx-auto flex-col container flex max-w-7xl">
           <DashboardContent/>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  )
) : (
  <>
  
  </>
)
    )}
      
    </>
  );
  
};

export default StaffDashboard;
