const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    name: String,
    email: String,
    event: String,
    date: Date,
})

const Booking = mongoose.model("booking", BookingSchema);
module.exports = Booking;