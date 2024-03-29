"use client";
import Footer from "@/components/landingpage/Footer";
import React, { useCallback, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import LandingNavbar from "@/components/landingpage/LandingNavbar";
import { isValidPassword } from "@/components/helpers/ValidationReg";
import useSWR from "swr";
import Image from "next/image";

const PasswordPage = () => {
  const [errorr, setError] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const studentEmail = searchParams.get("email");
  console.log(studentEmail);

 
  
  const { data: session } = useSession();

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    const password = e.target[0].value;
    const confirmPassword = e.target[1].value;

    const passVal = isValidPassword(password, confirmPassword);
    console.log(passVal);
    setError(passVal);

    if (!session) {
      try {
        const res = await fetch("/api/student/pass", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: studentEmail,
            password,
            message:'dd'
          }),
        });
        const data = await res.json();
        console.log(data);
        
        if (res.status === 404) {
          setError("Otp is Invalid");
        }
        if (res.status === 200) {
          setError("");
          router.push(`/student/login/form`);
        }
      } catch (error: any) {
        console.error("Register user error", error.message);
        setError("Error, try again");
      }
    } else {
      setError("");
      router.replace("/student/dashboard");
    }
  }, [router,session,studentEmail]);

  return (
    <>
      <div className="formContainerOutsideBg pt-24 pr-3 pb-24 pl-3">
        <div className="pt-0 pr-3 pb-0 pl-3 mr-auto ml-auto max-w-7xl sm:px-5 lg:px-12 flex justify-center items-center">
          <div className="bg-white rounded-xl sm:p-10 w-5/6  ">
            <div className="grid lg:gap-x-8 lg:grid-cols-12 lg:gap-y-8 grid-cols-1  ">
              <div className="hidden lg:col-span-5 lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded-2xl w-full h-full object-cover"
                  alt="img"
                  width={1548}
                  height={1000}
                  
                />
              </div>
              <div className="pt-8 pr-8 pb-8 pl-8 lg:col-span-7">
                <p
                  className="text-gray-900 text-left font-extrabold leading-snug tracking-tight mb-4
              md:text-4xl"
                >
                  Create Password
                </p>
                <div></div>
                <form onSubmit={handleSubmit}>
                  <div className="w-full  mr-auto mb-3 ml-auto mt-8">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="password"
                        placeholder="Password"
                        className=" pl-2 focus:ring-indigo-500
                    focus:border-indigo-500 sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md"
                      />
                    </div>
                  </div>
                  <div className="w-full  mr-auto mb-3 ml-auto mt-8">
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className=" pl-2 focus:ring-indigo-500
                    focus:border-indigo-500 sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md"
                      />
                    </div>
                  </div>
                  <p className="text-red-600 text=[16px] mb-4">
                    {errorr && errorr}
                  </p>
                  <button
                    type="submit"
                    className="hover:bg-gray-600 rounded-md text-xl pt-3 pr-3 pb-3 pl-3 bg-gray-800
                font-semibold text-white w-full text-center mt-5"
                  >
                    Submit
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

export default PasswordPage;
