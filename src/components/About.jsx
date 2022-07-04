import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full my-32">
      <div className="container mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="text-5xl font-bold px-2">
            Trusted by developers across the world
          </h2>
          <p className="text-2xl py-6 text-gray-500 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            similique! Debitis pariatur delectus, temporibus laboriosam
            voluptates praesentium veniam autem ad!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-4 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <h3 className="text-5xl md:text-7xl font-bold text-cyan-500">
              100%
            </h3>
            <p className="text-gray-400 mt-3">Completed</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <h3 className="text-5xl md:text-7xl font-bold text-cyan-500">
              24/7
            </h3>
            <p className="text-gray-400 mt-3">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <h3 className="text-5xl md:text-7xl font-bold text-cyan-500">
              100K
            </h3>
            <p className="text-gray-400 mt-3">Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
