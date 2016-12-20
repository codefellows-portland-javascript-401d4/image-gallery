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
  },
  spidergang: {
    type: Schema.Types.ObjectId,
    ref: 'Spidergang'
  }
});

module.exports = mongoose.model('Spider', schema);
