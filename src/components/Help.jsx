import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Help() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-gray-300 py-32 flex flex-col items-center justify-center ">
      <h1 className="text-7xl font-medium pb-10 ">How can we help?</h1>
      <div
        className="relative w-1/2 flex justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full py-5 border-black drop-shadow-xl rounded-md px-5 border text-xl hover:border-cyan-600 focus:border-cyan-600 focus:outline-none focus:duration-0 duration-300"
        />
        <button className="absolute right-0 inset-y-0 pr-3 flex items-center text-black">
          {isHovered ? (
            <FaArrowRight className="text-cyan-600 duration-300" />
          ) : (
            <FaArrowRight />
          )}
        </button>
      </div>
    </div>
  );
}

export default Help;
