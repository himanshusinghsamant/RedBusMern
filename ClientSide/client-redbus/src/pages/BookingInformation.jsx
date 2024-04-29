import React from "react";
import { CiStar } from "react-icons/ci";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {useDispatch} from "react-redux";
import { setPaymentResult } from "../redux/CounterSlice";
import { setId } from "../redux/CounterSlice";


const BookingInformation =() => {
  const { id, selectSeat } = useParams();
  const dispatch = useDispatch();
  dispatch(setId(id));
  console.log()

  const [singleData, setSingleData] = useState();
  const [passengerDetails, setPassengerDetails] = useState({
    name: "",
    gender: "",
    age: "",
    email: "",
    mobileNumber: "",
  });

  let TotalFareAmount = singleData?.busFare + 150 + 50;

  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/getSingleData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          }
        );
        const json = await response.json();
        // console.log(json.data);
        setSingleData(json.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  // console.log(passengerDetails);
  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51P6wqOSIcynSEhdOaCJx4GrN9BJkSpl5f80yepX6My14rGtnKwxQuco6B3sOkMrBDYEpbAqinyD6weYr3wZcRUNo00WILHtaEC"
    );

    try {
      const response = await fetch(
        "http://localhost:5000/api/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },  
          body: JSON.stringify({
            passengerDetails,
            TotalFareAmount,
          }),
        }
      );
      const session = await response.json();

      const sessionId = session.id; // Assuming the session ID is returned as 'id'

      // Handle data and proceed with payment
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId, // Pass sessionId to redirectToCheckout
      });
      dispatch(setPaymentResult(result))
      console.log(result);
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // console.log(TotalFareAmount)

  return (
    <>
    <section className="mt-[100px] p-[50px] md:flex md:justify-around gap-10">
      <div>
        {singleData !== undefined && (
          <div className="border-2 rounded-xl p-4 lg:w-[900px]">
            <div className="font-bold text-xl my-3">{singleData?.busName}</div>
            <div className="flex items-center my-3">
              <span className="px-2 py-1 rounded-3xl bg-green-600 font-semibold mr-2 flex items-center justify-between text-white">
                <CiStar /> {singleData?.rating}
              </span>
              <p className="text-gray-500">Rating</p>
            </div>
            <div className="my-3">
              <ul className="flex">
                <li className="px-2 border-r-2 border-gray-400 text-gray-500">
                  {singleData?.category}
                </li>
                <li className="px-2 border-x-2  border-gray-400 text-gray-500">
                  {singleData?.availableSeats} Seats Left
                </li>
                <li className="px-2 border-l-2  border-gray-400 text-gray-500">
                  {singleData?.windowSeats} Window Seats
                </li>
              </ul>
            </div>
            <div className="my-3">
              <ul className="flex">
                <li className="px-2 border-r-2 border-gray-400 text-gray-500 font-semibold text-lg">
                  {singleData?.departureTime}
                </li>
                <li className="px-2 border-x-2  border-gray-400 text-gray-500">
                  - {singleData?.travelDuration} -
                </li>
                <li className="px-2 border-l-2  border-gray-400 text-gray-500 font-semibold text-lg">
                  {singleData?.arrivalTime}
                </li>
              </ul>
            </div>

            <div className="flex justify-around w-[300px] mt-10">
              <div>
                <h1 className="text-gray-500">from</h1>
                <h2 className="uppercase font-semibold">{singleData?.from}</h2>
              </div>
              <div>
                <h1 className="text-gray-500">to</h1>
                <h2 className="uppercase font-semibold">{singleData?.to}</h2>
              </div>
            </div>
          </div>
        )}

        <h1 className="mb-6 mt-16 text-xl font-semibold">
          Enter Traveller Details
        </h1>
        {/* ------------------------------------------------> */}
        <form action="">
          <div className="border-2 rounded-xl p-4">
            <div className="font-bold text-xl my-3">
              Passenger / Seat {selectSeat}
            </div>

            <div className="flex justify-between flex-wrap">
              <div className="flex flex-col w-auto">
                <label className="font-semibold text-gray-600 my-3" htmlFor="">
                  Name
                </label>
                <input
                  onChange={handleChange}
                  value={passengerDetails.name}
                  name="name"
                  id="name"
                  className="border-2 border-gray-500 md:w-[400px] h-8 p-4 rounded-2xl"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-600 my-3" htmlFor="">
                  Gender
                </label>
                <select
                  onChange={handleChange}
                  value={passengerDetails.gender}
                  name="gender"
                  id="gender"
                  className="border-2 border-gray-500 md:w-[200px] h-9 px-4 rounded-2xl"
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="felmale">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-600 my-3" htmlFor="">
                  Age(in yrs)
                </label>
                <input
                  onChange={handleChange}
                  value={passengerDetails.age}
                  name="age"
                  id="age"
                  className="border-2 border-gray-500 md:w-[200px] h-8 p-4 rounded-2xl"
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
                  onChange={handleChange}
                  value={passengerDetails.email}
                  name="email"
                  id="email"
                  className="border-2 border-gray-500 md:w-[400px] h-8 p-4 rounded-2xl"
                  type="email"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-600 my-3" htmlFor="">
                  Mobile Number
                </label>
                <input
                  onChange={handleChange}
                  value={passengerDetails.mobileNumber}
                  name="mobileNumber"
                  id="mobileNumber"
                  className="border-2 border-gray-500 md:w-[300px] h-8 p-4 rounded-2xl"
                  type="number"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* ---------------------------------------------------------> */}
      <div className="md:w-[400px] md:h-[400px] border-2 rounded p-6 space-y-5 flex flex-col  items-center">
        <h3 className="font-semibold text-xl  md:text-2xl tracking-wider">
          Fare Details -
        </h3>
        <div className="flex justify-between w-full ">
          <h3 className="font-semibold text-base md:text-lg text-gray-600">Base Fare</h3>
          <h2 className="text-base md:text-xl font-bold">Rs {singleData?.busFare}</h2>
        </div>
        <div className="flex justify-between  w-full">
          <h3 className="font-semibold  text-base md:text-lg text-gray-600">Tax</h3>
          <h2 className="text-base md:text-xl font-bold">Rs 150</h2>
        </div>
        <div className="flex justify-between  w-full">
          <h3 className="font-semibold  text-base md:text-lg text-gray-600">Offer Applied</h3>
          <h2 className="text-base md:text-xl font-bold">Rs 50</h2>
        </div>

        <hr className="w-full h-[2px] bg-gray-400" />

        <div className="flex justify-between  w-full">
          <h3 className="font-semibold  text-base md:text-lg text-gray-600">Total Price</h3>
          <h2 className="text-base md:text-2xl font-bold">Rs {TotalFareAmount}</h2>
        </div>
        {/* <Link to={"/confirmbooking"}> */}
        <button
          disabled={
            !passengerDetails.name ||
            !passengerDetails.gender ||
            !passengerDetails.age ||
            !passengerDetails.email ||
            !passengerDetails.mobileNumber ||
            !TotalFareAmount
          }
          onClick={handlePayment}
          className="text-xl mx-5 cursor-pointer border-[1px] border-orange-500 my-5 px-4 py-1 rounded-md hover:text-white hover:bg-orange-500 transition-all duration-200 ease-in-out"
        >
          {" "}
          Proceed to Payment
        </button>
        {/* </Link> */}
      </div>
    </section>
     {/* <div>
     <button className="text-xl mx-5 cursor-pointer border-[1px] border-orange-500 my-5 px-4 py-1 rounded-md hover:text-white hover:bg-orange-500 transition-all duration-200 ease-in-out" onClick={()=>dispatch(setIncrement())}>Increment</button>
     <h1 className="text-xl">{count}</h1>
   </div> */}
   </>
  );
};

export default BookingInformation;
