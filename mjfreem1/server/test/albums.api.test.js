// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const assert = chai.assert;
// chai.use(chaiHttp);

// const connection = require('../lib/setupMongoose');
// const app = require('../lib/app');

// describe('album', () => {
//   before(done => {
//     const drop = () => connection.db.dropDatabase(done);
//     if(connection.readyState === 1) drop();
//     else { connection.on('open', drop); }
//   });

//   const request = chai.request(app);

//   const album = {
//     name: 'bears'
//   };

//   it('GET all albums', done => {
//     request
//       .get('/api/images')
//       .then(res => {
//         assert.deepEqual(res.body, []);
//         done();
//       })
//       .catch(done);
//   });
// })