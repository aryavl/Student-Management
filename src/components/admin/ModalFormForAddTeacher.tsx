// components/ModalForm.js
import { useState } from 'react';

const ModalFormForAddTeacher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e:HandleSubmitType) => {
    e.preventDefault();
    // Add your form submission logic here
    closeModal();
  };

  return (
    <div>
      <button  className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Modal
      </button>

    <button onClick={openModal} className="bg-white text-gray-900 font-bold rounded-full pl-3 pr-3 text-lg justify-center items-center overflow-hidden relative focus:outline-none group">
    <span className="transition-transform transform scale-75 group-hover:scale-0 inline-block opacity-100 group-hover:hidden">
        +
    </span>
    <span className="transition-transform transform scale-0 group-hover:scale-75 hidden group-hover:inline-block ml-0 opacity-0 group-hover:opacity-100">
        Add Teacher
    </span>
</button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md w-1/2">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                  Teacher name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>2
              
              

              <div className="flex items-center justify-between">
                <button onClick={closeModal} type="button" className="bg-gray-500 text-white px-4 py-2 rounded">
                  Close
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFormForAddTeacher;
