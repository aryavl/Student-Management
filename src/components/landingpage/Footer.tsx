import React from "react";

const Footer = () => {
  return (
    <div className=" w-full ">
      <div className="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="mt-0 mr-0 mb-8 ml-0 grid row-gap-10 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="tracking-wide text-medium">Category</p>
              <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Headlines
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    World news
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Sports
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Blogs
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="tracking-wide text-medium">Category</p>
              <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Headlines
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    World news
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Sports
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Blogs
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="tracking-wide text-medium">Category</p>
              <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Headlines
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    World news
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Sports
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Blogs
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="tracking-wide text-medium">Category</p>
              <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Headlines
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    World news
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Sports
                  </p>
                </div>
                <div>
                  <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                    Blogs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <p className="tracking-wide  font-medium text-base">
              Subscribe for updates
            </p>
            <div className="md:flex-row flex mt-4 mr-0 mb-0 ml-0">
              <input
                placeholder="Email"
                type="text"
                className="w-full h-12 pt-0 pr-4 pb-0 pl-4 mt-0 mr-0 mb-4 ml-0 bg-white
              border-gray-300 border flex-grow transition duration-200 rounded shadow-sm appearance-none md:mr-2 md:mb-0
              focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                className="inline-flex items-center justify-center h-12 pt-0 pr-6 pb-0 pl-6 mt-0 mr-0
              mb-4 ml-2 font-medium text-white rounded darkbtn tracking-wide transition duration-200 shadow-md
              hover:bg-deep-blue-900 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 mr-0 mb-0 ml-0 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minimh.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pr-0 pb-10 pl-0 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright 2021 Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <i
              className="fa-twitter h-5 fab text-gray-500
          transition-colors duration-300 hover:text-teal-accent-400"
            ></i>
            <i
              className="fa-instagram h-5 fab
          text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            ></i>
            <i
              className="fa-facebook h-5
          fab text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
