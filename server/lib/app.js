const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const images = require('./routes/images');

app.use('/api/images', images);
app.use(express.static('./build'));
app.use(errorHandler);

module.exports = app;