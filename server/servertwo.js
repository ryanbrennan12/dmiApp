const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')
// const bodyParser = require('body-parser');

app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // app.use(express.static(__dirname + '/../react-client/dist'));
// app.use(express.static('public'));

//Our persisting data
const strArr = [ { "_id": 123, "title": "Bua" },
{ "_id": 456, "title": "Watch Netflix" }]


app.get('/onmount', (req, res) => {
  res.send(strArr)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
