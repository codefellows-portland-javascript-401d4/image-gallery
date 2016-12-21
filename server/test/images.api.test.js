const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setupMongoose');
const app = require('../lib/app');

describe('backend', () => {
  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if(connection.readyState === 1) drop();
    else { connection.on('open', drop); }
  });

  const request = chai.request(app);

  const image = {
    title: 'car',
    description: 'a car',
    url: 'http://www.car.com',
    name: 'autos'
  };

  it('/GET all images', done => {
    request
      .get('/api/images')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('GET all albums', done => {
    request
      .get('/api/albums')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('/POST image', done => {
    request
      .post('/api/images')
      .send(image)
      .then(res => {
        const postedImg = res.body;
        image._id = postedImg._id;
        image.__v = 0;
        image.album = postedImg.album;
        delete image.name;
        assert.deepEqual(postedImg, image);
        done();
      })
      .catch(done);
  });

  it('/GET album by id', done => {
    request
      .get(`/api/albums/${image.album}`)
      .send(image)
      .then(res => {
        assert.equal(res.body._id, image.album);
        done();
      })
      .catch(done);
  });

  it('/DELETE image', done => {
    request
      .del(`/api/images/${image._id}`)
      .then(res => {
        const deletedImg = res.body;
        assert.deepEqual(deletedImg, image);
        done();
      })
      .catch(done);
  });
});