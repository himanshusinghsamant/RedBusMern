import React from "react";
import { CiStar } from "react-icons/ci";
import BusSeats from "./BusSeats";
import { useState } from "react";

const BusTicketDetails = ({ details, index }) => {
  const [seatDetails, setSeatDetails] = useState(false);

  function handleViewSeats() {
    setSeatDetails(!seatDetails);
  }

  return (
    <div>
      <section
        key={index}
        className="flex border-2 rounded-xl p-4 justify-between"
      >
        <div>
          <div className="font-bold text-xl my-3">
            {details.busCompany.name}
          </div>
          <div className="flex items-center my-3">
            <span className="px-2 py-1 rounded-3xl bg-green-600 font-semibold mr-2 flex items-center justify-between text-white">
              <CiStar /> {details.busCompany.rating}
            </span>
            <p className="text-gray-500">Rating</p>
          </div>
          <div className="my-3">
            <ul className="flex">
              <li className="px-2 border-r-2 border-gray-400 text-gray-500">
                {details.busType.name}
              </li>
              <li className="px-2 border-x-2  border-gray-400 text-gray-500">
                {details.busType.availableSeats} Seats Left
              </li>
              <li className="px-2 border-l-2  border-gray-400 text-gray-500">
                {details.busType.windowSeats} Window Seats
              </li>
            </ul>
          </div>
          <div className="my-3">
            <ul className="flex">
              <li className="px-2 border-r-2 border-gray-400 text-gray-500 font-semibold text-lg">
                {details.schedule.departureTime}
              </li>
              <li className="px-2 border-x-2  border-gray-400 text-gray-500">
                - {details.schedule.travelDuration} -
              </li>
              <li className="px-2 border-l-2  border-gray-400 text-gray-500 font-semibold text-lg">
                {details.schedule.arrivalTime}
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <ul className="flex">
              {details?.amenities?.map((items, index) => {
                return (
                  <li
                    key={index}
                    className="px-4 border-x-[1px] border-red-400 text-blue-500 font-semibold text-lg cursor-pointer"
                  >
                    {items}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------> */}

        <div className="flex justify-center items-center border-l-2 p-10">
          <ul className="flex flex-col justify-center items-center space-y-4">
            <li className="text-lg font-semibold">Trip Cost</li>
            <li className="text-3xl font-semibold">
              {details.tripCost.currency}
              {details.tripCost.amount}
            </li>
           {
            !seatDetails ?
            ( <li
              onClick={handleViewSeats}
              className="flex items-center text-xl mx-5 cursor-pointer border-[1px] border-orange-500 px-4 py-1 rounded-md hover:text-white hover:bg-orange-500 transition-all duration-200 ease-in-out"
            >
              {" "}
              View Seats
            </li>) :
            ( <li
              onClick={handleViewSeats}
              className="flex items-center text-xl mx-5 cursor-pointer border-[1px] border-gray-500 px-4 py-1 rounded-md hover:text-white hover:bg-gray-500 transition-all duration-200 ease-in-out"
            >
              {" "}
              Hide Seats
            </li>)
           }
          </ul>
        </div>
      </section>
      <div>
        <BusSeats seatDetails={seatDetails} details={details} />
      </div>
    </div>
  );
};

export default BusTicketDetails;
