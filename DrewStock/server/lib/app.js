const express = require('express');
const app = express();
const errorHandler = require('./error_handler');
const cors = require('cors');

const images = require('./routes/images');
const albums = require('./routes/albums');

app.use(cors());

app.use(express.static('./public'));

app.use('/api/images', images);
app.use('/api/albums', albums);

app.use(errorHandler);

module.exports = app;
