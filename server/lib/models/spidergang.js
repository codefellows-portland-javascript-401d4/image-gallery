const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  clique: {
    type: String,
    default: 'spidergang'
  }
});

module.exports = mongoose.model('Spidergang', schema);
