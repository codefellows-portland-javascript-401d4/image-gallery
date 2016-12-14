const express = require('express');
const app = express();
const errorHandler = require('./error_handler');
const cors = require('cors');

const images = require('./routes/images');

app.use(cors());

app.use(express.static('./public'));

app.use('/api/images', images);

app.use(errorHandler);

module.exports = app;
