import React from "react";
import { Link } from "react-router-dom";
import bus_logo from "../images/redbus-logo-2.jpg";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <nav className=" h-[120px] w-[100%] bg-white px-[100px] flex items-center justify-between fixed top-0  z-50">
        <span className="flex items-center">
          {" "}
         <Link to={'/'}>
         <img className="w-[120px] cursor-pointer" src={bus_logo} alt="" />
         </Link>
         <Link to={'/'}>
         <li className="list-none font-semibold text-xl cursor-pointer mx-8">
            Bus Tickets
          </li>
         </Link>
          
          <li className="list-none font-semibold text-xl cursor-pointer mx-8">
            Contact Us
          </li>
        </span>
        <div>
          <ul className="flex items-center">
            <Link to={'/help'}>
            <li className="flex items-center text-xl mx-5 cursor-pointer">
              <TfiHeadphoneAlt /> <p className="ml-2">Help</p>
            </li>
            </Link>
           <Link to={'/login'}> <li className="flex items-center text-xl mx-5 cursor-pointer border-[1px] px-4 py-1 rounded-md hover:text-white hover:bg-green-500 transition-all duration-200 ease-in-out">
              {" "}
             Login
            </li></Link>
           <Link to={'/register'}>
           <li className="flex items-center text-xl mx-5 cursor-pointer border-[1px] px-4 py-1 rounded-md hover:text-white hover:bg-orange-500 transition-all duration-200 ease-in-out">
              {" "}
             Register
            </li>
           </Link>
            <li className="text-4xl cursor-pointer mx-5">
              <CgProfile />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
