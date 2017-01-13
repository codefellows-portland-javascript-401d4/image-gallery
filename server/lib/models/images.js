const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Images', schema);