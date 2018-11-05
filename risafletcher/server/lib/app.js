const express = require('express');
const app = express();
const morgan = require('morgan');
const redirectHttp = require('./redirect-http');
const cors = require('cors')();
const checkDb = require('./check-connection')();
const images = require('./routes/images');
const albums = require('./routes/albums');
const errorHandler = require('./error-handler');

app.use(morgan('dev'));

if(process.env.NODE_ENV === 'production') {
  app.use(redirectHttp);
}

var dirname = __dirname + '/../public';
console.log('dirname', dirname);

app.use(cors);
app.use(checkDb);
app.use(express.static(dirname));
app.use('/api/images', images);
app.use('/api/albums', albums);
app.use(errorHandler);

module.exports = app;