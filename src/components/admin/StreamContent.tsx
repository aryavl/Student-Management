import Link from 'next/link'
import React from 'react'

const StreamContent = () => {
  return (
    <>
     <div className="flex flex-col justify-center items-center  sm:px-20 md:px-28 py-5 pb-20 m-auto">
        <h1 className="text-center font-bold md:pt-12 md:pb-6">Streams</h1>
        <div className="flex justify-center items-center sm:px-20 md:px-28 py-5 gap-5 flex-col md:flex-row m-auto">
          <Link href="/admin/streams/science">
            <div className=" h-40 w-60 flex justify-center items-center flex-col gap-3 shadow-lg pr-6 pl-6 mt-6 transition duration-200 rounded glassBoxStream">
              <h1 className="font-bold tracking-wider">Science Batch</h1>
            </div>
          </Link>
          <Link href="/admin/streams/commerce">
            <div className="h-40 w-60 flex justify-center items-center flex-col gap-3 shadow-lg pr-6 pl-6 mt-6 transition duration-200 rounded glassBoxStream"> 
              <h1 className="font-bold tracking-wider">Commerce Batch</h1>
            </div>
          </Link>
          <Link href="/admin/streams/humanities">
            <div className="h-40 w-60 flex justify-center items-center flex-col gap-3 shadow-lg pr-6 pl-6 mt-6 transition duration-200 rounded glassBoxStream">
              <h1 className="font-bold tracking-wider">Humanities Batch</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default StreamContent