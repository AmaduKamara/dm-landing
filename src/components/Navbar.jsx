import React, { useState } from "react";
import { Link } from "react-scroll";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNaveOpen = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <header className="w-screen h-[60px] z-10 bg-white fixed drop-shadow-lg pb-12">
      <div className="px-4 flex justify-between items-center w-full container mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link to="home" smooth={true} duration={500}>
            <h1 className="text-3xl font-semibold sm:text-4xl cursor-pointer">
              data<span className="text-4xl text-cyan-500">.</span>
            </h1>
          </Link>
          <nav>
            <ul className="hidden md:flex">
              <li className="cursor-pointer">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="about" smooth={true} offset={-180} duration={500}>
                  About
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="support" smooth={true} offset={-50} duration={500}>
                  Support
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="platform" smooth={true} offset={-140} duration={500}>
                  Platforms
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="pricing" smooth={true} offset={-60} duration={500}>
                  Pricing
                </Link>
              </li>
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
        <div className="md:hidden mt-1 mr-2" onClick={handleNaveOpen}>
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
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            <Link to="home" smooth={true} duration={500} onClick={handleClose}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            <Link
              to="about"
              smooth={true}
              offset={-180}
              duration={500}
              onClick={handleClose}
            >
              About
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            <Link
              to="support"
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleClose}
            >
              Support
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            <Link
              to="platform"
              smooth={true}
              offset={-140}
              duration={500}
              onClick={handleClose}
            >
              Platforms
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            <Link
              to="pricing"
              smooth={true}
              offset={-60}
              duration={500}
              onClick={handleClose}
            >
              Pricing
            </Link>
          </li>
          <li className="flex flex-col my-4 px-0">
            <button
              className="bg-transparent text-gray-800 px-8 py-3 mb-4"
              onClick={handleClose}
            >
              Sign In
            </button>
            <button
              className="px-8 py-3 transition-all duration-500"
              onClick={handleClose}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
