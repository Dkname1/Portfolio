import React, { useEffect, useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { ImAndroid } from "react-icons/im";
import { SiBackendless } from "react-icons/si";
import { Link } from "react-router-dom";

function Services() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "GET",
      });

      const res_data = await response.json();
      console.log(res_data);
      setProjectData(res_data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center py-32 gap-24 min-w-[600px] sm:w-auto ">
        <h1 className="text-5xl sm:text-6xl font-sans font-bold text-fuchsia-900 ">
          My Projects
        </h1>

        <div className=" sm:flex m-auto flex-row flex-wrap justify-center items-center gap-20">
          {projectData.map((item) => {
            return (
              <div className="flex flex-col gap-7 hover:bg-gray-50 hover:scale-105 duration-100 items-center p-10 w-[500px] h-[520px] shadow-xl rounded-xl ">
                <h1 className=" text-6xl font-thin">
                  <CgWebsite />
                </h1>
                <h2 className="text-3xl font-semibold">{item.project_name}</h2>
                <p className="text-xl text-wrap text-center ">
                  {item.project_description}
                </p>
                <button className="text-xl px-9 py-3 bg-fuchsia-900 text-white hover:bg-fuchsia-800 rounded-full shadow-lg">
                  <Link>Check</Link>
                </button>
              </div>
            );
          })}

          {/* <div className="flex flex-col gap-7 hover:bg-gray-50 hover:scale-105 duration-100 items-center p-10 w-[500px] h-[520px] shadow-xl">
            <h1 className=" text-6xl font-thin">
              <ImAndroid />
            </h1>
            <h2 className="text-3xl font-semibold">User_Registrstion_App</h2>
            <p className="text-xl text-wrap text-center">
              Provide Android development features typically include user
              interface design, database integration, networking capabilities,
              device compatibility, security measures, performance optimization,
              and optimization, backend integration, push notifications, and
              support for various sensors and hardware components..
            </p>
            <button className="text-xl px-9 py-3 bg-fuchsia-900 text-white hover:bg-fuchsia-800 rounded-full shadow-lg">
              <Link>Check</Link>
            </button>
          </div> */}

          {/* <div className="flex flex-col gap-7 hover:bg-gray-50 hover:scale-105 duration-100 items-center p-10 w-[500px] h-[520px] shadow-xl">
            <h1 className=" text-6xl font-thin">
              <SiBackendless />
            </h1>
            <h2 className="text-3xl font-semibold">E-Commerce_App</h2>
            <p className="text-xl text-wrap text-center">
              Backend development features typically include database
              management, server-side logic implementation, API integration and
              data storage management,authentication and authorization
              mechanisms,logging and monitoring functionalities, and error
              handling procedures.
            </p>
            <button className="text-xl px-9 py-3 bg-fuchsia-900 text-white hover:bg-fuchsia-800 rounded-full shadow-lg">
              <Link>Check</Link>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Services;
