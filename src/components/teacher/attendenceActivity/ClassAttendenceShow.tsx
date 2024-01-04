"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import useSWR from 'swr';

const ClassAttendenceShow = () => {
  const { data: session, status } = useSession();
  const [page, setPage] = useState(1);
  const id = session?.user?._id;

  const { data, error } = useSWR(
    `/api/staff/student/formdata?id=${id}&page=${page}`,
    async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    }
  );
  // console.log(data);
  const divisiondata = data?.division;
  console.log(divisiondata);
   const divisionId= divisiondata && divisiondata[0]?._id
   console.log(divisionId);
   
   const GetAttendenceData: React.FC<GetAttendenceDAtaProp> = ({ divId}) => {
    console.log(divId);
    
      const {data,error} = useSWR(`/api/staff/attendence/class-attendence?id=${divId}`,
      
      async(url)=>{
        const response = await fetch(url)
        const result = await response.json()
        return result 
      })
      console.log(data);
      
      return(
        <h1>attendence</h1>
      )
   }
  
  return (
    <div>ClassAttendence
      <GetAttendenceData divId={divisionId}/>
    </div>
  )
}

export default ClassAttendenceShow