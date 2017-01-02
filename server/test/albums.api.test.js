const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('Album', () => {

  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else {
      connection.on('open', drop);
    }
  });

  const request = chai.request(app);

  const testAlbum = {__v: 0, name: 'My Album', images: []};

  it('/GET all', done => {
    request
      .get('/api/albums')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('/POST', done => {
    request
      .post('/api/albums')
      .send(testAlbum)
      .then(res => {
        const album = res.body;
        assert.ok(album._id);
        testAlbum._id = album._id;
        done();
      })
      .catch(done);
  });
  
  it('/GET by id', done => {
    request
      .get(`/api/albums/${testAlbum._id}`)
      .then(res => {
        const album = res.body;
        assert.deepEqual(album, testAlbum);
        done();
      })
      .catch(done);
  });


});