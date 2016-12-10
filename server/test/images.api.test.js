const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setupMongoose');
const app = require('../lib/app');

describe('image', () => {
  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if(connection.readyState === 1) drop();
    else { connection.on('open', drop); }
  });

  const request = chai.request(app);

  const image = {
    title: 'car',
    description: 'a car',
    url: 'http://www.car.com'
  };

  it('/GET all', done => {
    request
      .get('/api/images')
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
        assert.deepEqual(postedImg, image);
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