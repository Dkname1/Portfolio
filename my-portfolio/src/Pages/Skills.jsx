import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { PiFileSqlLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
 
function Skills() {
  return (
  <>
        <div className="flex flex-col items-center gap-20 py-10  px-16 min-w-[600px] sm:w-auto">
          <h1 className='text-6xl font-semibold text-fuchsia-900'>Skill's</h1>

             <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 ">
               
               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] shadow-lg shadow-orange-400 text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] text-orange-500 hover:scale-105 duration-500 ">
                 <FaHtml5/>
                <p className='text-2xl font-semibold text-gray-800'>HTML</p>
               </div>

               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] shadow-lg shadow-cyan-600  text-cyan-600 hover:scale-105 duration-500 ">
                 <FaCss3Alt/>
                <p className='text-2xl font-semibold text-gray-800'>CSS</p>
               </div>

               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] shadow-lg shadow-amber-400  text-amber-400 hover:scale-105 duration-500 ">
               <BiLogoJavascript />
                <p className='text-2xl font-semibold text-gray-800'>JavaScript</p>
               </div>
               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] shadow-lg shadow-sky-500  text-sky-500 hover:scale-105 duration-500 ">
                <FaReact />
                <p className='text-2xl font-semibold text-gray-800'>React Js</p>
               </div>
               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] shadow-lg  shadow-lime-500  text-lime-500 hover:scale-105 duration-500 ">
               <FaNodeJs />
                <p className='text-2xl font-semibold text-gray-800'>Node Js</p>
               </div>
               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px] lg:text-[120px]  xl:text-[150px]  shadow-lg shadow-gray-500  text-gray-500 hover:scale-105 duration-500 ">
                 <SiExpress />
                <p className='text-2xl font-semibold text-gray-800'>Express Js</p>
               </div>
               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] shadow-lg shadow-lime-900  text-lime-900 hover:scale-105 duration-500 ">
               <BiLogoMongodb />
                <p className='text-2xl font-semibold text-gray-800'>MongoDb</p>
               </div>
               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] shadow-lg shadow-teal-500  text-teal-500 hover:scale-105 duration-500 ">
               <SiTailwindcss />
                <p className='text-2xl font-semibold text-gray-800'>TailwindCss</p>
               </div>
               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] shadow-lg shadow-purple-600  text-purple-600 hover:scale-105 duration-500 ">
               <FaBootstrap />
                <p className='text-2xl font-semibold text-gray-800'>Bootstrap</p>
               </div>

               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] shadow-lg shadow-sky-600 tex  text-sky-500 hover:scale-105 duration-500 ">
               <PiFileSqlLight />
                <p className='text-2xl font-semibold text-gray-800'>SQL</p>
               </div>

               <div className=" flex flex-col justify-center items-center w-[250px] h-[150px] md:w-[290px] md:h-[190px] lg:w-[270px] lg:h-[220px] xl:w-[300px] xl:h-[250px] text-[80px] md:text-[100px]  lg:text-[120px]  xl:text-[150px] shadow-lg shadow-gray-500    text-gray-500 hover:scale-105 duration-500 ">
               <FaGithub />
                <p className='text-2xl font-semibold text-gray-800'>GitHUb</p>
               </div>
          

               
                
               

             </div>
        </div>



      

















  {/* <div className=" pl-10">
     <h1 className=' pl-20 w-[400px] h-[300px] shadow-lg shadow-orange-400 text-[200px] text-orange-500 p-10'> 
      <FaHtml5/>
      </h1>
      </div>
      <h1 className='text-9xl text-orange-500 p-10'> 
      <FaHtml5/>
      </h1> */}
  </>
  )
}

export default Skills