import React from 'react'
import rb_logo from '../images/redbus-logo-1.jpg'
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {
  return (
    <div>
       <div>
      <footer className="bg-[#1A1A1A] mt-[100px]">
        <section className=" ">
          <div className="   lg:mx-[5%] lg:px-10  text-white py-10 flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="w-[70%] lg:w-[240px] lg:my-[80px]">
              <img className="mb-7 rounded-full" src={rb_logo} alt="" />
              <p>
              redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.
              </p>
            </div>
            <div className="w-[70%] lg:w-[240px] my-[40px] lg:my-[80px] md:my-[60px]">
              <h2 className="font-bold text-lg mb-4">About RedBus</h2>
              <ul className="grid grid-cols-3 lg:grid-cols-1  ">
              <li>About Us</li>
              <li>Investor Relations</li>
              <li>Contact Us</li>
              <li>Mpbile Version</li>
              <li>Redbus on Mobile</li>
              <li>Sitemap</li>
              <li>Offers</li>
              <li>Careers</li>
              <li>Values</li>
              </ul>
            </div>
            <div className="w-[70%] lg:w-[240px] my-[40px] lg:my-[80px] md:my-[60px]">
              <h2 className="font-bold text-lg mb-4">Info</h2>
              <ul className="grid grid-cols-3 lg:grid-cols-1  ">
              <li>T & C</li>
              <li>Privacy policy</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Bus operator registration</li>
              <li>user agreement</li>
            
              </ul>
            </div>
            <div className="w-[70%] lg:w-[240px] lg:my-[80px] ">
              <h2 className="font-bold text-lg mb-4">Our Partners</h2>
              <ul className="flex flex-col gap-1">
               <li>Goibibo Bus</li>
               <li>Goibibo Hotels</li>
               <li>Makemytrip Hotels</li>
              </ul>
              <span className="flex justify-start gap-4 mt-11">
              <AiOutlineInstagram/>
              <FiFacebook/>
              <RiTwitterXLine/>
              <SlSocialLinkedin/>
              </span>
            </div>
          </div>
        </section>
        <div className=" hidden md:block p-10 text-center text-white ">
          <p>
            Copyright @ {new Date().getFullYear()} Redbus India Pvt Ltd. All rights reserved
          </p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer
