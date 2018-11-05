const express = require('express');
const app = express();
const errHandler = require('./err-handler');
const morgan = require('morgan');

const images = require('./routes/images');
const albums = require('./routes/albums');

// //serves the front end to the server - have to skip the lib directory
// const path = require('path');
// console.log(path.resolve(__dirname, '../public'));
// app.use(express.static(path.resolve(__dirname, '../public')));

//this does the same as the code above - which is less brittle?
app.use(express.static('./public'));

//using morgan in production mode
app.use(morgan('dev'));

//redirect http to https FOR PRODUCTION
if(process.env.NODE_ENV === 'production') {
  //middleware to check each req
  app.use((req, res, next) => {
    if(req.headers['x-forwarded-proto'] === 'https') next(); //removed double quotes isOK?
    else res.redirect(`https://${req.hostname}${req.url}`);
  });
}

//set CORS headers
app.use((req, res, next) => {
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  console.log('setting CORS headers');
  next();
});

app.use('/api/images', images);
app.use('/api/albums', albums);

app.use(errHandler);

module.exports = app;