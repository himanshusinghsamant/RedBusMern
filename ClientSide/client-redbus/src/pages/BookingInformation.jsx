import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookingInformation = () => {
  return (
    <section className="mt-[100px] p-[50px] md:flex md:justify-around gap-10">
      <div>
        <div className="border-2 rounded-xl p-4 lg:w-[900px]">
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

        <h1 className="mb-6 mt-16 text-xl font-semibold">
          Enter Traveller Details
        </h1>
        {/* ------------------------------------------------> */}
        <div className="border-2 rounded-xl p-4">
          <div className="font-bold text-xl my-3">Passenger-1 / Seat 16</div>

          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 my-3" htmlFor="">
                Name
              </label>
              <input
                className="border-2 border-gray-500 w-[400px] h-8 p-4 rounded-2xl"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 my-3" htmlFor="">
                Gender
              </label>
              <select
                className="border-2 border-gray-500 w-[200px] h-8 p-4 rounded-2xl"
                name="gender"
              >
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 my-3" htmlFor="">
                Name
              </label>
              <input
                className="border-2 border-gray-500 w-[200px] h-8 p-4 rounded-2xl"
                type="text"
              />
            </div>
          </div>

          {/* ---------------------------------------------------------------->
           */}

          <div className="flex justify-between my-9 flex-wrap">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 my-3" htmlFor="">
                Email ID
              </label>
              <input
                className="border-2 border-gray-500 w-[400px] h-8 p-4 rounded-2xl"
                type="email"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 my-3" htmlFor="">
                Mobile Number
              </label>
              <input
                className="border-2 border-gray-500 w-[300px] h-8 p-4 rounded-2xl"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------> */}
      <div className="md:w-[400px] md:h-[400px] border-2 rounded p-6 space-y-5 flex flex-col  items-center">
        <h3 className="font-semibold text-2xl tracking-wider">
          Fare Details -
        </h3>
        <div className="flex justify-between w-[300px]">
          <h3 className="font-semibold text-lg text-gray-600">Base Fare</h3>
          <h2 className="text-2xl font-bold">Rs 799</h2>
        </div>
        <div className="flex justify-between  w-[300px]">
          <h3 className="font-semibold text-lg text-gray-600">Tax</h3>
          <h2 className="text-2xl font-bold">Rs 150</h2>
        </div>
        <div className="flex justify-between  w-[300px]">
          <h3 className="font-semibold text-lg text-gray-600">Offer Applied</h3>
          <h2 className="text-2xl font-bold">Rs 50</h2>
        </div>

        <hr className="w-[400px] h-[2px] bg-gray-400" />

        <div className="flex justify-between  w-[300px]">
          <h3 className="font-semibold text-lg text-gray-600">Total Price</h3>
          <h2 className="text-2xl font-bold">Rs 899</h2>
        </div>
        <Link to={"/confirmbooking"}>
          <button className=" text-xl mx-5 cursor-pointer border-[1px] border-orange-500 my-5 px-4 py-1 rounded-md hover:text-white hover:bg-orange-500 transition-all duration-200 ease-in-out">
            {" "}
            Proceed to Payment
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BookingInformation;
