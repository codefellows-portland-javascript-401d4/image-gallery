const chai = require('chai')
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('images server test', () => {
  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if(connection.readyState === 1) drop();
    else connection.on('open', drop); 
  });

  const request = chai.request(app);

  const testImage = {
    title: 'Test Image',
    url: 'www.test.com/image.jpg',
    description: 'This is a test image for the backend server test.'
  };

  it('gets all images', done => {
    request
      .get('/api/images')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('posts an image', done => {
    request
      .post('/api/images')
      .send(testImage)
      .then(res => {
        const image = res.body;
        testImage._id = image._id;
        testImage.__v = image.__v;
        assert.deepEqual(image, testImage);
        done();
      })
      .catch(done);
  });

  it('deletes an image', done => {
    request.delete(`/api/images/${testImage._id}`)
    .then(res => {
      assert.deepEqual(res.body, testImage);
      done();
    })
    .catch(done);
  });
});