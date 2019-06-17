const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')
// const bodyParser = require('body-parser');

app.use(cors())

const strArr = [ { "_id": 123, "title": "Do neat " },
{ "_id": 456, "title": "Watch Netflix" }]


app.get('/onmount', (req, res) => {
  res.send(strArr)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
