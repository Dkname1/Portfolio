import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
  <>
  <div className="bg-gray-100 min-w-[600px] ">
    <div className=" mt-20 py-7 max-w-[1540px] mx-auto lg:flex justify-between  p-2">
           <div className="text-lg flex justify-center items-center text-gray-500 tracking-wider">
            <p>@2024 Md Danish <span>All Rights Reserved</span></p>
           </div>

           <div className="list-none text-lg flex justify-center items-center gap-20  mt-10  lg:mt-0  ">
             <li><Link className='hover:text-gray-500' to="/about">About</Link></li>
             <li><Link className='hover:text-gray-500' to="/portfolio">Services</Link></li>
             <li><Link className='hover:text-gray-500' to="/contact">Contact</Link></li>
             <li><Link className='hover:text-gray-500' to="/about">Policy</Link></li>


           </div>
    </div>
    </div>

  </>
  )
}

export default Footer