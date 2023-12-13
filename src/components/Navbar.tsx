"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import AdminNavbar from './admin/AdminNavbar';
import LandingNavbar from './landingpage/LandingNavbar';
const Navbar = () => {
  const { data: session } = useSession();
  console.log("session on admin dashboard navbar ");
  console.log(session);
  console.log("end session on admin dashboard navbar ");
  
  
  
  

  return (
    <>
      {session ? (
        <>
          {session?.user?.type === 'admin' ? (
            // admin navbar
            <AdminNavbar />
          ) : (
            <></>
          )}
        </>
      ) : (
        <LandingNavbar />
      )}
    </>
  );
  
};

export default Navbar;
