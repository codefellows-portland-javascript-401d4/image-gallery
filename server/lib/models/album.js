const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        default: 'http://www.clker.com/cliparts/q/L/P/Y/t/6/no-image-available-md.png'
    }
});

module.exports = mongoose.model('Album', schema);

