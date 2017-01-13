const express = require('express');
const app = express();

const morgan = require('morgan');
const redirectHttp = require('./redirect-http');
const cors = require('cors')();
const checkDb = require('./check-connection')();
const errorHandler = require('./error-handler');

const images = require('./routes/images');
const albums = require('./routes/albums');

app.use(morgan('dev'));

if(process.env.NODE_ENV === 'production') {
  app.use(redirectHttp);
}

app.use((req, res, next) => {
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors);
app.use(express.static('./public'));
app.use(errorHandler);
app.use(checkDb);
app.use('/api/images', images);
app.use('/api/albums', albums);

module.exports = app;