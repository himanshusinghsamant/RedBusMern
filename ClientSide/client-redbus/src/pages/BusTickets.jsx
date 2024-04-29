import React from "react";
import BusTicketDetails from "../components/BusTicketDetails";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BusTickets = () => {

  const [data, setData] = useState([]);
  const { details } = useParams();

  let from = '';
  let to = '';
  let selectedDate = null;
  
  if (details) {
    try {
      const parsedDetails = JSON.parse(details);
      from = parsedDetails.selectFrom;
      to = parsedDetails.selectTo;
      selectedDate = parsedDetails.selectedDate;
    } catch (error) {
      console.error('Error parsing details:', error);
    }
  }

  console.log(data)

  
  const dataURL = `http://localhost:5000/api/filterTrip`;

  useEffect(() => {
    async function fetchingFilteredData() {
      try {
        const response = await fetch(dataURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to,
          }),
        });
        const json = await response.json();
        setData(json);
        // console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingFilteredData();
  }, [from, to]);
 
  return (
    <div className="mt-[150px] p-[30px]">
      <section className="md:flex justify-between">
        <aside className="border-2 rounded-lg p-5 lg:w-[300px] md:h-[1000px] overflow-scroll">
          <div className="">
          <span className="flex justify-between border-b-2 py-3">
            <h3 className="font-bold text-lg">Filter</h3>
            <h4 className="font-bold text-lg">Clear All</h4>
          </span>
          <div className="space-y-5 border-b-2 py-5">
            <h3 className="font-bold text-lg">Departure Time</h3>
            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Morning Session</label>
            </span>

            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Afternoon Session</label>
            </span>
            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Evening Session</label>
            </span>
          </div>
          {/* -------------------------------------------------------> */}

          <div className="space-y-5 border-b-2 py-5">
            <h3 className="font-bold text-lg">Arrival Time</h3>
            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Morning Session</label>
            </span>

            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Afternoon Session</label>
            </span>
            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Evening Session</label>
            </span>
          </div>

          {/* --------------------------------------------------------> */}
          <div className="space-y-5 border-b-2 py-5">
            <h3 className="font-bold text-lg">Bus Rating</h3>
            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">4 Star or more</label>
            </span>

            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">3 Star or more</label>
            </span>
            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">0-2 Star or more</label>
            </span>
          </div>

          {/* --------------------------------------------------------------> */}
          <div className="space-y-5 border-b-2 py-5">
            <h3 className="font-bold text-lg">Bus Operator</h3>
            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Sky Hopper</label>
            </span>

            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Intercity Bus</label>
            </span>
            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Urban Explorer</label>
            </span>
          </div>
          </div>
        </aside>
        {/* ====================================> */}
        <main className="border-2 rounded-xl p-5 lg:w-[74%] h-[1000px] overflow-scroll grid grid-cols-1 gap-y-10 ">
        {
          data.length !== 0 ?
            data.map((details, index)=>{
              return (
                <BusTicketDetails details = {details} index={index}/>
              )
            })
          :
          <div>
            <h2 className="text-2xl font-semibold text-red-500 text-center mt-20">Data is not found for selected paths! </h2>
          </div>
        }
        </main>
      </section>
    </div>
  );
};

export default BusTickets;
