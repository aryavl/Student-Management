import React from 'react'
import ModalFormForAddTeacher from './ModalFormForAddTeacher'

const TeacherList = () => {
  return (
    <>
<div className="w-full pt-16 pr-4 pb-16 pl-4 mt-0 mr-auto mb-0 ml-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8
    lg:py-20">
  <div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
      <ModalFormForAddTeacher/>
      
     
    </div>
    <div className="mt-0 mr-auto mb-6 ml-auto text-3xl font-bold leading-none text-gray-900 max-w-lg font-sans
        tracking-tight sm:text-4xl md:mx-auto">
      <div className="inline-block relative">
        <p className="text-3xl font-bold leading-none text-white relative inline max-w-lg font-sans tracking-tight
            sm:text-4xl md:mx-auto">Welcome </p>
      </div>
      
      <p className="text-3xl font-bold leading-none text-white inline max-w-lg font-sans tracking-tight sm:text-4xl
          md:mx-auto"> our talented team of professionals</p>
    </div>
    <div className=" items-center space-x-2">
    <select className="border p-2 px-20 rounded-sm text-gray-950">
        
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>

    <button className="bg-white p-2 rounded-sm text-gray-950">Search</button>
</div>
  </div>
  <div className="grid mt-0 mr-auto mb-0 ml-auto gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2
      lg:grid-cols-3">
    <div className="flex">
      <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"/>
      <div className="flex justify-center flex-col">
        <p className="text-lg font-bold">Mac Xenon</p>
        <p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">Product Manager</p>
      </div>
    </div>
    <div className="flex">
      <img src="https://images.pexels.com/photos/1372134/pexels-photo-1372134.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"/>
      <div className="flex justify-center flex-col">
        <p className="text-lg font-bold">Martha Jena</p>
        <p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">Design Manager</p>
      </div>
    </div>
    <div className="flex">
      <img src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"/>
      <div className="flex justify-center flex-col">
        <p className="text-lg font-bold">Macco James</p>
        <p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">CTO Lorem ltd</p>
      </div>
    </div>
    <div className="flex">
      <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"/>
      <div className="flex justify-center flex-col">
        <p className="text-lg font-bold">Jean Wonder</p>
        <p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">Human Resources</p>
      </div>
    </div>
    <div className="flex">
      <img src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"/>
      <div className="flex justify-center flex-col">
        <p className="text-lg font-bold">Mr Smith</p>
        <p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">Agent</p>
      </div>
    </div>
    <div className="flex">
      <img src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"/>
      <div className="flex justify-center flex-col">
        <p className="text-lg font-bold">Andy Townsend</p>
        <p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">Junior Developer</p>
      </div>
    </div>
    <div className="flex">
      <img src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"/>
      <div className="flex justify-center flex-col">
        <p className="text-lg font-bold">Sophia Grey</p>
        <p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">UI/UX Designer</p>
      </div>
    </div>
    <div className="flex">
      <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"/>
      <div className="flex justify-center flex-col">
        <p className="text-lg font-bold">Jack Bond</p>
        <p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">Senior Developer</p>
      </div>
    </div>
    <div className="flex">
      <img src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"/>
      <div className="flex justify-center flex-col">
        <p className="text-lg font-bold">Adam Savage</p>
        <p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">Savage Man</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default TeacherList