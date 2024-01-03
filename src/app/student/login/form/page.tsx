"use client";
import Footer from "@/components/landingpage/Footer";
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { useFormStatus } from "react-dom";

const StudentLoginPage = () => {
  const [errorr, setError] = useState("");
const {pending} = useFormStatus()
  const router = useRouter();
  const { data: session } = useSession();
  const searchparams= useSearchParams()
  const staffEmail = searchparams.get('email')
  
  
  useLayoutEffect(() => {
    if (session) {
      router.replace("/student/dashboard");
    } else {
      router.replace('/student/login/form')
    }
  }, [session, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    if(!session){
    const res = await signIn("credentials",{
      email,
      password,
      role:'student',
      redirect:false
    })
    console.log(res);
    
    if(res?.error){
      // console.log(res);
      setError("Try Again")
      // router.push('/staf/login')
    }else if(res){
      if (session) {
        // console.log('Authenticated successfully: ====>', session);
        // Additional actions if needed
        router.replace('/student/dashboard');
      }if(!session){
        // console.log("No SESSION");
        router.replace('/')
      }
    }  
  }
    else{
      setError("")
      router.replace('/student/dashboard')
    }
   
    // e.preventDefault();
    // const email = e.target[0].value;
    // const password = e.target[1].value;
    // console.log(email,password);
    
    // if (!session) {
    //   try {
    //     const res = await fetch("/api/teacher/logindata", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email,
    //         password,
    //       }),
    //     });
    //     const data =await res.json()
    //     console.log(data);
        
    //     if (res.status === 404) {
    //       setError(res.statusText);
    //       // router.push("/staff/dashboard");

    //     }
    //     if (res.status === 200) {
    //       setError("");
    //       router.push("/staff/dashboard");
    //     }
    //   } catch (error: any) {
    //     console.error("Register user error", error.message);
    //     setError("Error, try again");
    //   }
      // const res = await signIn("credentials",{
      //   email,
      //   password,
      //   redirect:false
      // })

      // console.log(res);

      // if(res?.error){
      //   // console.log(res);
      //   setError("Try Again")
      //   // router.push('/staff/login')
      // }else if(res){
      //   if (session) {
      //     // console.log('Authenticated successfully: ====>', session);
      //     // Additional actions if needed
      //     router.replace('/staff/dashboard');
      //   }if(!session){
      //     // console.log("No SESSION");
      //     router.replace('/')
      //   }
      // }
    // } else {
    //   setError("");
    //   router.replace("/staff/dashboard");
    // }
  };
  // const handleGoogleSignIn = async () => {
  //   try {
  //     await signIn('google', { callbackUrl: '/staff/dashboard' });
  //     router.replace('/staff/dashboard');
  //   } catch (error) {
  //     console.error('Google sign-in error:', error);
  //   }
  // };

  return (
    <>
      <div className="formContainerOutsideBg pt-24 pr-3 pb-24 pl-3">
        <div className="pt-0 pr-3 pb-0 pl-3 mr-auto ml-auto max-w-7xl sm:px-5 lg:px-12 flex justify-center items-center">
          <div className="bg-white rounded-xl sm:p-10 w-5/6  ">
            <div className="grid lg:gap-x-8 lg:grid-cols-12 lg:gap-y-8 grid-cols-1  ">
              <div className="hidden lg:col-span-5 lg:block">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="pt-8 pr-8 pb-8 pl-8 lg:col-span-7">
                <p
                  className="text-gray-900 text-left font-extrabold leading-snug tracking-tight mb-4
              md:text-4xl"
                >
                  Staff Login Form
                </p>
                {/* <div>
            <div className="grid grid-cols-2 gap-4">
              <button className="rounded-md w-full pt-3 pr-0 pb-3 pl-0 inline-flex items-center justify-center bg-gray-800
                  text-white cursor-pointer hover:bg-gray-600" onClick={handleGoogleSignIn}>
                <p>
                  
                </p>
                <p className="text-xl">Google</p>
              </button>
             
            </div>

            <p className="text-sm text-center text-gray-600 pt-4 pr-0 pb-2 pl-0 border-b-2 border-gray-100">OR</p>
          </div> */}
                <form onSubmit={handleSubmit}>
                  <p className="text-red-600 text=[16px] mb-4">
                    {errorr && errorr}
                  </p>
                  {staffEmail ? (
                     <div className="w-full mt-3 mr-auto mb-3 ml-auto">
                     <label className="block text-sm font-medium text-gray-700">
                       Your Email
                     </label>
                     <div className="mt-1 mr-0 mb-0 ml-0">
                       <input
                         type="email"
                         placeholder="Email"
                         className=" pl-2 focus:ring-indigo-500
                     focus:border-indigo-500 sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md"
                      value={staffEmail!}
                      disabled
                      />
                     </div>
                   </div>
                  )
                :(
                    <div className="w-full mt-3 mr-auto mb-3 ml-auto">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="email"
                        placeholder="Email"
                        className=" pl-2 focus:ring-indigo-500
                    focus:border-indigo-500 sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md"
                     value={staffEmail!}
                     
                     />
                    </div>
                  </div>
                )
                }
                  
                  <div className="w-full mt-0 mr-auto mb-3 ml-auto">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Password
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="password"
                        placeholder="Password"
                        className="pl-2 focus:ring-indigo-500 focus:border-indigo-500
                    sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="hover:bg-gray-600 rounded-md text-xl pt-3 pr-3 pb-3 pl-3 bg-gray-800
                font-semibold text-white w-full text-center"
                disabled={pending}
                  >
                    {pending? 'Submitting...':"Submit"}
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer px-10 sm:px-20 md:px-28  py-5">
        <Footer />
      </div>
    </>
  );
};

export default StudentLoginPage;
