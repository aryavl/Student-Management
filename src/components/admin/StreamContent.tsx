import Link from "next/link";
import React from "react";
import AddStream from "@/components/admin/AddStream";
import useSWR from "swr";
import { useRouter } from "next/navigation";
const StreamContent = () => {
  const router = useRouter()
  const { data, error,isLoading } = useSWR(
    "http://localhost:3000/api/admin/stream/streamlist",
    async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    }
  );
  console.log(isLoading);
  
  const stream = data?.stream;

  const handleButton =(id:string)=>{
    router.push(`/admin/streams/${id}`)
  }
  
  return (
    <>

      <div className="flex flex-col justify-center items-center  sm:px-20 md:px-28 py-5 pb-20 m-auto">
        <h1 className="text-center font-bold md:pt-12 md:pb-6">Streams</h1>
        <AddStream />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center sm:px-20 md:px-28 py-5 gap-20">
          

            <>
            {stream?.map((item: MapStream) => (
              <>
              <button key={item._id} onClick={() => handleButton(item._id)} className="mr-10">
              <div className=" h-40 w-60 flex justify-center items-center flex-col gap-3 shadow-lg pr-6 pl-6 mt-6 transition duration-200 rounded bg-gray-900 border">
                <h1 className="font-bold tracking-wider">{item.streamName}</h1>
              </div>
            </button>
              </>
            ))}
            </>
          
        </div>
      </div>
    </>
  );
};

export default StreamContent;
