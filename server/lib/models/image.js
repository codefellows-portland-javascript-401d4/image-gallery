const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
  image_title: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  image_description: {
    type: String
  }
});

module.exports = mongoose.model('Image', schema);