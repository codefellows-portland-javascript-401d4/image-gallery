const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const requiredString = {type: String, required: true};

const imageSchema = new Schema({
  title: requiredString,
  url: requiredString,
  description: requiredString
});

module.exports = mongoose.model('Image', imageSchema);