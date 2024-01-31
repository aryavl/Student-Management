"use client";
import React, { useState } from "react";
import ModalFormForAddTeacher from "./ModalFormForAddTeacher";
import useSWR, { mutate } from "swr";
import Image from "next/image";

const TeacherList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("")
  
  let subjects = [];

  const { data, error } = useSWR(
    `http://localhost:3000/api/admin/teacher/pagination?page=${page}`,
    async (url) => {
      const response = await fetch(url);

      console.log(response.status);

      const result = await response.json();

      return result;
    }
  );

  const handleChange = async (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
    setPage(1);
    const res = await fetch(
      `http://localhost:3000/api/admin/teacher/pagination?page=${page}&query=${query}`
    );
    const data = await res.json();
    console.log(data);

    subjects = data.subjects || [];
    setFilteredData(data.teachers || []);
  };
const handleFilter = async(filter:string)=>{
  console.log(filter);
  setFilter(filter)
  setPage(1);
  const res = await fetch(
    `http://localhost:3000/api/admin/teacher/pagination?page=${page}&filter=${filter}`
  );
  const data = await res.json();
  console.log(data);
  setFilteredData(data.teachers || []);

}
const teachers =
searchQuery || filter // If there is a search query or filter
  ? filteredData // Display filtered data
  : data?.teachers; // Display paginated data

  let streams = data?.streams
  

  console.log(data, teachers);

  if (error) return <p>Error fetching data</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <>
      <div
        className="w-full  pt-16 pr-4 pb-16 pl-4 mt-0 mr-auto mb-0 ml-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8
    lg:py-20"
      >
        <div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="mb-5">
            <ModalFormForAddTeacher />
          </div>
          <div
            className="mt-0 mr-auto mb-6 ml-auto text-2xl font-bold leading-none text-gray-900 max-w-lg font-sans
        tracking-tight sm:text-4xl md:mx-auto"
          >
            <div className="inline-block relative">
              <p
                className="text-2xl font-bold leading-none text-white relative inline max-w-lg font-sans tracking-tight
            sm:text-4xl md:mx-auto"
              >
                Welcome{" "}
              </p>
            </div>

            <p
              className="text-2xl font-bold leading-none text-white inline max-w-lg font-sans tracking-tight sm:text-4xl
          md:mx-auto"
            >
              {" "}
              our talented team of professionals
            </p>
          </div>
          <div className=" items-center space-x-2">
            <select className="border py-1.5 px-14 rounded-sm text-gray-950" onChange={(e)=>handleFilter(e.target.value)}>
              <option value="">Filter by</option>
              
              {streams.map((item: MapStream) => (
                <option value={item._id} key={item._id}>
                  {item.streamName}
                </option>
              ))}
            </select>
            <input
              className="border py-1.5 px-14 rounded-sm text-gray-950"
              type="text"
              placeholder="Search Teacher..."
              onChange={handleChange}
              value={searchQuery}
            />
          </div>
        </div>
        <div
          className="grid mt-0 mr-auto mb-0 ml-auto gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2
      lg:grid-cols-3"
        >
          {teachers?.length > 0 ? (
            teachers.map((item: MapItem) => (
              <div className="flex" key={item._id}>
                {item.image ? (
                  <Image
                    src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
                    alt="avatar"
                    width={20}
                    height={20}
                    
                  />
                ) : (
                  <h1 className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20 bg-slate-900 flex items-center justify-center capitalize">
                    {item.teacherName}
                  </h1>
                )}

                <div className="flex justify-center flex-col">
                  <p className="text-lg font-bold capitalize mb-2">
                    Name: {item.teacherName}
                  </p>
                  <p className="text-sm capitalize mt-0 mr-0 ml-0 mb-1">
                    Subject: {item.subjectdata.subjectName}
                  </p>
                  <p className="text-sm capitalize mt-0 mr-0 mb-4 ml-0">
                    Stream: {item.streamdata.streamName}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="border bg-gray-950 hover:bg-gray-900 py-2 px-5 rounded-l "
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <button className='"border bg-gray-950 py-2 px-4  rounded-l cursor-default'>
            {page}
          </button>
          <button
            className="border bg-gray-950 hover:bg-gray-900 py-2 px-8 rounded-l"
            disabled={teachers?.length}
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TeacherList;
