import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PiSteeringWheelBold } from "react-icons/pi";

const BusSeats = ({ seatDetails, details }) => {
  const [selectedOption, setSelectedOption] = useState(0);

  function handleOptionClick(e) {
    setSelectedOption(e);
  }

  console.log(details);

  if (seatDetails) {
    return (
      <div className=" bg-slate-500 border-2 rounded-xl p-2">
        <h1 className="font-bold text-2xl tracking-widest m-3 text-white">
          Select Seats
        </h1>
        <section className="md:flex w-[100%] md:justify-around py-3 text-white">
          <div className=" p-3">
            <ul
              className="flex
      "
            >
              <li className="px-3 py-1 border-white border-2 rounded-lg bg-slate-600 mx-2">
                Seats Price
              </li>
              {details?.selectseats?.seatprice?.map((price, index) => {
                return (
                  <li
                    onClick={() => handleOptionClick(index)}
                    className={`px-3 py-1 border-white border-2 rounded-lg cursor-pointer mx-2 ${
                      selectedOption === index ? "bg-black" : ""
                    } hover:bg-black hover:border-black transition-all duration-200 ease-in-out`}
                  >
                    {price}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-3 font-semibold text-xl">Seat Legend</h2>
            <ul className="grid grid-cols-2 gap-3">
              <li>
                <sapn className="bg-white px-3 rounded-lg mx-2"></sapn>{" "}
                Available
              </li>
              <li>
                <sapn className="bg-yellow-500 px-3 rounded-lg mx-2"></sapn> Un
                Available
              </li>
              <li>
                <sapn className="bg-purple-400 px-3 rounded-lg mx-2"></sapn>Male
              </li>
              <li>
                <sapn className="bg-pink-500 px-3 rounded-lg mx-2"></sapn>{" "}
                Female
              </li>
            </ul>
          </div>
        </section>
        <section className="md:flex md:justify-around my-7">
          <div className="mt-10">
            <span className="bg-white p-2 rounded font-semibold">
              Click on an Available seat to proceed with your transaction.
            </span>
            <div className="flex border-2 border-white rounded mt-8">
              <div className="text-white text-3xl m-3">
                <PiSteeringWheelBold />
              </div>
              <div className="border-l-2 border-white grid grid-cols-10 gap-3 py-5 px-3">
                {details.selectseats.seats.map((seat, index) => {
                  return (
                    <h5
                      className="border-2 border-white rounded-md text-center px-[2px] py-[1px] cursor-pointer text-white font-extrabold hover:border-green-500"
                      key={index}
                    >
                      {seat}
                    </h5>
                  );
                })}
              </div>
            </div>
            <div></div>
          </div>
          <div className=" border-2 rounded p-3 text-white">
            <h3 className="font-bold text-xl tracking-wider">
              Boarding and Dropping
            </h3>
            <div>
              <div className="my-5">
                <div className="flex justify-between my-4">
                  <span>
                    <h1 className="font-bold text-white">Delhi</h1>
                    <p className="text-gray-300 text-sm">delhi metro station</p>
                  </span>
                  <span className="text-white font-bold">12:00</span>
                </div>
                <div className="flex justify-between my-4">
                  <span>
                    <h1 className="font-bold text-white">Lucknow</h1>
                    <p className="text-gray-300 text-sm">charbhag bus station, lucknow</p>
                  </span>
                  <span className="text-white font-bold">20:30</span>
                </div>
              </div>

              <div className="flex justify-between border-y-2 py-3 border-white ">
                <h4 className="text-white font-bold text-xl">Seat No.</h4>
                <h5 className="text-white font-bold">10</h5>
              </div>
              <span className="text-white font-bold text-xl">Fare details</span>
              <div className="flex justify-between my-4">
                  <span>
                    <h1 className="font-bold text-white">Amount</h1>
                    <p className="text-gray-300 text-sm">charbhag bus station, lucknow</p>
                  </span>
                  <span className="text-white font-bold">INR- 850.00</span>
                </div>
            </div>
            <Link to={"/bookinginformation"}>
              <li className="flex items-center text-xl mx-5 cursor-pointer border-[1px] border-orange-500 my-5 px-4 py-1 rounded-md hover:text-white hover:bg-orange-500 transition-all duration-200 ease-in-out">
                {" "}
                Proceed to Booking
              </li>
            </Link>
          </div>
        </section>
      </div>
    );
  } else {
    return "";
  }
};

export default BusSeats;
