const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const album = new Schema({
  name: {
    type: String,
    required: true
  }/*,
  images: {
    type: []
  }*/
});

module.exports = mongoose.model('Album', album);