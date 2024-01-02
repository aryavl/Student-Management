"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import AdminNavbar from './admin/AdminNavbar';
import LandingNavbar from './landingpage/LandingNavbar';
import { useRouter } from 'next/navigation';
import TeacherNavbar from './teacher/TeacherNavbar';
import StudentNavbar from './students/StudentNavbar';
const Navbar = () => {
  const { data: session,status } = useSession();
  console.log(status);
  const router = useRouter()

  return (
    <>
    {status === "loading" && (
    // <h1>Loading...</h1>"
    ""
    )}
    {status === "unauthenticated" && (
       session?(
        session?.user?.type === 'admin' ? (
        
          <AdminNavbar />
        ) : (
          <>
  
          </>
        )
      ):(
        <LandingNavbar/>
      )
     
    )}
    {status === 'authenticated' && (
      session?(
        session?.user?.type === 'admin' ? (
        // logic for admin navbar
          <AdminNavbar />
        ) : session?.user?.type === 'teacher' ?(
          <TeacherNavbar/>
        ):(
          // logic for studen navbar
          session?.user?.type === 'student' ?(
            <>
            <StudentNavbar/>
            </>
          ):(
          <>
          
          </>
          ))
      ):(
        <LandingNavbar/>
      )
     
    )}
      
    </>
  );
  
};

export default Navbar;
