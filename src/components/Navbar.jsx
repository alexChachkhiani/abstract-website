import React from "react";
import AbstractIcon from "../assets/abstract_icon.png";

function Navbar() {
  return (
    <div className="bg-black flex justify-between px-24 py-4 items-center">
      <div className="flex flex-row">
        <img
          src={AbstractIcon}
          alt="Abstract Icon"
          className="w-32 h-auto mr-3 "
        />
        <span className="text-white text-2xl">| Help Center</span>
      </div>
      <div className="flex space-x-5">
        <button className="bg-neutral-900 text-white py-2 px-6 rounded-lg border-neutral-50 border text-2xl hover:bg-neutral-50 hover:text-black duration-300">
          Submit a Request
        </button>
        <button className="bg-indigo-700 text-white py-2 px-9 rounded-lg border-neutral-50 text-2xl hover:bg-white hover:text-black hover:border-white duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
