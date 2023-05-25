const mongoose = require('mongoose');

// Define Schemes
const noticeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  createdAt: { type: Date, default: false },
});

module.exports = mongoose.model('Notice', noticeSchema);
