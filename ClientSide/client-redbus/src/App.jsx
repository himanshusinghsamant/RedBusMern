// import { useState } from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BusTickets from "./pages/BusTickets";
import Help from "./pages/Help";
import BookingInformation from "./pages/BookingInformation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import CnfmBookingModal from "./pages/CnfmBookingModal";
import CancelBookingModal from "./pages/CancelBookingModal";
import Contact from "./pages/Contact";
import { store } from "./redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route
                exact
                path="/bustickets/:details"
                element={<BusTickets />}
              />
              <Route exact path="/help" element={<Help />} />
              <Route
                exact
                path="/bookinginformation/:id/:selectSeat"
                element={<BookingInformation />}
              />
              <Route
                exact
                path="/confirmbooking"
                element={<CnfmBookingModal />}
              />
              <Route
                exact
                path="/cancelbooking"
                element={<CancelBookingModal />}
              />
              <Route
                exact
                path="/contact"
                element={<Contact/>}
              />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
