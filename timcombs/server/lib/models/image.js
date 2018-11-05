const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: true
  },
  albumId: {
    type: Schema.Types.ObjectId,
    ref: 'Album',
    required: true
  }
});

module.exports = mongoose.model('Image', schema);