const express = require('express');
const app = express();

const errorHandler = require('./error-handler');
const morgan = require('morgan');
const redirectHttp = require('./redirect-http')();
const cors = require('cors')();
const checkDb = require('./check-connection')();

const images = require('./routes/images');
const albums = require('./routes/albums');

app.use(morgan('dev'));
// Redirect http to https only in production
if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttp);
}
app.use(cors);
app.use(express.static('./public'));
app.use(errorHandler);
app.use(checkDb);
app.use('/api/albums', albums);
app.use('/api/images', images);

module.exports = app;
