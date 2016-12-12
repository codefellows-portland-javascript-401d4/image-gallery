const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');

app.use(morgan('dev'));


app.use(errorHandler);

module.exports = app;