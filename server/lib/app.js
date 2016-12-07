const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');
const path = require('path');
const pubDir = path.join(__dirname, './public');

const images = require('./routes/images');

app.use(morgan('dev'));
app.use('/', express.static(pubDir));
app.use('/images', images);

module.exports = app;