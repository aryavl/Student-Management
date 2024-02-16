"use client"
import { useEffect, useState } from "react";
import useSWR from "swr";

export const GetAttendenceData: React.FC<GetAttendenceDAtaProp> = ({ divisionId,streamIds}) => {
    console.log(divisionId,streamIds);
    const [date,setDate]=useState<string[]|unknown[]>([]);

      const {data,error} = useSWR(`/api/staff/attendence/class-attendence?divisionId=${divisionId}&streamId=${streamIds}`,

      async(url)=>{
        const response = await fetch(url)
        const result = await response.json()
        return result 
      })
    //   console.log(data);
      const allAttendence = data?.attendence
      console.log(allAttendence);
      useEffect(() => {
        if (allAttendence) {
          const uniqueDates = Array.from(new Set(allAttendence.map((item:AttendenceMap) => item.date)));
          setDate(uniqueDates);
        }
        
      }, [allAttendence]);
    //   console.log(date);
      
      const dataFetch=async(date:string)=>{
        const response= await fetch(`/api/staff/attendence/class-attendence?divisionId=${divisionId}&streamId=${streamIds}&date=${date}`)
        const result = await response.json()
        console.log(result);
        
      }
      return(
        <>
        {/* <div className="grid grid-flow-col">
            <div>
                <h1>Student Name</h1>
            </div>
            {date? date.map((item:string)=>(
                <div key={item}>
                        <h1>{item}</h1>
                    </div>
            )):(<h1>Loading...</h1>)}
        </div> */}
        {/* {
        allAttendence ?
        allAttendence.map((item:AttendenceMap)=>(
            <>
            <div className="grid grid-flow-col">
                
                <div>
                    
                    <h1>{item.studentdata.studentName}</h1>
                </div>
                <div>
                    <h1>{item.date}</h1>
                </div>
            </div>
            </>
        )):(<h1>Loading...</h1>)} */}
        </>
      )
   }