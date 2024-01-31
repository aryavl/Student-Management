import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials text-white pt-24 pr-4 pb-24 pl-4 mr-auto ml-auto">
      <div className="mb-6 avatar avatar-lg md:mx-auto flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="object-cover w-24 h-24"
          alt="avathar"
          width={24}
          height={24}
        />
      </div>
      <div className="w-full mr-auto ml-auto text-left md:w-3/5 lg:w-2/5 md:text-center">
        <p className="mb-6 text-xl font-bold text-white text-center md:leading-tight md:text-3xl">
          “With their reliable and developer-friendly tools, our engineering
          team is freed up to focus on product and customer experiences.”
        </p>
        <p className="mb-6 text-xs font-bold text-center tracking-widest text-gray-300 decoration-uppercase">
          “With their reliable and developer-friendly tools, our engineering
          team is freed up to focus on product and customer experiences.”
        </p>
        <p>
            -Ochuko Okpako
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
