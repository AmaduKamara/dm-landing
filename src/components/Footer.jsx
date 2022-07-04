import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-32 bg-slate-800 text-gray-300 py-8 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 grid-gap-6 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div className="mt-2">
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul className="mt-3">
            <li className="py-1 pl-0 text-gray-400">Marketting</li>
            <li className="py-1 pl-0 text-gray-400">Analytics</li>
            <li className="py-1 pl-0 text-gray-400">Commerce</li>
            <li className="py-1 pl-0 text-gray-400">Cloud</li>
            <li className="py-1 pl-0 text-gray-400">Data</li>
          </ul>
        </div>
        <div className="mt-2">
          <h6 className="font-bold uppercase pt-2">Supports</h6>
          <ul className="mt-3">
            <li className="py-1 pl-0 text-gray-400">Pricing</li>
            <li className="py-1 pl-0 text-gray-400">Documentation</li>
            <li className="py-1 pl-0 text-gray-400">Guides</li>
            <li className="py-1 pl-0 text-gray-400">API Structure</li>
            <li className="py-1 pl-0 text-gray-400">Database Design</li>
          </ul>
        </div>
        <div className="mt-2">
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul className="mt-3">
            <li className="py-1 pl-0 text-gray-400">About</li>
            <li className="py-1 pl-0 text-gray-400">Blog</li>
            <li className="py-1 pl-0 text-gray-400">Jobs</li>
            <li className="py-1 pl-0 text-gray-400">Press</li>
            <li className="py-1 pl-0 text-gray-400">Partners</li>
          </ul>
        </div>
        <div className="mt-2">
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul className="mt-3">
            <li className="py-1 pl-0 text-gray-400">Claims</li>
            <li className="py-1 pl-0 text-gray-400">Privacy</li>
            <li className="py-1 pl-0 text-gray-400">Terms</li>
            <li className="py-1 pl-0 text-gray-400">Policies</li>
            <li className="py-1 pl-0 text-gray-400">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2 px-2">
          <h4 className="font-bold uppercase">Subscribe to our newsletter</h4>
          <p className="py-4">
            Be the first to get the katest news, articles, and resources, sent
            to your inbox weekly.{" "}
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="youremail@email.com"
              className="w-full p-2 rounded-md mb-4 mr-2 text-gray-700"
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] mx-auto justify-between items-center sm:flex-row text-center text-gray-500 px-2 py-4">
        <p>
          2022 <span className="text-cyan-500">data</span>
          <span className="text-white text-2xl">.</span>, LLC. All rights
          reserved.{" "}
        </p>
        <div className="flex justify-between sm:w-[300px] text-2xl pt-4">
          <FaFacebook className="mx-2 hover:text-cyan-500 cursor-pointer" />
          <FaInstagram className="mx-2 hover:text-cyan-500 cursor-pointer" />
          <FaTwitter className="mx-2 hover:text-cyan-500 cursor-pointer" />
          <FaTwitch className="mx-2 hover:text-cyan-500 cursor-pointer" />
          <FaGithub className="mx-2 hover:text-cyan-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
