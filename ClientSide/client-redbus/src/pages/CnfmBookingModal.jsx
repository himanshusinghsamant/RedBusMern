import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const CnfmBookingModal = () => {
  return (
    <div className="my-[150px] px-[50px] md:flex justify-center">
      <section className="border-2 rounded-2xl md:w-[70%] shadow-2xl p-5 flex flex-col items-center">
        <div className=" mb-7 flex flex-col items-center">
          <span className="text-6xl text-green-500 my-4">
            <FaRegCheckCircle />
          </span>
          <h1 className="my-4 text-4xl font-semibold">Booking has been confirmed</h1>
         <div className="space-y-3">
         <ul className="flex">
            <li className="text-gray-500">Ticket : </li>
            <li className="text-gray-500">: 97WFR88</li>
          </ul>
          <ul className="flex">
            <li className="text-gray-500">Payment ID :</li>
            <li className="text-gray-500">: 97-999898-IH7878</li>
          </ul>
          <ul className="flex">
            <li className="text-gray-500">Passenger Details :</li>
            <li className="text-gray-500">: Megha Agarwal, Female, 25 yrs </li>
          </ul>
          <ul className="flex">
            <li className="text-gray-500">Contact Details :</li>
            <li className="text-gray-500">: 8797646464</li>
          </ul>
         </div>
        </div>
        <div className="border-2 rounded-xl p-4 lg:w-[700px] my-[50px]">
          <div className="font-bold text-xl my-3">XYYYYZZZZZ</div>
          <div className="flex items-center my-3">
            <span className="px-2 py-1 rounded-3xl bg-green-600 font-semibold mr-2 flex items-center justify-between text-white">
              <CiStar /> 2.5
            </span>
            <p className="text-gray-500">Rating</p>
          </div>
          <div className="my-3">
            <ul className="flex">
              <li className="px-2 border-r-2 border-gray-400 text-gray-500">
                gwgeigoegfogw
              </li>
              <li className="px-2 border-x-2  border-gray-400 text-gray-500">
                10 Seats Left
              </li>
              <li className="px-2 border-l-2  border-gray-400 text-gray-500">
                0 Window Seats
              </li>
            </ul>
          </div>
          <div className="my-3">
            <ul className="flex">
              <li className="px-2 border-r-2 border-gray-400 text-gray-500 font-semibold text-lg">
                ogwgowigvo\ogwrv
              </li>
              <li className="px-2 border-x-2  border-gray-400 text-gray-500">
                - oihoriwgwipigfp -
              </li>
              <li className="px-2 border-l-2  border-gray-400 text-gray-500 font-semibold text-lg">
                llwoihie
              </li>
            </ul>
          </div>

          <div className="flex justify-around w-[300px] mt-10">
            <div>
              <h1 className="text-gray-500">from</h1>
              <h2>Delhi</h2>
            </div>
            <div>
              <h1 className="text-gray-500">to</h1>
              <h2>Lucknow</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CnfmBookingModal;
