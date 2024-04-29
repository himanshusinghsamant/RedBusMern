const express = require("express");
const router = express.Router();
const Trip = require("../DatabaseSchema/InsertTrip");

router.get("/trips", async (req, res) => {
  try {
    const allTrips = await Trip.find({});

    return res.status(200).json({ status: "Success", data: allTrips });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

router.post("/getSingleData", async (req, res)=>{
  const {id} = req.body;
  try {
    const singleData = await Trip.findById(id)
    if (!singleData) {
      return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    return res.status(200).json({status:'success', data:singleData})
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
})

router.post("/filterTrip" , async(req, res)=>{
  try {
    const {from, to} = req.body;

    const filter = {};
    if (from) filter.from = from;
    if (to) filter.to = to;
     // Convert date string to Date object

    // Find trips based on the constructed filter
    const filteredData = await Trip.find(filter);

    return res.json(filteredData)

  } catch (error) {
    console.log(error)
    return res.status(500).send("Internal Server Error");
  }
})

router.post("/newTrip", async (req, res) => {
  try {
    const newTrip = new Trip({
      from: req.body.from,
      to: req.body.to,
      busOwnerId: req.body.busOwnerId,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      category: req.body.category,
      SeatBooked: req.body.SeatBooked,
      bus_no: req.body.bus_no,
      animeties_list: req.body.animeties_list, 
      busFare: req.body.busFare,
      busName: req.body.busName,
      rating: req.body.rating, 
      availableSeats: req.body.availableSeats,
      windowSeats: req.body.windowSeats, 
      departureTime: req.body.departureTime, 
      travelDuration: req.body.travelDuration,
      arrivalTime: req.body.arrivalTime,
      amenities: req.body.amenities,
      totalSeats: req.body.totalSeats,
      seatprice: req.body.seatprice,
      seatlegend: req.body.seatlegend, 
    });
    
    const savedTrip = await newTrip.save();
    res
      .status(201)
      .json({ status: "New Trip created successfully", data: savedTrip });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
});

module.exports = router;




