const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  number: { type: String, required: true },
  status: { type: Number, required: true },
});

module.exports = mongoose.model('Reservation', reservationSchema);
