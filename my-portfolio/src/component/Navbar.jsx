import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { ReactTyped } from "react-typed";
  

function Navbar() {
 const [line, setLine]=useState("homes")
 const [toggle, setToggle]=useState(false)
 const [logo, setLogo]=useState({title:"Md Danish"})
 const [button, setButton]=useState({
              title:"Hire Me",
 })
 const [navmenu, setNavMenu]=useState(
      [
       {id:1, title:"Home", Link:"/", argu:"homes", },
       {id:2, title:"About", Link:"/about", argu:"abouts", },
       {id:3, title:"Skill", Link:"/skill", argu:"skills", },
       {id:4, title:"Services", Link:"/portfolio", argu:"portfolios", },
       {id:5,title:"Contact", Link:"/contact", argu:"contacts", },
       ]
 )
  return (
     <> 
   <div className="flex justify-between py-6 px-14 shadow-md  w-[600px] sm:w-[100%]">
               <div className=" text-2xl md:text-3xl font-semibold">
                  <h2 className=' hidden md:block text-fuchsia-900'>{logo.title}</h2>
                  <ReactTyped className='block md:hidden text-fuchsia-900'
                            strings={[`${logo.title}`]}
                            typeSpeed={100}
                            backSpeed={80}
                            loop
                   ></ReactTyped>
               </div>

<div  className={`md:static  absolute bg-gray-100  md:bg-white 
duration-500 ${toggle ?`top-[-100%]`:`top-[9.4%]` }  left-0  w-[600px] sm:w-full md:w-auto  flex md:items-center h-auto md:min-h-fit `}>

   <ul className="  flex md:flex-row flex-col list-none text-3xl md:text-sm lg:text-xl md:space-x-4 lg:space-x-10 p-16  md:p-0">
   
   {navmenu.map((list)=>{
        return(
              <li key={list.id} className='mt-5 md:mt-0 hover:text-gray-600'>
              <Link onClick={()=>setLine(`${list.argu}`)} to={list.Link}>{list.title}</Link> 
             {line === `${list.argu}` ? <hr className='w-[60%] h-[3px]  bg-fuchsia-900 top-8'/> :<></>}
              </li>
        )
   })}
 </ul>   
 </div>      
              
    {/* <li className='mt-5 md:mt-0'>
      <Link className='hover:text-gray-500' onClick={()=>setLine("abouts")} to="/about">About</Link> 
       {line === 'abouts' ? <hr className='flex w-[80%] h-[3px] bg-[#FF4141] top-8'/> :<></>}
   </li>
                 
<li className='mt-5 md:mt-0 '>
     <Link className='hover:text-gray-500'  onClick={()=>setLine("skills")} to="/skill">Skill</Link> 
     {line === 'skills' ? <hr className='flex w-[80%] h-[3px] bg-[#FF4141] top-8'/> :<></>}
 </li>
                 <li className='mt-5 md:mt-0 '>
                     <Link className='hover:text-gray-500'  onClick={()=>setLine("portfolios")} to="/portfolio">Portfolio</Link>
                     {line === 'portfolios' ? <hr className='flex w-[80%] h-[3px] bg-[#FF4141] top-8'/> :<></>} 
                 </li>
                 <li className='mt-5 md:mt-0 '>
                     <Link className='hover:text-gray-500'  onClick={()=>setLine("contacts")} to="/contact">Contact</Link> 
                     {line === 'contacts' ? <hr className='flex w-[80%] h-[3px] bg-[#FF4141] top-8'/> :<></>}
                 </li> */}
                 
              
              
                
              
              
              

               <div className='flex items-center'>
               <button className=' md:text-xl  md:font-semibold border  shadow-sm border-gray-300  px-4 md:px-6 py-2 rounded-full text-fuchsia-900 hover:text-fuchsia-600 font-semibold hover:bg-gray-50'>{button.title}</button>
               <div className="ml-6 md:m-0">
               {toggle ? <RiMenuAddFill onClick={()=>setToggle(!toggle)} className='text-3xl  text-black md:hidden block' />:<RxCross2 onClick={()=>setToggle(!toggle)} className='text-3xl md:hidden block text-black'/>}
               </div>

               </div>

        </div>
     </>
  )
}

export default Navbar