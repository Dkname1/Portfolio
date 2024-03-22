import React from "react";
import banner from "./Assets/banner.jpg";
import danish_img from "./Assets/danish.png";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className=" xl:h-[620px] w-[600px] sm:w-full bg-cover mt-[0.5px]"
      >
        <div className=" md:grid md:grid-cols-2 xl:grid-cols-3 h-full w-auto mx-auto ">
          <div className=" col-span-1 xl:col-span-2 py-10 pr-20 pl-10   flex flex-col justify-center  lg:items-center ">
            <div className=" ">
              <h2 className=" text-3xl xl:text-4xl text-white font-semibold">
                Hi, i am
              </h2>
              <h1 className="text-4xl xl:text-5xl text-white font-bold mt-3">
                MD Danish
              </h1>
              <h2 className="text-2xl xl:text-3xl text-white font-thin mt-2">
                And I am a{" "}
                <ReactTyped
                  className="ml-2 text-fuchsia-900 font-semibold"
                  strings={[
                    "Frontend Develper",
                    "FullStack Developer",
                    "Experts in Backend ",
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop={true}
                />
              </h2>
              <p className="text-sm xl:text-lg text-white mt-3">
                I am seeking a position as a MERN stack developer where I can
                use my skills in.
              </p>
              <p className="text-wrap md:text-nowrap text-sm xl:text-lg text-white mt-1">
                MongoDB, Express.js, React.js, and Node.js to build modern and
                user-friendly web applications
              </p>
              <p className=" text-sm xl:text-lg text-white mt-1">
                I’m excited about collaborating with a motivated team to create
                innovative solutions that make a real impact.
              </p>
              <div className=" flex  space-x-10 xl:space-x-20 mt-6 text-white text-4xl">
                <IoLogoFacebook className="bg-black h-[30px] xl:h-[50px] w-[30px] xl:w-[50px] p-2 rounded-full hover:bg-fuchsia-900 " />
                <PiInstagramLogoBold className="bg-black h-[30px] xl:h-[50px] w-[30px] xl:w-[50px] p-2 rounded-full hover:bg-fuchsia-900 " />
                <FaYoutube className="bg-black h-[30px] xl:h-[50px] w-[30px] xl:w-[50px] p-2 rounded-full hover:bg-fuchsia-900 " />
                <FaLinkedinIn className="bg-black h-[30px] xl:h-[50px] w-[30px] xl:w-[50px] p-2 rounded-full hover:bg-fuchsia-900 " />
              </div>
              <div className=" mt-7">
                <button className="rounded-full text-xl px-8 py-4 bg-fuchsia-900 text-white hover:bg-fuchsia-600  shadow-lg border-none">
                  <Link to="/contact">Contact Me</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="  md:mb-20 col-span-1 flex md:justify-end xl:justify-center pr-4 xl:pr-0 items-center ">
            <img
              className=" md:block hidden h-[500px] w-[500px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] rounded-full"
              src={danish_img}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="  md:hidden flex justify-center min-w-[600px] sm:w-auto  py-20  ">
        <img
          className="h-[400px] w-[400px] rounded-full"
          src={danish_img}
          alt=""
        />
      </div>
    </>
  );
}

export default Banner;
