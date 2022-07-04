import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportBgImage from "../images/staff.jpg";

const Supports = () => {
  return (
    <section name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={supportBgImage}
          alt="Support Staff"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="text-2xl py-4 text-slate-300 text-center px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            accusamus quas quis perspiciatis vero quisquam, expedita hic ex
            dicta vitae impedit nam repellendus, nisi tenetur magnam eligendi at
            eos quibusdam?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-cyan-500 text-white rounded-lg mt-[-4rem]" />
              <h4 className="font-bold text-2xl my-6">Sales</h4>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis perspiciatis beatae ut cupiditate enim vitae impedit,
                nostrum quas esse. Quam.
              </p>
            </div>
            <div className="bg-gray-100 cursor-pointer pl-8 py-4 rounded-b-xl">
              <p className="flex items-center text-cyan-500">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-cyan-500 text-white rounded-lg mt-[-4rem]" />
              <h4 className="font-bold text-2xl my-6">Technical Support</h4>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis perspiciatis beatae ut cupiditate enim vitae impedit,
                nostrum quas esse. Quam.
              </p>
            </div>
            <div className="bg-gray-100 cursor-pointer pl-8 py-4 rounded-b-xl">
              <p className="flex items-center text-cyan-500">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-cyan-500 text-white rounded-lg mt-[-4rem]" />
              <h4 className="font-bold text-2xl my-6">Media Inquiries</h4>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis perspiciatis beatae ut cupiditate enim vitae impedit,
                nostrum quas esse. Quam.
              </p>
            </div>
            <div className="bg-gray-100 cursor-pointer pl-8 py-4 rounded-b-xl">
              <p className="flex items-center text-cyan-500">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supports;
