import React from "react";
import useSWR from "swr";
import AddDivisionModal from "./AddDivisionModal";
import Link from "next/link";

const SingleStreamContent: React.FC<SingleStreamContentProps> = ({ id }) => {
  console.log(id);
  const { data, error } = useSWR(
    `http://localhost:3000/api/admin/stream/singlestream?id=${id}`,
    async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    }
  );
  console.log(data);
  const plusonedivisions = data?.plusonedivisions;
  const plustwodivisions = data?.plustwodivisions;
  const stream = data?.stream
  if (error) return <p>Error fetching data</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <>
      <div className="flex flex-col justify-center items-center  sm:px-20 md:px-28 py-4  ">
        <h1 className="text-center font-bold md:pt-1 md:pb-6 text-2xl">
          Higher Secondary
        </h1>
        <h3 className="text-center font-bold   text-lg">{stream.streamName}</h3>
        <div>
          <Link href='/admin/streams/subjects'>View Subjects</Link>
        </div>
      </div>
      <div className="flex flex-col mx-2 md:mx-20 py-2  px-10 rounded-sm  ">
        <div className="flex items-center mx-2 md:mx-20 bg-gray-700 py-2 text-white font-bold justify-between px-10 rounded-sm ">
          <h1>Plus One</h1>
          <AddDivisionModal id={id} />
        </div>

        <div className="grid mx-2 md:mx-20 mt-5 gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 mb-8 ">
          {plusonedivisions?.map((item: DivisionMap) => (
            <Link
              href="/"
              key={item._id}
              className=" rounded shadow-md shadow-slate-600  bg-gray-900 hover:shadow-slate-200 flex flex-col justify-center items-center  border py-5 cursor-pointer"
            >
              <h4 className="font-bold text-lg mb-3">{item.division}</h4>
              <p className="mb-2 capitalize">
                Class Teacher: <span>{item.teacherdata.teacherName}</span>
              </p>
              <p className="">
                Total Students: <span></span>
              </p>
            </Link>
          ))}
        </div>

        <div className="flex items-center mx-2 md:mx-20 bg-gray-700 py-2 text-white font-bold justify-between px-10 rounded-sm">
          <h1>Plus Two</h1>
          <AddDivisionModal id={id} />
        </div>

        <div className="grid mx-2 md:mx-20 mt-5 gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 mb-8 ">
          {plustwodivisions?.map((item: DivisionMap) => (
            <Link
              href="/"
              key={item._id}
              className=" rounded shadow-md shadow-slate-600  bg-gray-900 hover:shadow-slate-200 flex flex-col justify-center items-center  border py-5 cursor-pointer"
            >
              <h4 className="font-bold text-lg mb-3">{item.division}</h4>
              <p className="mb-2">
                Class Teacher: <span>Ancy</span>
              </p>
              <p className="">
                Total Students: <span>{plustwodivisions.length}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleStreamContent;
