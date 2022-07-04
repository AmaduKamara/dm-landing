import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNaveOpen = () => setNav(!nav);

  return (
    <header className="w-screen h-[60px] z-10 bg-white fixed drop-shadow-lg pb-12">
      <div className="px-4 flex justify-between items-center w-full container mx-auto">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            data<span className="text-4xl text-cyan-500">.</span>
          </h1>
          <nav>
            <ul className="hidden md:flex">
              <li>Home</li>
              <li>About</li>
              <li>Support</li>
              <li>Platforms</li>
              <li>Pricing</li>
            </ul>
          </nav>
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-gray-800 mr-6">
              Sign In
            </button>
            <button className="px-8 py-2 transition-all duration-500">
              Sign Up
            </button>
          </div>
        </div>
        <div className="md:hidden mt-1 mr-4" onClick={handleNaveOpen}>
          {!nav ? (
            <MenuIcon className="w-5 cursor-pointer text-cyan-500" />
          ) : (
            <XIcon className="w-5 cursor-pointer text-cyan-500" />
          )}
        </div>
      </div>

      {/* Dropdown Menu */}
      <nav className="pb-12">
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute bg-gray-100 w-full px-8 pb-12 mt-6 transition-all duration-500 ease-in"
          }
        >
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
          <li className="flex flex-col my-4 px-0">
            <button className="bg-transparent text-gray-800 px-8 py-3 mb-4">
              Sign In
            </button>
            <button className="px-8 py-3 transition-all duration-500">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
