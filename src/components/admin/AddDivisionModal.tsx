"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";

const AddDivisionModal = ({ streamId }:{streamId:string}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorr, setError] = useState("");
  
  const router = useRouter();
// console.log(streamId);

  const { data, error } = useSWR(
    `http://localhost:3000/api/staff/student/formdata?id=${streamId}`,
    async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    }
  );

  console.log(data);
  const teachers = data?.teacher
  const streams = data?.stream;
  console.log(streams);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const handleStreamChange = async () => {
  //   console.log(streamId);
  //   const res = await fetch(`/api/admin/divisionregister?id=${streamId}`);
  //   const result = await res.json();
  //   console.log(result);

  //   setTeachers(result?.teacher);
  // };
  const handleSubmit = async (e: HandleSubmitType) => {
    e.preventDefault();
    // console.log(e.target[0].value,e.target[1].value,e.target[2].value);
    const className = e.target[0].value;
    const stream = e.target[1].value;
    const division = e.target[2].value;
    const classTeacher = e.target[3].value;
    console.log(className, stream, division, classTeacher);

    const res = await fetch("/api/division", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        className,
        stream,
        division,
        classTeacher,
      }),
    });
    console.log(res);

    if (res.status === 400) {
      setError(res.statusText);
    }
    if (res.status === 200) {
      setError("");
      router.push(`/admin/streams/${streamId}`);
      closeModal();
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-white text-gray-900 font-bold rounded-md pl-3 pr-3 text-lg justify-center items-center overflow-hidden relative focus:outline-none group"
      >
        <span className="transition-transform px-4 py-1 transform scale-75 group-hover:scale-0 inline-block opacity-100 group-hover:hidden font-bold text-lg">
          +
        </span>
        <span className="transition-transform px-4 py-1 transform scale-0 group-hover:scale-75 hidden group-hover:inline-block ml-0 opacity-0 group-hover:opacity-100">
          Add Division
        </span>
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md w-1/2">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Class:
                </label>
                <select className="border w-full py-2 px-3 text-gray-700">
                  <option value="plus one">Plus One</option>
                  <option value="plustwo">Plus Two</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Stream:
                </label>
                <select
                  className="border w-full py-2 px-3 text-gray-700"
                 
                >
                  
                    <option value={streams?._id} >
                      {streams?.streamName}
                    </option>
                  
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Division:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Class Teacher:
                </label>
                <select className="border w-full py-2 px-3 text-gray-700">
                  {teachers&& teachers?.map((item: Teacher) => (
                    <option value={item._id} key={item._id}>
                      {item.teacherName}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-red-600 text=[16px] mb-4">
                {errorr && errorr}
              </p>
              <div className="flex items-center justify-between">
                <button
                  onClick={closeModal}
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-8 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddDivisionModal;
