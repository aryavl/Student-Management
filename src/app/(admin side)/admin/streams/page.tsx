"use client";
import GoToLogin from "@/components/admin/GoToLogin";
import SideNavbar from "@/components/admin/SideNavbar";
import StreamContent from "@/components/admin/StreamContent";
import AddStream from "@/components/admin/AddStream";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const StreamsList = () => {
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
                    
                    <StreamContent/>
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

export default StreamsList;
