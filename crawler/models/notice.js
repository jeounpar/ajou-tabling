const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  numId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: String, default: false },
});

module.exports = mongoose.model('Notice', noticeSchema);
