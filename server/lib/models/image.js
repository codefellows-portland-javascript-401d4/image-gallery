const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    reuired: true
  }
});

module.exports = mongoose.model('Images', schema);