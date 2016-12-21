const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    albumId: {
        type: Schema.Types.ObjectId,
        ref: 'Albums'
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Images', imageSchema);