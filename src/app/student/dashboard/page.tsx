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
import StudentSideNavbar from "@/components/students/StudentSidenavbar";


// export const metadata: Metadata = {
//   title: 'Admin Dashboard',
//   description: 'Student management admin dashboard',
// }
const StudentDashboard = () => {
  const router = useRouter()
  const { data: session ,status} = useSession();
  console.log(session ,"<---- student session");
  
  useLayoutEffect(() => {

    if (session) {
      // redirect('/admin/dashboard')
      router.replace('/student/dashboard');
    } else{
      router.replace('/student/login/form')
    }
  }, [session,router]);
 
  return (
    <>
   
    {status === 'loading' && (
 <>
 <div className="flex-col flex">
   <div className="bg-white text-lime-500 flex overflow-x-hidden">
     <StudentSideNavbar/>
     <div className="mx-auto flex-col container font-bold text-2xl flex justify-center items-center max-w-7xl">
       <h1>Loading ...</h1>
     </div>
   </div>
 </div>
</>
    )}



    {status === 'authenticated' && (
session ? (
  session?.user?.type === 'student' ? (
    <>
      <div className="flex-col flex">
        <div className="bg-white text-blue-900 flex overflow-x-hidden">
          <StudentSideNavbar />
          <div className="mx-auto flex-col container flex max-w-7xl">
           Dashboard
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

export default StudentDashboard;
