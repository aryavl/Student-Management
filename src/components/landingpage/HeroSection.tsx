import React from "react";
import Image from 'next/image'
import Link from "next/link";
const HeroSection = () => {
  return (
    <div
      className="hero-bg pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto flex flex-col items-center relative lg:flex-row lg:py-24
    xl:py-40 md:px-8 lg:justify-between lg:gap-16"
    >
      <div
        className="flex justify-center items-center w-full h-full lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0
      lg:items-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-lg object-contain object-top w-full h-auto lg:w-auto lg:h-full"
          alt=""
          width={350}
          height={450}
        />
      </div>
      <div className="mr-auto ml-auto flex justify-end relative max-w-xl xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="mb-6 max-w-xl">
            <div className="text-3xl font-bold tracking-tight text-white max-w-lg sm:text-4xl sm:leading-none mb-6">
              <p className="text-white text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                Manage students through
              </p>
              <p
                className="inline-block text-white text-3xl font-bold tracking-tight mr-2 sm:text-4xl
              sm:leading-none"
              >
                Our
              </p>
              <p
                className="inline-block text-color text-3xl font-bold tracking-tight sm:text-4xl
              sm:leading-none"
              >
                EduConnect
              </p>
            </div>
            <p className="text-gray-300 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <Link href="/login"><button className=" btn rounded-lg font-bold px-5 py-2 mt-3">Get started</button></Link> 
          </div>
          <div className="flex flex-col md:flex-row"></div>
          <div className="flex items-center mt-4 mr-0 mb-0 ml-0"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
