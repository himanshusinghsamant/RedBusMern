const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  busOwnerId: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  busName: {
    type: String,
    required: true,
  },
  bus_no: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
  windowSeats: {
    type: Number,
    default: 0,
  },
  departureTime: {
    type: String,
    required: true,
  },
  travelDuration: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  seatBooked: {
    type: [String],
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  busFare: {
    type: Number,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  seatprice: {
    type: [Schema.Types.Mixed],
    required: true,
  },
  seatlegend: {
    type: [String],
    required: true,
  },
});

const Trip = mongoose.model("trips", tripSchema);
module.exports = Trip;
