const express = require('express');
const app = express();

/* middleware */
const errorHandler = require('./error-handler');
const morgan = require('morgan');
const redirectHttp = require('./redirect-http')();
const cors = require('cors')();
const checkDb = require('./check-connection')();

app.use(morgan('dev'));
// redirect http to https ... only in production
if(process.env.NODE_ENV === 'production') {
  app.use(redirectHttp);
}
app.use(cors);
app.use(express.static('./build'));
app.use(errorHandler);

/* routes */
const spiders = require('./routes/spiders');
const spidergangs = require('./routes/spidergangs');
app.use(checkDb);
app.use('/api/spidergangs', spidergangs);
app.use('/api/spiders', spiders);

module.exports = app;
