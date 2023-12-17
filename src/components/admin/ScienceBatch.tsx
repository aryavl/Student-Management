import React from 'react'
import AddDivisionModal from './AddDivisionModal'
import Link from 'next/link'

const ScienceBatchContent = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center  sm:px-20 md:px-28 py-4  ">
        <h1 className="text-center font-bold md:pt-1 md:pb-6 text-2xl">Higher Secondary</h1>
        <h3 className="text-center font-bold   text-lg">Science Department</h3>
       
        </div>
        <div className="flex flex-col mx-2 md:mx-20 py-2  px-10 rounded-sm  ">
        <div className="flex items-center mx-2 md:mx-20 bg-gray-700 py-2 text-white font-bold justify-between px-10 rounded-sm ">
                <h1>Plus One</h1>
                <AddDivisionModal/>
            </div>

            <Link href='/' className='grid mx-2 md:mx-20 mt-5 gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 mb-8 '>
            <div className=' rounded shadow-md shadow-slate-600  bg-gray-900 hover:shadow-slate-200 flex flex-col justify-center items-center  border py-5 cursor-pointer'>
                
            <h4 className='font-bold text-lg'>SA1</h4>
                <p className=''>Class Teacher: <span>Ancy</span></p>
                <p className=''>Total Students: <span>30</span></p>
                </div>
                <div className='rounded shadow-md shadow-slate-600  bg-gray-900 hover:shadow-slate-200 flex flex-col justify-center items-center  border  py-5 cursor-pointer'>
                <h4 className='font-bold text-lg'>SA1</h4>
                <p className=''>Class Teacher: <span>Ancy</span></p>
                <p className=''>Total Students: <span>30</span></p>
                </div>
                <div className='rounded shadow-md shadow-slate-600  bg-gray-900 hover:shadow-slate-200 flex flex-col justify-center items-center  border  py-5 cursor-pointer'>
                SA1
                <p className=''>Class Teacher: <span>Ancy</span></p>
                <p className=''>Total Students: <span>30</span></p>
                </div>
               
               
            </Link>

            <div className="flex items-center mx-2 md:mx-20 bg-gray-700 py-2 text-white font-bold justify-between px-10 rounded-sm">
                <h1>Plus Two</h1>
                <AddDivisionModal/>
            </div>

            <div className='grid mt-8 mr-auto mb-0 ml-auto gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-5 '>
            <button className='px-10 rounded shadow-md shadow-slate-600  py-2 bg-gray-900 hover:shadow-slate-200'>SA1</button>
                <div className='
                 flex flex-col justify-center item-center rounded shadow-md shadow-slate-600  py-2 bg-gray-900 hover:shadow-slate-200'>
                    SA1
                    <p>Class Teacher: </p>
                    <p>Total Students: </p>
                    </div>
                <button className='px-10 rounded shadow-md shadow-slate-600  py-2 bg-gray-900 hover:shadow-slate-200'>SA1</button>
                <button className='px-10 rounded shadow-md shadow-slate-600  py-2 bg-gray-900 hover:shadow-slate-200'>SA1</button>
                <button className='px-10 rounded shadow-md shadow-slate-600  py-2 bg-gray-900 hover:shadow-slate-200'>SA1</button>
            </div>
            </div>
    </>
  )
}

export default ScienceBatchContent