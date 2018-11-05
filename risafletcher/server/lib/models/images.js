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
  },
  albumId: {
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }
});

module.exports = mongoose.model('Images', schema);