const express = require('express');
const app = express();
const errorHandler = require('./error-handler');

const path = require('path');
const buildPath = path.resolve(__dirname + '/../build');
const cors = require('cors')();
const morgan = require('morgan');

const images = require('./routes/images');
const albums = require('./routes/albums');

app.use(morgan('dev'));
app.use(cors);
app.use(errorHandler);

app.use(express.static('./public'));

app.use('/api/albums', albums);
app.use('/api/images', images);

module.exports = app;
