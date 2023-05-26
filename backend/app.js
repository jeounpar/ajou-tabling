require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Notice = require('./models/notice.js');

const app = express();

const { PORT, MONGO_URI } = process.env;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONNECT TO MONGODB SERVER
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.post('/notice', (req, res) => {
  console.log(req.body);
  const notice = new Notice(req.body);
  notice.save();
  // console.log(req.body);
  res.status(201).send(notice);
});

app.get('/notice', async (req, res) => {
  // User.find({});
  // const result = await Notice.find().exists('numId', req.body.numId);
  const result = await Notice.findOne({ numId: req.body.numId });
  if (!result) res.status(201).send('not exists');
  else res.status(201).send('exists');
});
