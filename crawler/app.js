require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const { PORT, MONGO_URI } = process.env;
const Notice = require('./models/notice.js');
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to mongodb'))
  .catch(e => console.error(e));
app.listen(PORT);

const originUrl = 'https://www.ajou.ac.kr/kr/ajou/notice.do';

const saveNotice = async offset => {
  let count = 0;
  offset = (offset - 1) * 10;
  const html = await axios.get(
    `https://www.ajou.ac.kr/kr/ajou/notice.do?mode=list&&articleLimit=10&article.offset=${offset}`,
  );
  const $ = cheerio.load(html.data);
  for (let i = 0; i < 20; i++) {
    const numId = $(`tr:nth-child(${i}) > td.b-num-box`)
      .text()
      .replace(/^\s+|\s+$/gm, '');
    const result = await Notice.findOne({ numId: numId });
    if (result !== null) continue;
    const title = $(`tr:nth-child(${i}) > td.b-td-left > div > a`)
      .text()
      .replace(/^\s+|\s+$/gm, '');
    const createdAt = $(`tr:nth-child(${i}) > ` + 'td:nth-child(6)')
      .text()
      .replace(/^\s+|\s+$/gm, '');
    let url = $(`tr:nth-child(${i}) > td.b-td-left > div > a`).attr('href');
    url = originUrl + url;
    if (title !== '' && title.indexOf('공지') < 0) {
      const tmp = { numId, title, createdAt, url };
      const notice = new Notice(tmp);
      await notice.save();
      count++;
    }
  }
  return count;
};

app.get('/:page', async function (req, res) {
  const result = await saveNotice(parseInt(req.params.page));
  res.status(200).send(`${result}`);
});
