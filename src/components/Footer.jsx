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
    <footer className="w-full mt-32 bg-slate-800 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 grid-gap-6 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div className="mt-2">
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Marketting</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Cloud</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div className="mt-2">
          <h6 className="font-bold uppercase pt-2">Supports</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Structure</li>
            <li className="py-1">Database Design</li>
          </ul>
        </div>
        <div className="mt-2">
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div className="mt-2">
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <h4>Subscribe to our newsletter</h4>
          <p>
            Be the first to get the katest news, articles, and resources, sent
            to your inbox weekly.{" "}
          </p>
          <form>
            <input type="email" placeholder="youremail@email.com" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
