const express = require('express');
const app = express();
const errorHandler = require('./error-handler');

app.use();
app.use(errorHandler);

module.exports = app;