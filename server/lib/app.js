const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const images = require('./routes/images');
const path = require('path');
const buildPath = path.resolve( __dirname + '/../build' );

app.use((req, res, next) => {
    const url = '*';
    res.header('Access-Control-Allow-Origin', url);
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
console.log(buildPath);
app.use(express.static(buildPath));
app.use('/api/images', images);
app.use(errorHandler);

module.exports = app;