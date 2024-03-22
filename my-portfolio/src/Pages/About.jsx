import React from "react";
import { Link } from "react-router-dom";
import danish from "../component/Assets/danish.png";

function About() {
  return (
    <div className="py-10 min-w-[600px] sm:w-auto">
      <h1 className="text-center text-6xl underline text-fuchsia-900 mt-10 font-bold">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between items-center mt-15 ">
        <div className="flex justify-center items-center w-[100%] sm:w-[50%] mt-10 sm:mt-0">
          <img className="w-auto h-auto rounded-full" src={danish} alt="" />
        </div>

        <div className="flex flex-row justify-end items-center text-center md:text-start  ">
          <div className=" md:w-2/3 md:mr-[10%] ">
            <h1 className="text-5xl font-semibold mt-16">
              Full Stack Developer
            </h1>
            <p className="text-xl text-wrap mt-3">
              I am MD Danish, a skilled MERN stack developer based in Bangalore,
              Karnataka. With a keen interest in building modern and
              user-friendly web applications.
            </p>
            <p className="text-xl text-wrap mt-5">
              I specialize in MongoDB, Express.js, React.js, and Node.js
              technologies. My objective is to contribute to innovative projects
              that make a real impact, collaborating with motivated teams to
              deliver cutting-edge solutions.
            </p>
            <button className="flex w-full justify-center items-center md:justify-start mt-7">
              <Link
                to="/skill"
                className="text-xl font-semibold px-8 py-4 rounded-full  bg-fuchsia-900 hover:bg-fuchsia-600 text-white shadow-lg tracking-wide "
              >
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
