"use client";
import GoToLogin from "@/components/admin/GoToLogin";
import SideNavbar from "@/components/admin/SideNavbar";
import TeacherList from "@/components/admin/TeacherList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const StaffList = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  // console.log(status);

  return (
    <>
      {status === "loading" && <>
      <>
            <div className="flex-col flex">
              <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
                <SideNavbar />
                <div className="mx-auto flex-col container flex max-w-7xl">
                  <h1>Loading...</h1>
                </div>
              </div>
            </div>
          </>
        </>}
      {/* {status === "unauthenticated" && router.replace('/admin/login')} */}
      {status === "authenticated" && (
        session?(
          session?.user?.type === 'admin' ? (
            <>
              <div className="flex-col flex">
                <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
                  <SideNavbar />
                  <div className="mx-auto flex-col container flex max-w-7xl">
                    <TeacherList/>
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
};

export default StaffList;
