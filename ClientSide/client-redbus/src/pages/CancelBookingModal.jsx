import React from "react";
// import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const CancelBookingModal = () => {
  return (
    <div className="my-[150px] px-[50px] md:flex justify-center">
      <section className="border-2 rounded-2xl md:w-[70%] shadow-2xl p-5 flex flex-col items-center">
        <div className=" mb-7 flex flex-col items-center">
          <span className="text-6xl text-red-500 my-4">
            <RxCrossCircled/>
          </span>
          <h1 className="my-4 text-4xl font-semibold">
            Booking has been canceled !
          </h1>
        </div>
      </section>
    </div>
  );
};

export default CancelBookingModal;
