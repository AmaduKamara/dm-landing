import React from "react";

import {
  CloudUploadIcon,
  DatabasedIcon,
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
          <button className="py-3 px-8 mt-4 sm:w-[60%]">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
