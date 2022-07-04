import React from "react";

import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import heroBgImage from "../images/data-access.png";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-gray-100 flex flex-col justify-between">
      <div className="container mx-auto grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-4 py-8">
          <p className="text-xl md:text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-4xl md:text-7xl font-bold">
            Data Management
          </h1>
          <p className="text-xl md:text-2xl">This is our Tech data</p>
          <button className="py-3 px-8 my-4 sm:w-[60%]">Get Started</button>
        </div>
        <div>
          <img src={heroBgImage} alt="Data Management" className="w-full" />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-200 border border-slate-300 rounded-xl shadow-xl text-center">
          <h2 className="text-2xl font-semibold">Data Services</h2>
          <div className="flex justify-between flex-wrap px-4 mt-3">
            <p className="flex px-4 py-2">
              <CloudUploadIcon className="text-cyan-500 h-6" /> App Security
            </p>
            <p className="flex px-4 py-2">
              <DatabaseIcon className="text-cyan-500 h-6" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2">
              <PaperAirplaneIcon className="text-cyan-500 h-6" /> Cloud Data
            </p>
            <p className="flex px-4 py-2">
              <ServerIcon className="text-cyan-500 h-6" /> API
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
