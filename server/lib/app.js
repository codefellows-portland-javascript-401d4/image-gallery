const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler');

const images = require('./routes/images');

app.use(morgan('dev'));

app.use((req, res, next) => {
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('./public'));

app.use('/api/images', images);

app.use(errorHandler);

module.exports = app;