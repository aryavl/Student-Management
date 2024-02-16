"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import AddStudent from "./modals/AddStudent";
import { useSession } from "next-auth/react";

const MyclassContent = () => {
  const { data: session, status } = useSession();
  const [page, setPage] = useState(1);
  const [isStudentAdded, setIsStudentAdded] = useState(false);
  const id = session?.user?._id;
  useEffect(() => {
  
    if (isStudentAdded) {
      setTimeout(() => {
        setIsStudentAdded(false); // Reset the state after a few seconds
      }, 5000);
    }
  }, [isStudentAdded]);
  const { data, error } = useSWR(
    `/api/staff/student/formdata?id=${id}&page=${page}`,
    async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    }
  );
  console.log(data);
  const divisiondata = data?.division;
  const teacher = data?.teacher;
  const students = data?.students
  console.log(students);
  const itemsPerPage = 5; // You can adjust this based on your desired items per page

const startIndex = (page - 1) * itemsPerPage;
  if (!data) return <h1>Loading ...</h1>;
  return (
    <>
      <div className="flex flex-col justify-center items-center  sm:px-20 md:px-28 py-4  ">
        {divisiondata?.map((item:DivisionMap) => (
            <>
          <h1 className="text-center font-bold md:pt-1 md:pb-6 text-2xl">
            Class {item.division}
          </h1>
        <h3 className="text-center font-bold   text-lg">Stream : {item.streamdata.streamName} </h3>
        </>
        ))}
      </div>
      <div className="flex justify-center  item-center">

          <AddStudent id={id} setIsStudentAdded={setIsStudentAdded} totalStudents={0}/>

      </div>
      <div className="flex justify-center item-center mt-5">

      <p className="text-emerald-100 border-green-900 text-[16px] mb-4">
                {isStudentAdded && "Student added successfully!"}
              </p>
      </div>
      <div className="flex flex-col mx-2 md:mx-20 py-2  px-10 rounded-sm  ">
        
        <table className="min-w-full  items-center mt-10  border border-emerald-100">
  <thead className="bg-lime-500">
    <tr>
      <th className="py-2 px-4 border-b text-left">Sl. No</th>
      <th className="py-2 px-4 border-b text-left"> Name</th>
      <th className="py-2 px-4 border-b text-left">Email</th>
      <th className="py-2 px-4 border-b text-left">Admission No</th>
      <th className="py-2 px-4 border-b text-left">Class</th>
      <th className="py-2 px-4 border-b text-left">Branch</th>
      <th className="py-2 px-4 border-b text-left">Division</th>
    </tr>
  </thead>
  <tbody>
    {students && 
    students.map((item:StudentMap,index:number) => (
      <tr key={item._id}>
        <td className="py-2 px-4 border-b text-left">{startIndex + index + 1}</td>
        <td className="py-2 px-4 border-b text-left">{item.studentName}</td>
        <td className="py-2 px-4 border-b text-left">{item.email}</td>
        <td className="py-2 px-4 border-b text-left">{item.admissionNumber}</td>
        <td className="py-2 px-4 border-b text-left">{item.divisiondata.className}</td>
        <td className="py-2 px-4 border-b text-left">{item.streamdata.streamName}</td>
        <td className="py-2 px-4 border-b text-left">{item.divisiondata.division}</td>
      </tr>
    ))}
  </tbody>
</table>

        {/* {students.map(item=>(
            <>
            <h1>{item.studentName}</h1>
            </>
        ))} */}
        <div className="grid mx-2 md:mx-20 mt-5 gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 mb-8 "></div>
      </div>
      <div className="flex justify-center gap-4 mt-10">
          <button
            className="border bg-green-950 hover:bg-green-900 py-2 px-5 rounded-l "
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <button className='"border bg-green-950 py-2 px-4  rounded-l cursor-default' >{page}</button>
          <button
            className="border bg-green-950 hover:bg-green-900 py-2 px-8 rounded-l"
           
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Next
          </button>
        </div>
    </>
  );
};

export default MyclassContent;
