import React from "react";
import { useState } from "react";
import bgImg from "../images/redbus-bg-img-1.png";
import redBus_logo from "../images/redbus-logo.jpg";
import { FaCar } from "react-icons/fa";
import { indianStates } from "../datas/StatesData";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import bus_image from "../images/bus-image.png";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const trendingOffersData = [
  {
    title: "BUS",
    title_2: "Save up to Rs 250 on bus tickets",
    valid: "Valid till 30 Apr",
    option: "FIRST",
    color: "green",
  },
  {
    title: "BUS",
    title_2: "Save up to Rs 300 on bus AP, TS route",
    valid: "Valid till 30 Apr",
    option: "SUPERHIT",
    color: "red",
  },
  {
    title: "BUS",
    title_2: "Save up to Rs 300 on Delhi, North, Gujarat,",
    valid: "Valid till 30 Apr",
    option: "BUS300",
    color: "purple",
  },
  {
    title: "BUS",
    title_2: "Save up to Rs 200 on Karnataka,Tamil",
    valid: "Valid till 30 Apr",
    option: "CASH200",
    color: "orange",
  },
];

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    if (inputValue) {
      const filtered = indianStates.filter((state) =>
        state.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredStates(filtered);
    } else {
      setFilteredStates([]);
    }
  };

  console.log(filteredStates);

  return (
    <main>
      <div className="mt-[150px] md:my-[100px] md:relative">
        <img
          className="w-[100%] md:h-[450px] md:object-cover md:object-top"
          src={bgImg}
          alt=""
        />

        <div className=" bg-white border-2 rounded-3xl p-5 m-4 flex flex-col md:flex-row md:justify-around md:w-[80%] md:absolute -bottom-[19%] left-[9%] shadow-2xl z-20">
          <div className="flex items-center justify- my-3">
            <span className="text-xl mr-4">
              <FaCar />
            </span>
            <div className="flex justify-around items-center relative">
              <label className="mr-4" htmlFor="">
                From
              </label>
              <input
                className="border-[1px] rounded-md p-4"
                type="text"
                value={searchInput}
                onChange={handleInputChange}
              />
              {searchInput && (
                <div className="absolute top-[70px] left-[52px]">
                  <select
                    className="border-[1px] rounded-md p-4 w-[200px]"
                    multiple
                  >
                    {filteredStates.map((state, index) => (
                      <option
                        className="my-3 cursor-pointer"
                        key={index}
                        value={state.name}
                      >
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center my-3">
            <span className="text-xl mr-4">
              <FaCar />
            </span>
            <div className="flex justify-around items-center relative">
              <label className="mr-4" htmlFor="">
                To
              </label>
              <input
                className="border-[1px] rounded-md p-4"
                type="text"
                value={searchInput}
                onChange={handleInputChange}
              />
              {searchInput && (
                <div className="absolute top-[70px] left-[52px]">
                  <select
                    className="border-[1px] rounded-md p-4 w-[200px]"
                    multiple
                  >
                    {filteredStates.map((state, index) => (
                      <option
                        className="my-3 cursor-pointer"
                        key={index}
                        value={state.name}
                      >
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center my-3">
            <span className="text-xl mr-4">
              <FaRegCalendarAlt />
            </span>
            <div className="flex justify-around items-center relative">
              <label className="mr-4" htmlFor="">
                Date
              </label>

              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  datepicker
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
          </div>
          <div className="my-3 md:m-5">
           <Link to={'/bustickets'}>
           <button className="border-2 rounded-lg hover:border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 hoover text-lg font-semibold transition-all duration-200 ease-in-out tracking-widest">
              Search
            </button>
           </Link>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------> */}

      <section className="p-5 md:px-[50px] lg:p-[100px]">
        <div className="shadow-2xl rounded-3xl p-10">
          <h1 className="text-3xl tracking-widest mb-10">TRENDING OFFERS</h1>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingOffersData?.map((item, index) => {
              return (
                <div className="bg-purple-700 rounded-lg p-5 text-white space-y-3">
                  <span className="bg-purple-500 rounded-full px-3 py-1">
                    {item.title}
                  </span>
                  <ul>
                    <li className="text-lg font-bold">{item.title_2}</li>
                    <li>{item.valid}</li>
                  </ul>

                  <button className="bg-purple-500 rounded-lg px-3 py-1">
                    {item.option}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------> */}

      <section className="p-5 md:px-[50px] lg:p-[100px] grid grid-cols-1 lg:grid-cols-2 gap-6 my-[100px]">
        <div className="space-y-10">
          <span className="text-5xl font-semibold">
            NOW, GET MORE THAN JUST BUS TICKETS WITH REDBUS!
          </span>
          <span className="text-red-500 flex items-center">
            <img className="w-[150px] rounded-full" src={redBus_logo} alt="" />
            <h3 className="font-bold tracking-widest text-lg ml-4">
              Bus Tickets
            </h3>
          </span>
          <p className="tracking-widest">
            Book IRCTC Train Tickets on redRail simple & superfast booking
            process with no service fee + no payment gateway charge.
          </p>
          <div className="flex flex-col space-y-3">
            <span className="text-xl font-semibold">
              Authorised RED BUS Partner
            </span>
            <span className="text-xl font-semibold">
              Instant refunds on UPI payments
            </span>
            <span className="text-xl font-semibold">
              Hassle- free customer support
            </span>
          </div>
          <button className=" flex items-center bg-orange-600 px-5 py-3 tracking-widest text-white font-semibold text-xl rounded-3xl">
            Book Train Tickets{" "}
            <span className="ml-3">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
        <div>
          <img src={bus_image} alt="" />
        </div>
      </section>

      {/* ------------------------------------------------------------------------------> */}

      <section className="px-5 md:px-[50px] lg:p-[100px] md:mt-[150px] lg:mt-[100px] md:flex md:justify-center md:relative">
        <img
        className="hidden md:block"
          src="https://s1.rdbuz.com/web/images/homeV2/appinstall/appInstallbg.svg"
          alt=""
        />
        <div className="md:absolute lg:left-[15%] lg:top-[16%] md:-top-[43%] p-7">
          <h4 className="font-semibold text-5xl lg:text-white mb-7 tracking-wide">ENJOY THE APP!</h4>
          <div className="bg-white rounded-3xl p-7 space-y-7">
            <ul className="space-y-5 text-gray-500">
              <li className="text-2xl tracking-wider">Quick access</li>
              <li className="text-2xl tracking-wider">Superior live tracking</li>
            </ul>
            <div className="flex">
              <div className="space-y-3 border-r-[2px] px-5">
                <h3 className="text-2xl font-bold">
                  4.6 <FaStar />
                </h3>
                <p>50M+ downloads</p>
                <p className="font-semibold">Play Store</p>
              </div>
              <div className="space-y-3 border-l-[2px] px-5">
                <h3 className="text-2xl font-bold">
                  4.6 <FaStar />
                </h3>
                <p>50M+ downloads</p>
                <p className="font-semibold">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
