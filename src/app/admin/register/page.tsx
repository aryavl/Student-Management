"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/landingpage/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import Head from 'next/head';


const Register = () => {
  const [error,setError] = useState("")
  const router = useRouter()
  const isValidEmail = (email: string) => {
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const phone = e.target[3].value;
    const password = e.target[4].value;
    const confirmPassword = e.target[5].value;
    //  (firstname, lastname, email, phone, password, confirmPassword);

    if (!isValidEmail(email)) {
      setError("Email is Invalid")
      return;

    }
    if(!password || password.length <8){
      setError("Password is Invalid")
      return
    }

    if(password !== confirmPassword){
      setError("Password Mismatch")
      return
    }
    const data = {
      firstname,
      lastname,
      email,
      phone,
      password,
    };
    
    try {
    //  axios.post('/api/register', JSON.stringify(data), {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
      const res= await fetch('/api/register',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          firstname,
          lastname,
          email,
          phone,
          password
        })
      })
      if(res.status === 400){
        setError("This email is already registered")
      }
      if(res.status === 200){
        setError("")
        router.push('/login')
      }
    } catch (error:any) {
      console.error("register ui error",error.message);
      setError("Error, try again")
    }
  };

  return (
    <>
  <Head>
        <title>Schuler Admin Register</title>
        <meta name="description" content="Schuler admin register" />
       
      </Head>
      <div className="formContainerOutsideBg pt-24 pr-3 pb-24 pl-3">
        <div className="pt-0 pr-3 pb-0 pl-3 mr-auto ml-auto max-w-7xl sm:px-5 lg:px-12 flex justify-center items-center">
          <div className=" backdrop-blur-lg bg-clip-padding backdrop-filter bg-white rounded-xl sm:p-10 w-5/6 border-gray-600  relative shadow-lg">
            <div className="grid lg:gap-x-8 lg:grid-cols-12 lg:gap-y-8 grid-cols-1  ">
              <div className="hidden lg:col-span-5 lg:block">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="pt-8 pr-8 pb-8 pl-8 lg:col-span-7">
                <p
                  className="text-gray-900 text-center font-extrabold leading-snug tracking-tight mb-4
              md:text-4xl"
                >
                  Register Admin
                </p>
                <div>
                 

                </div>

                <form onSubmit={handleSubmit}>
                  <div className="w-full mt-3 mr-auto mb-3 ml-auto  py-1">
                    <p className="text-red-600 text=[16px] mb-4">{error && error}</p>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="focus:ring-indigo-500
                    focus:border-indigo-500 sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md pl-2"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-3 mr-auto mb-3 ml-auto  py-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="focus:ring-indigo-500
                    focus:border-indigo-500 sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md pl-2"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-3 mr-auto mb-3 ml-auto  py-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="email"
                        placeholder="Email"
                        className="focus:ring-indigo-500
                    focus:border-indigo-500 sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md pl-2"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-3 mr-auto mb-3 ml-auto  py-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        className="focus:ring-indigo-500
                    focus:border-indigo-500 sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md pl-2"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-0 mr-auto mb-3 ml-auto  py-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Password
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="password"
                        placeholder="Password"
                        className="focus:ring-indigo-500 focus:border-indigo-500
                    sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md pl-2"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-0 mr-auto mb-3 ml-auto  py-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Password
                    </label>
                    <div className="mt-1 mr-0 mb-0 ml-0">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="focus:ring-indigo-500 focus:border-indigo-500
                    sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md pl-2"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="hover:bg-gray-600 rounded-md text-xl pt-3 pr-3 pb-3 pl-3 bg-gray-800
                font-semibold text-white w-full text-center"
                  >
                    Submit
                  </button>
                  <div
                    className="flex items-center justify-start border-t-2 border-gray-100 mt-6 mr-0 mb-0 ml-0 pt-6 pr-0 pb-0
                pl-0"
                  >
                    <p className="text-sm text-gray-800">
                      Already registered?{" "}
                    </p>
                    <Link
                      href="/admin/login"
                      className="text-sm text-blue-500 mt-0 mr-0 mb-0 ml-2"
                    >
                      Login
                    </Link>
                  </div>
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

export default Register;
