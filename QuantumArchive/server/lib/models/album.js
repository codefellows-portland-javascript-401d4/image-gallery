const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    images: []
});

module.exports = mongoose.model('Albums', albumSchema);