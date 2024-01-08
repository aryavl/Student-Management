"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import { useSession } from "next-auth/react";

const TakeAttendence = () => {
  const { data: session } = useSession<SessionType>();
  const [page, setPage] = useState(1);
  const [errorr, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isAnyRadioButtonChecked, setIsAnyRadioButtonChecked] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [checkedStatus, setChekedStatus] = useState<{
    [key: string]: boolean;
  }>({});

  const [storeAttendenceData, setStoreAttendenceData] = useState<StudentData[]>(
    []
  );
  const id = session?.user?._id || '';
  const streamId = session?.user?.stream;
  console.log(streamId);

  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear().toString();

    const formattedDate = `${day}/${month}/${year}`;

    setCurrentDate(formattedDate);

  }, []);
  

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
  const students = data?.students;
  const divisionId = divisiondata && divisiondata[0]._id;
  // console.log(students);
  const itemsPerPage = 10; // You can adjust this based on your desired items per page

  const handleAttendanceChange = async (id: string, isPresent: boolean) => {
    setIsAnyRadioButtonChecked(!isAnyRadioButtonChecked);
    setChekedStatus((prevAttendance) => ({
      ...prevAttendance,
      [id]: isPresent,
    }));
    const rowElement = document.getElementById(`row_${id}`);

    if (rowElement) {
      rowElement.style.backgroundColor = isPresent ? "#025409" : "#850310";
      rowElement.style.color = "#FFFFFF";
    }
    setStoreAttendenceData((prevData) => {
      const isStudentIdPresent = prevData.some((item) => item.studentId === id);

      if (isStudentIdPresent) {
        return prevData.map((item) =>
          item.studentId === id ? { ...item, isPresent } : item
        );
      } else {
        return [
          ...prevData,
          {
            studentId: id,
            streamId,
            divisionId,
            isPresent,
          },
        ];
      }
    });
  };
  
  const handleSaveAttendence = async() => {
    console.log(storeAttendenceData);
    if(storeAttendenceData.length!==0){

      const data=await sendData(storeAttendenceData); 
      if(data.status === 400){
  
        setError(data.statusText)
      }
      if(data.status === 200){
        setError('')
        setSuccess(data.statusText)
      }
    }

  };
  const sendData = async (storeAttendenceData:StudentData[]) => {
    const response = await fetch("/api/staff/attendence/take-attendence", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          attendenceData: storeAttendenceData,
          currentDate
        }
      ),
    });
    const result = await response.json();
    return response;
  };
  const startIndex = (page - 1) * itemsPerPage;
  if (!data) return <h1>Loading ...</h1>;
  return (
    <>
      <div className="flex flex-col justify-center items-center  sm:px-20 md:px-28 py-4  ">
        {divisiondata?.map((item: DivisionMap) => (
          <>
            <h1 className="text-center font-bold md:pt-1 md:pb-2 text-2xl">
              Class {item.division}
            </h1>
            <h3 className="text-center font-bold   text-lg">
              Stream : {item.streamdata.streamName}
            </h3>
            <h3 className="text-center font-bold mt-2   text-lg">
              Today : {currentDate}
            </h3>
            <p className="text-red-600 text-xl mt-2 capitalize">
              {errorr && errorr}
            </p>
            <p className="text-green-600 text-xl mt-2 capitalize">
              {success && success}
            </p>
          </>
        ))}
      </div>

      <div className="flex flex-col mx-2 md:mx-20   px-10 rounded-sm  ">
        <table className="min-w-full  items-center  border  ">
          <thead className="bg-lime-500 border-none">
            <tr>
              <th className="py-2 px-4 border-b">Sl. No</th>
              <th className="py-2 px-4 border-b"> Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Admission No</th>
              <th className="py-2 px-4 border-b">Class</th>
              <th className="py-2 px-4 border-b">Branch</th>
              <th className="py-2 px-4 border-b">Division</th>
              <th className="py-2 px-4 border-b">Attendence</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map((item: StudentMap, index: number) => (
                <tr key={item._id} id={`row_${item._id}`}>
                  <td className={`hi ${item._id}`} hidden>
                    {isAnyRadioButtonChecked && "unchecked"}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {startIndex + index + 1}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.studentName}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.email}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.admissionNumber}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.divisiondata.className}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.streamdata.streamName}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.divisiondata.division}
                  </td>
                  <td className={`py-2 px-4 border-b text-center `}>
                    <input
                      type="radio"
                      id={`present_${item._id}`}
                      name={`attendance_${index}`}
                      className={`w-7 h-7 cursor-pointer `}
                      value={item._id}
                      disabled={success !== ""}
                      checked={checkedStatus[item._id] === true}
                      onChange={() => {
                        handleAttendanceChange(item._id, true);
                      }}
                    />
                    <input
                      type="radio"
                      id={`absent_${item._id}`}
                      name={`attendance_${index}`}
                      className="w-7 h-7 ml-2 cursor-pointer"
                      value={item._id}
                      disabled={success !== ""}
                      checked={checkedStatus[item._id] === false}
                      onChange={() => {
                        handleAttendanceChange(item._id, false);
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex justify-center item-center">
          <button
            className="mt-10 bg-green-950 text-center text-white hover:bg-green-900 py-2 px-5 rounded-md 
        
        "
            onClick={handleSaveAttendence}
          >
            Save attendence
          </button>
        </div>
        <div className="grid mx-2 md:mx-20 mt-5 gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 mb-8 "></div>
      </div>
      <div className="flex justify-center gap-4 mt-10 mb-10">
        <button
          className="border bg-green-950 text-white hover:bg-green-900 py-2 px-5 rounded-md "
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button className='"border bg-green-950 py-2 px-4 text-white rounded-md cursor-default'>
          {page}
        </button>
        <button
          className="border bg-green-950 text-white hover:bg-green-900 py-2 px-8 rounded-md"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TakeAttendence;
