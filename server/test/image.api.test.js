const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('image api', () => {
  const request = chai.request(app);
  const img = {title: 'image', album: 'album', description: 'an image', url: 'http://image.com'};
  const album = {name: 'album'};

  it('should post an album',done => {
    request
      .post('/albums')
      .send(album)
      .then(res => {
        album._id = res.body._id;
        done();
      })
      .catch(done);
  });

  it('should save an image to the database', done => {
    request
      .post('/images')
      .send(img)
      .then(res => {
        const image = res.body;
        assert.isOk(image._id);
        assert.isOk(image.albumId);
        img.albumId = image.albumId;
        img._id = image._id;
        img.__v = image.__v;
        done();
      })
      .catch(done);
  });  

  it('should get images from a database', done => {
    request
      .get('/images')
      .then(res => {
        assert.deepEqual(res.body[0], img);
        done();
      })
      .catch(done);
  });
});