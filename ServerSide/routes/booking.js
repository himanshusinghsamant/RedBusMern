const express = require("express");
const router = express.Router();
const Booking = require("../DatabaseSchema/Booking");

router.post("/booking", async (req, res) => {
  try {
    const bookingData = new Booking ({
      name: req.body.name,
      email: req.body.email,
      event: req.body.event,
      date: req.body.date,
    });
    const savedBooking = await bookingData.save()
    res
    .status(201)
    .json({ status: " ticket is booked successfully", data: savedBooking });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });

  }
});


module.exports = router;