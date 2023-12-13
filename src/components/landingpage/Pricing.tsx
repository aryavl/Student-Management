import React from "react";

const Pricing = () => {
  return (
    <div
      className="bg-white pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8
    lg:py-20"
    >
      <div className="mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p
            className="inline-block btn text-xs font-semibold tracking-wider btn pt-3 pr-3 pb-3 pl-3 mb-4
          uppercase rounded-full"
          >
            Our Pricing
          </p>
        </div>
        <div
          className="mr-auto mb-6 ml-auto text-3xl font-bold leading-none tracking-tight text-gray-900 max-w-lg font-sans
        sm:text-4xl md:mx-auto"
        >
          <div className="relative">
            <span
              className="items-center justify-center w-32 text-blue-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block flex absolute
            top-0 left-0 z-0 hidden -mt-8 -ml-20"
            >
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <defs>
                  <pattern
                    id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
            </span>
            <p
              className="font-bold text-gray-900 text-3xl inline tracking-tight font-sans sm:text-4xl
            sm:leading-none"
            >
              Affordable Pricing
            </p>
          </div>
          <p className="inline font-bold text-3xl tracking-tight font-sans sm:text-4xl sm:leading-none">
            Focus on growing your business
          </p>
        </div>
        <p className="text-gray-700 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <div className="mr-auto ml-auto grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
        <div
          className="flex flex-col justify-between pt-8 pr-8 pb-8 pl-8 bg-white shadow-sm transition-shadow duration-300
        border rounded sm:items-center hover:shadow"
        >
          <div className="text-center">
            <p className="text-lg font-semibold">Start</p>
            <div className="flex items-center justify-center mt-2">
              <p className="text-5xl font-bold mr-1">Free</p>
            </div>
            <div className="mt-2 space-y-2">
              <p className="text-gray-700">10 deploys per day</p>
              <p className="text-gray-700">10 GB of storage</p>
              <p className="text-gray-700">20 domains</p>
            </div>
          </div>
          <div>
            <button
              className="inline-flex items-center justify-center w-full h-12 font-medium tracking-wide
              shadow-md pr-6 pl-6 mt-6 transition duration-200 rounded hover:bg-gray-100
            focus:shadow-outline focus:outline-none"
            >
              Start for free
            </button>
            <p className="text-gray-600 text-xs mt-6 max-w-xs sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col justify-between pt-8 pr-8 pb-8 pl-8 bg-white shadow-sm relative transition-shadow
        duration-300 border rounded sm:items-center hover:shadow border-gray-600"
        >
          <div className="-mt-3 flex justify-center absolute inset-x-0 top-0">
            <p
              className="pt-1 pr-3 pb-1 pl-3 inline-block text-xs font-medium tracking-wider text-white darkbtn uppercase
            rounded"
            >
              Most Popular
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">Pro</p>
            <div className="flex items-center justify-center mt-2">
              <p className="text-5xl font-bold mr-1">$38</p>
              <p className="text-gray-700">/ mo</p>
            </div>
            <div className="mt-2 space-y-2">
              <p className="text-gray-700">200 deploys per day</p>
              <p className="text-gray-700">80 GB of storage</p>
              <p className="text-gray-700">Global CDN</p>
            </div>
          </div>
          <div>
            <button
              className="inline-flex items-center justify-center w-full h-12 font-medium tracking-wide
            text-white darkbtn shadow-md pr-6 pl-6 mt-6 transition duration-200 rounded hover:bg-teal-950
            focus:shadow-outline focus:outline-none"
            >
              Buy Pro
            </button>
            <p className="text-gray-600 text-xs mt-6 max-w-xs sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
