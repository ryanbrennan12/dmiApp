/* eslint consistent-return:0 import/order:0 */

const express = require('express');
// const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
// const router = require('/Users/ryanbrennan/Desktop/repls/dmiapp/server/middlewares/router.js')
const app = express();


// app.use('/api',router);


// const strArr = [ { "_id": 123, "title": "Do neat " },
// { "_id": 456, "title": "Watch Netflix" }]

// app.get('api/onmount', (req, res) => {
//   console.log('we are hitting it')
//   res.send(strArr)
// })



// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, async err => {
  console.log('listening on port ', port)
  if (err) {
    return logger.error(err.message);
  }
});






// use the gzipped bundle
// app.get('*.js', (req, res, next) => {

//   req.url = req.url + '.gz'; // eslint-disable-line
//   res.set('Content-Encoding', 'gzip');
//   next();
// });
