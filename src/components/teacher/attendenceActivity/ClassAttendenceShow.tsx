"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import useSWR from 'swr';
import { GetAttendenceData } from './GetAttendenceData';

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
  const divisiondata = data?.division;
  
   const divisionId= divisiondata && divisiondata[0]?._id
   const streamId= divisiondata && divisiondata[0]?.stream

   
  
  return (
    <div>ClassAttendence
      <GetAttendenceData divisionId={divisionId} streamIds={streamId}/>
    </div>
  )
}

export default ClassAttendenceShow