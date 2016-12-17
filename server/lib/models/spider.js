const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'jumping spider'
  }
});

module.exports = mongoose.model('Spider', schema);
