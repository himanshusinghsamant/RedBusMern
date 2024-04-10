const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  from: {
    type: String,
  },

  to: {
    type: String,
  },
  busOwnerId: {
    type: Number,
  },
  startTime: {
    type: Number,
  },
  endTime: {
    type: Number,
  },
  category: {
    type: Number,
  },
  SeatBooked: {
    type: [Number],
  },
  bus_no: {
    type: Number,
  },
  animeties_list: [{ type: String }],
  busFare: { type: Number },
  busName: { type: String },
});

const Trip = mongoose.model("trips", tripSchema);
module.exports = Trip;
