require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Notice = require('./models/notice.js');
const Reservation = require('./models/reservation.js');
const app = express();

const { PORT, MONGO_URI } = process.env;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to mongodb'))
  .catch(e => console.error(e));

app.listen(PORT, () => console.log(`Backend-Server listening on port ${PORT}`));

// 모든 공지사항 가져오기

app.get('/notice', async (req, res) => {
  const result = await Notice.find({}, { _id: 0, __v: 0 });
  res.status(200).send(result);
});

app.post('/reservation', async (req, res) => {
  const data = {
    date: req.body.data.date,
    startTime: req.body.data.startTime,
    endTime: req.body.data.endTime,
    number: req.body.data.number,
    status: 0,
  };
  const reservation = new Reservation(data);
  const rst = await reservation.save();
  res.status(200).send(rst);
});

app.get('/reservation', async (req, res) => {
  const result = await Reservation.find({}, { __v: 0 });
  res.status(200).send(result);
});

app.get('/reservation/pending', async (req, res) => {
  const result = await Reservation.find({ status: 0 }, { _id: 0, __v: 0 });
  res.status(200).send(result);
});

app.get('/reservation/ok', async (req, res) => {
  const result = await Reservation.find({ status: 1 }, { _id: 0, __v: 0 });
  res.status(200).send(result);
});

app.get('/reservation/false', async (req, res) => {
  const result = await Reservation.find({ status: 2 }, { _id: 0, __v: 0 });
  res.status(200).send(result);
});

app.post('/reservation/status', async (req, res) => {
  const result = await Reservation.findOneAndUpdate(
    { _id: req.body.data.id },
    {
      status: parseInt(req.body.data.status),
    },
  );
  res.status(200).send(result);
});
