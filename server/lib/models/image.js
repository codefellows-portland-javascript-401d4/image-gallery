const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  albumId: {
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }
});

module.exports = mongoose.model('Image', schema);