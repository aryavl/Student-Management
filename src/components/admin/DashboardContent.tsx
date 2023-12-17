import React from 'react'

const Content = () => {
  return (
    <div className="mx-auto mb-10 mt-6 w-full px-6 lg:mx-0 lg:max-w-none max-w-3xl">
    <div className="mb-6 mt-4 items-end justify-between text-white flex">
      <div>
        <p className="text-xl font-medium lg:text-2xl">Dashboard</p>
       
      </div>
      {/* <button  type="button" className="inline-flex border border-gray-500 transition-all
          hover:bg-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500
          focus:ring-offset-2 justify-center rounded-md bg-gray-600 px-3 py-1 text-sm font-medium text-white
          shadow-sm">Add Text</button> */}
    </div>
    {/* <div className="lg:grid-cols-3 lg:gap-6 grid min-h-[350px] grid-cols-1 gap-y-6">
      <div className="items-center justify-center rounded-md px-4 py-2 text-white lg:col-span-2 flex border"></div>
      <div className="items-center justify-center rounded-md px-4 py-2 text-white flex border"></div>
    </div> */}
    <div className="mt-6 lg:grid-cols-3 grid min-h-[400px] gap-6">
      <div className="items-center justify-center rounded-md px-4 py-2 text-white flex border"></div>
      <div className="items-center justify-center rounded-md px-4 py-2 text-white flex border"></div>
      <div className="items-center justify-center rounded-md px-4 py-2 text-white flex border"></div>
    </div>
  </div>
  )
}

export default Content