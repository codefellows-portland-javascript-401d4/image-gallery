const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  cover: {
    type: String
  }
});

module.exports = mongoose.model('Album', schema);