const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('server test', () => {
  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else {
      connection.on('open', drop);
    }
  });

  const request = chai.request(app);

  const testImage = {
    name: 'Two Kittens',
    src: 'https://cdn.pixabay.com/photo/2013/11/05/14/31/cat-205757_1280.jpg',
    description: 'Kittens in a blanket'
  };

//body should be cleared out after db dropped
  it('GETs all', done => {
    request
      .get('/api/images')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('/POST', done => {
    request
      .post('/api/images')
      .send(testImage)
      .then(res => {
        const image = res.body;
        assert.ok(image._id);
        testImage._id = image._id;
        done();
      })
      .catch(done);
  });

  it('GETS by id', done => {
    request
      .get(`/api/images/${testImage._id}`)
      .then(res => {
        const image = res.body;
        assert.deepEqual(image, testImage);
        done();
      })
      .catch(done);
  });

  it('GETs all after post', done => {
    request
      .post('/api/images')
      .then(res => {
        assert.deepEqual(res.body, [testImage]);
        done();
      })
      .catch(done);
  });

  it('DELETEs an image', done => {
    request
      .delete(`/api/images/${testImage._id}`)
      .then(res => {
        assert.deepEqual(res.body, testImage);
        done();
      });
  });
});