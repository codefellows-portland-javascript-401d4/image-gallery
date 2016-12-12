require('dotenv').load();
const app = require('./lib/app');
const http = require('http');
require('./lib/mongoose-config');

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port, () => console.log('server up on port ', server.address()));