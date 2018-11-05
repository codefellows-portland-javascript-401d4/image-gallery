const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/images-db';

mongoose.Promise;
mongoose.connect(dbURI);

//successful connection
mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection open to', dbURI);
});

//connection throws error
mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection error:', err);
});

//connection disconnected
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose default connection disconnected');
});

//if Node ends, close connection
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose.connection;