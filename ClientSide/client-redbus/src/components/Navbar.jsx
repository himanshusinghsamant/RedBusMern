import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bus_logo from "../images/redbus-logo-2.jpg";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [changeBgColor, setChangeBgColor] = useState(false);

  function handleNavbarToggleOpen() {
    setToggle(true);
  }
  function handleNavbarToggleClose() {
    setToggle(false);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 100) {
        setChangeBgColor(true);
      } else {
        setChangeBgColor(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <nav className="h-[120px] w-[100%] bg-white px-[100px] flex items-center justify-between fixed top-0  z-50">
          <span className="flex items-center">
            {" "}
            <Link to={"/"}>
              <img className="w-[120px] cursor-pointer" src={bus_logo} alt="" />
            </Link>
            <Link to={"/"}>
              <li className="list-none font-semibold text-xl cursor-pointer mx-8">
                Bus Tickets
              </li>
            </Link>
            <Link to={'/contact'}>
            <li className="list-none font-semibold text-xl cursor-pointer mx-8">
              Contact Us
            </li>
            </Link>
          </span>
          <div>
            <ul className="flex items-center">
              <Link to={"/help"}>
                <li className="flex items-center text-xl mx-5 cursor-pointer">
                  <TfiHeadphoneAlt /> <p className="ml-2">Help</p>
                </li>
              </Link>
              <Link to={"/login"}>
                {" "}
                <li className="flex items-center text-xl mx-5 cursor-pointer border-[1px] px-4 py-1 rounded-md hover:text-white hover:bg-green-500 transition-all duration-200 ease-in-out">
                  {" "}
                  Login
                </li>
              </Link>
              <Link to={"/register"}>
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
      {toggle ? (
        <div 
         className="fixed top-0 z-[100] bg-white w-[100%] h-[100vh] ">
          <nav className="h-[100vh] w-[100%] px-[100px] flex flex-col items-center">
            <span className="flex flex-col items-center space-y-8 mt-8">
              {" "}
              <Link to={"/"}>
                <img
                  onClick={handleNavbarToggleClose}
                  className="w-[120px] cursor-pointer"
                  src={bus_logo}
                  alt=""
                />
              </Link>
              <Link to={"/"}>
                <li
                  onClick={handleNavbarToggleClose}
                  className="list-none font-semibold text-xl cursor-pointer mx-8"
                >
                  Bus Tickets
                </li>
              </Link>
              <Link to={'/contact'}>
              <li
                onClick={handleNavbarToggleClose}
                className="list-none font-semibold text-xl cursor-pointer mx-8"
              >
                Contact Us
              </li>
              </Link>
            </span>
            <div className="mt-8">
              <ul className="flex flex-col items-center space-y-8">
                <Link to={"/help"}>
                  <li
                    onClick={handleNavbarToggleClose}
                    className="flex items-center text-xl mx-5 cursor-pointer"
                  >
                    <TfiHeadphoneAlt /> <p className="ml-2">Help</p>
                  </li>
                </Link>
                <Link to={"/login"}>
                  {" "}
                  <li
                    onClick={handleNavbarToggleClose}
                    className="flex items-center text-xl mx-5 cursor-pointer border-[1px] px-4 py-1 rounded-md hover:text-white hover:bg-green-500 transition-all duration-200 ease-in-out"
                  >
                    {" "}
                    Login
                  </li>
                </Link>
                <Link to={"/register"}>
                  <li
                    onClick={handleNavbarToggleClose}
                    className="flex items-center text-xl mx-5 cursor-pointer border-[1px] px-4 py-1 rounded-md hover:text-white hover:bg-orange-500 transition-all duration-200 ease-in-out"
                  >
                    {" "}
                    Register
                  </li>
                </Link>
                <li
                  onClick={handleNavbarToggleClose}
                  className="text-4xl cursor-pointer mx-5"
                >
                  <CgProfile />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          backgroundColor: `${changeBgColor ? "white" : ""}`,
        }}
        className="fixed top-0 z-[150] h-[80px] w-[100%] lg:hidden"
      >
        <div className="float-end mt-4 mr-2">
          {!toggle ? (
            <div onClick={handleNavbarToggleOpen} className="text-3xl m-2 cursor-pointer">
              <TfiMenuAlt />
            </div>
          ) : (
            <div onClick={handleNavbarToggleClose} className="text-4xl m-2 cursor-pointer">
              <RxCrossCircled />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
