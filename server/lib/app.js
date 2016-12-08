const express = require('express');
const app = express();
const errorHandler = require('./error_handler');

const images = require('./routes/images');


app.use(express.static('./public'));

app.use('/api/images', images);

app.use(errorHandler);

module.exports = app;
