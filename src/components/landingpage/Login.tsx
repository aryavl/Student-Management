"use client"
import React, { useEffect } from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUser,faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Login = () => {
  const router = useRouter()
  const { data: session } = useSession();
  console.log("session on admin  navbar ");
  console.log(session?.user);
  console.log("end session on admin  navbar ");
  useEffect(() => {

    if (session) {
      router.replace('/admin/dashboard');
    } 
  }, [session,router]);

  return (
    <>
     <div className="flex flex-col justify-center items-center  sm:px-20 md:px-28 py-5 pb-20 m-auto">
  <h1 className="text-center font-bold md:pt-12 md:pb-6">LOGIN</h1>
  <div className="flex justify-center items-center sm:px-20 md:px-28 py-5 gap-5 flex-col md:flex-row m-auto">
    <Link href="/admin/login">
    <div className=" h-40 w-60 flex justify-center items-center flex-col gap-3 shadow-lg pr-6 pl-6 mt-6 transition duration-200 rounded glassBox">
    <FontAwesomeIcon icon={faChalkboardTeacher} className="iconColor" />

      <h1 className="font-bold tracking-wider">Admin Login</h1>
    </div>
    </Link>
    <Link href="/staff/login">
    <div className="h-40 w-60 flex justify-center items-center flex-col gap-3 shadow-lg pr-6 pl-6 mt-6 transition duration-200 rounded glassBox">
    <FontAwesomeIcon icon={faUser} className="iconColor" />
      <h1 className="font-bold tracking-wider">Staff Login</h1>
    </div>
    </Link>
    <Link href="/student/login">
    <div className="h-40 w-60 flex justify-center items-center flex-col gap-3 shadow-lg pr-6 pl-6 mt-6 transition duration-200 rounded glassBox">
    <FontAwesomeIcon icon={faUserGraduate} className="iconColor"/>
      <h1 className="font-bold tracking-wider">Student Login</h1>
    </div>
    </Link>
  </div>
</div>

    </>
  );
};

export default Login;
