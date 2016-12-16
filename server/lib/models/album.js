const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'Edit album description'
    }
});

module.exports = mongoose.model('Album', schema);