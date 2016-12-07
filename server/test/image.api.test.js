const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('image api', () => {
  const request = chai.request(app);
  const img = {'_id': '58489fbe26e7051aa3d5dd83', title: 'image', description: 'an image', url: 'http://image.com'};

  it('should get images from a database', done => {
    request
      .get('/images')
      .then(res => {
        assert.deepEqual(res.body, [img]);
        done();
      })
      .catch(done);
  });
});