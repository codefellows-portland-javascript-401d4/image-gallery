const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');

const spiders = require('./routes/spiders');

app.use(morgan('dev'));

// redirect http to https ... only in production
if(process.env.NODE_ENV === 'production') {
  // create middleware to check each request
  app.use((req, res, next) => {
  // (if express directly https, we could check req.secure, but
  // on heroku we are behind proxy & our server is never https)
  // on heroku, they will set this header to communicate
  // what incoming protocol was used.

    // if https, call next
    if(req.headers['x-forwarded-proto'] === 'https') next();
    // otherwise redirect to same url but with https instead of http
    else res.redirect(`https://${req.hostname}${req.url}`);
  });
}

app.use((req, res, next) => {
  console.log('setting cors headers');
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static('./build'));

app.use('/api/spiders', spiders);

app.use(errorHandler);

module.exports = app;
