const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const image = new Schema({
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
    required: true
  },
  albumName: {
    type: String
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }
});

module.exports = mongoose.model('Image', image);