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
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Spider', schema);


// function controller() {
//   this.spider = {
//     title: 'Igor the Dapper Spider',
//     url: 'http://1.bp.blogspot.com/_LbccUVbSRd8/SWZpdbbXG2I/AAAAAAAAD7Y/X1-TwL_E8f0/s400/jumping+spider+eyes+10.jpg',
//     description: 'Jumping Spider',
//     thumbnail: 'src/images/spiderthumbnail.png',
//     image: 'src/images/jumping spider eyes 10.jpg'
//   };
// }
