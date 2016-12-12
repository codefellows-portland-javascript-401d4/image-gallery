const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');

const images = require('./routes/images');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use('/api/images', images);
app.use(errorHandler);

module.exports = app;