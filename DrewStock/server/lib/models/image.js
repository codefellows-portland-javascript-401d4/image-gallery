const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaImages = new Schema ({

  url: {
    type: String,
    required: true
  },
  imageTitle: {
    type: String,
    required: true
  },
  imageDescription: {
    type: String,
    required: true
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }
});

module.exports = mongoose.model('Image', schemaImages);
