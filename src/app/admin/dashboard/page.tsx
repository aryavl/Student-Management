"use client"
import Content from "@/components/admin/Content";
import SideNavbar from "@/components/admin/SideNavbar";
import React, { useLayoutEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { addCurrentUser } from "@/redux/slices/userSlice";
import { Metadata } from "next";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


// export const metadata: Metadata = {
//   title: 'Admin Dashboard',
//   description: 'Student management admin dashboard',
// }
const Dashboard = () => {
  const router = useRouter()
  const { data: session } = useSession();
  console.log("session on admin  navbar ");
  console.log(session?.user);
  console.log("end session on admin  navbar ");

  useLayoutEffect(() => {

    if (session) {
      // redirect('/admin/dashboard')
      router.replace('/admin/dashboard');
    } else{
      router.replace('/admin/login')
    }
  }, [session,router]);
 
  return (
    <>
      {session ? (
        session?.user?.type === 'admin' ? (
          <div>
            <div className="flex-col flex">
              <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
                <SideNavbar />
                <div className="mx-auto flex-col container flex max-w-7xl">
                  <Content />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
  
};

export default Dashboard;
