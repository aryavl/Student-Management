"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddDivisionModal = () => {
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
    const className = e.target[0].value
    const stream = e.target[1].value
    const division = e.target[2].value
    
    const res= await fetch('/api/division',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          className,
          stream,
          division
        })
      })
console.log(res);

      if(res.status === 400){
        setError(res.statusText)

      }
      if(res.status === 200){
        setError("")
        router.push('/admin/streams/science')
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
                <select className="border w-full py-2 px-3 text-gray-700">
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="humanities">Humanities</option>
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

              <div className="flex items-center justify-between">
              <p className="text-red-600 text=[16px] mb-4">{error && error}</p>
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
