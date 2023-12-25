"use client"
import React from 'react'
import AddSubjectModal from './AddSubjectModal'
import useSWR from 'swr';
import { useRouter } from 'next/navigation';

const SubjectContent = () => {
  const router = useRouter()

    const { data, error } = useSWR(
        "http://localhost:3000/api/admin/stream/streamlist",
        async (url) => {
          const response = await fetch(url);
          const result = await response.json();
          return result;
        }
      );
      console.log(data);
      const stream = data?.stream;

      const handleButton =(id:string)=>{
        router.push(`/admin/streams/subjects/${id}`)
      }
  return (
    <>
      <div className="flex flex-col justify-center items-center  sm:px-20 md:px-28 py-5 pb-20 m-auto">
        <h1 className="text-center font-bold md:pt-12 md:pb-6">Subjects</h1>
        
        <div className="flex justify-center items-center sm:px-20 md:px-28 py-5 gap-5 flex-col md:flex-row m-auto">
          {stream?.map((item: MapStream) => (
            <>
            <button key={item._id} onClick={() => handleButton(item._id)}>
            <div className=" h-40 w-60 flex justify-center items-center flex-col gap-3 shadow-lg pr-6 pl-6 mt-6 transition duration-200 rounded bg-gray-900 border">
              <h1 className="font-bold tracking-wider">{item.streamName}</h1>
            </div>
          </button>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default SubjectContent