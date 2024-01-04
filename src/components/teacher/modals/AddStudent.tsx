"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import useSWR from "swr";

const AddStudent: React.FC<SingleStreamContentProps> = ({ id ,setIsStudentAdded}) => {
  console.log(id);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorr, setError] = useState("");
  const [divisions, setDivisions] = useState([]);
  const {pending} = useFormStatus()
  const router = useRouter();

  const { data, error } = useSWR(
    `/api/staff/student/formdata?id=${id}`,
    async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    }
  );
  console.log(data);
  

  const divisiondata= data?.division

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: HandleSubmitType) => {
    e.preventDefault();
    // console.log(e.target[0].value,e.target[1].value,e.target[2].value);
    const studentName = e.target[0].value;
    const email = e.target[1].value;
    const admissionNo = e.target[2].value;
    const dateOfJoining = e.target[3].value;
   
    const stream = e.target[4].value;
    const division = e.target[5].value;
    console.log(studentName, email, admissionNo, dateOfJoining, stream, division);

    const res = await fetch("/api/staff/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentName,
        email,
        admissionNo,
        dateOfJoining,
        stream,
        division,
      }),
    });
    console.log(res);

    if (res.status === 400) {
      setError(res.statusText);
    }
    if (res.status === 200) {
      setError("");
      
      setIsStudentAdded(true)
      router.push(`/staff/myclass`)
      closeModal();
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="text-emerald-100 bg-green-800 font-bold rounded-md pl-3 pr-3 text-lg flex justify-center items-center overflow-hidden relative focus:outline-none group transition duration-300 delay-150 hover:delay-300 "
      >
        <span className="transition-transform px-4 py-1 transform scale-75 group-hover:scale-0 inline-block opacity-100 group-hover:hidden font-bold text-lg  duration-300 delay-150 hover:delay-300">
          +
        </span>
        <span className="transition-transform px-4 py-1 transform scale-0 group-hover:scale-75 hidden group-hover:inline-block ml-0 opacity-0 group-hover:opacity-100">
          Add Student
        </span>
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md w-1/2 overflow-y-auto">
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
            <div className="form-container overflow-y-auto max-h-80">
            <form onSubmit={handleSubmit}>

              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
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
                  Email:
                </label>
                <input
                  type="email"
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
                  Admission Number:
                </label>
                <input
                  type="number"
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
                  Date Of Joining:
                </label>
                <input
                  type="date"
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
                  Stream:
                </label>
                <select
                  className="border w-full py-2 px-3 text-gray-700"
                  disabled
                >
                   
              
                  {
                  divisiondata &&
                  divisiondata.map((item:DivisionMap)=>(
                    <option value={item.stream} key={item._id}>{item.streamdata.streamName}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Division:
                </label>
                <select className="border w-full py-2 px-3 text-gray-700" disabled>
                  {divisiondata &&
                    divisiondata.map((item: DivisionMap) => (
                      <option value={item._id} key={item._id}>
                        {item.division}
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
                  disabled={pending}
                  className="bg-gray-900 text-white px-8 py-2 rounded"
                >
                  {pending ? "Submitting...":"Submit"}
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddStudent;
