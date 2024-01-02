"use client"

import MyclassContent from "@/components/teacher/MyclassContent";
import TeacherSideNavbar from "@/components/teacher/TeacherSideNavbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MyClass = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    // console.log(status);
  
    return (
      <>
        {status === "loading" && <>
        <>
              <div className="flex-col flex">
                <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
                  <TeacherSideNavbar />
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
            session?.user?.type === 'teacher' ? (
              <>
                <div className="flex-col flex">
                  <div className="bg-white text-green-500 flex overflow-x-hidden">
                    <TeacherSideNavbar />
                    <div className="mx-auto flex-col container flex max-w-7xl">
                      <MyclassContent />
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
  
  export default MyClass;
  