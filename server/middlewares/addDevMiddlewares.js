const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const bodyParser = require('body-parser');
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;
    //our "Persisting" data
  const results = [ { "_id": 123, "title": "I am dummy data" },
  { "_id": 456, "title": "I'm with him ⬆" }, { "_id": 789, "title": "Delete us from addDevMiddlewares.js ☠️" }]

  app.get('/onmount', (req, res) => {
    res.send(results);
  });

  app.post('/addtodo', (req, res) => {
    console.log('body', req.body)
    res.status(200).send('I am the body', req.body)
  })

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};


