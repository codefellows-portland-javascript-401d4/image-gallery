const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    require: true
  },
  url: {
    type: String,
    required: true
  },
  description: String
});

module.exports = mongoose.model('Image', schema);