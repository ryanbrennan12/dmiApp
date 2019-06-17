const path = require('path');
const express = require('express');
const compression = require('compression');

module.exports = function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));


  const strArr = [ { "_id": 123, "title": "Do neat " },
  { "_id": 456, "title": "Watch Netflix" }]

  app.get('/api/onmount', (req, res) => {
    console.log('we are hitting it')
    res.send(strArr)
  })

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'index.html')),
  );
};
