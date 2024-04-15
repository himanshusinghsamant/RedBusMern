import React from "react";
import BusTicketDetails from "../components/BusTicketDetails";
import { All_Bus_Tickets } from "../datas/BusTickets";

const BusTickets = () => {

 
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
              <label for="checkbox1">Zing Bus</label>
            </span>

            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Intercity Smart</label>
            </span>
            <span className="flex items-center">
              <input className="w-4 h-4 mr-5" type="checkbox" id="checkbox1" />
              <label for="checkbox1">Safar Exp</label>
            </span>
          </div>
          </div>
        </aside>
        {/* ====================================> */}
        <main className="border-2 rounded-xl p-5 lg:w-[74%] h-[1000px] overflow-scroll grid grid-cols-1 gap-y-10 ">
          {
            All_Bus_Tickets?.map((details, index)=>{
              return (
                <BusTicketDetails details = {details} index={index}/>
              )
            })
          }
        </main>
      </section>
    </div>
  );
};

export default BusTickets;
