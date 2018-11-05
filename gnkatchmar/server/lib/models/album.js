const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    default: 'https://image.freepik.com/free-icon/photo-album_318-31831.jpg'
  }
});

module.exports = mongoose.model('Album', schema);