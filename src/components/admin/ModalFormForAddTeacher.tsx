"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

const ModalFormForAddTeacher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [error,setError] = useState("")
const router = useRouter()
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async(e: HandleSubmitType) => {
    e.preventDefault();
    // console.log(e.target[0].value,e.target[1].value,e.target[2].value);
    const teacherName = e.target[0].value
    const email = e.target[1].value
    const stream = e.target[2].value
    const subject = e.target[3].value
    
    const res= await fetch('/api/teacherRegistration',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          teacherName,
          email,
          stream,
          subject
        })
      })
console.log(res);

      if(res.status === 400){
        setError(res.statusText)

      }
      if(res.status === 200){
        setError("")
        router.push('/admin/teachers')
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
          Add Teacher
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
              <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold text-left  w-1/2 mb-2"
                >
                  Teacher Name:
                </label>
               
                  <input  className="border w-full py-2 px-3 text-gray-700" placeholder="Jhon Sam" type="text" name="name" id="" />
              </div>
              <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold text-left  w-1/2"
                >
                 Email:
                </label>
               
                  <input  className="border w-full py-2 px-3 text-gray-700" placeholder='jhon@gmail.com'  type="text" name="email" id="" />
              </div>
              
              <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold text-left  w-1/2"
                >
                 Stream:
                </label>
               
                <select className="border w-full py-2 px-3 text-gray-700">
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="humanities">Humanities</option>
                </select>
              </div>
              <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold text-left  w-1/2"
                >
                 Subject:
                </label>
               
                <select className="border w-full py-2 px-3 text-gray-700">
                  <option value="malayalam">Malayalam</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="maths">Maths</option>
                  <option value="computer science">Computer Science</option>
                  <option value="biology">Biology</option>
                </select>
              </div>
              
             

              <p className="text-red-600 text=[16px] mb-4">{error && error}</p>
              <div className="flex items-center justify-between mt-10">
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

export default ModalFormForAddTeacher;
