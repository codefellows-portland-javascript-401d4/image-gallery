const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('Gallery API', () => {

  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else {
      connection.on('open', drop);
    }
  });

  const request = chai.request(app);

  const testImg = {
    title: 'TESTING',
    description: 'Goofy clipart',
    url: 'http://checkpointech.com/blog/wp-content/uploads/2012/10/functionality_testing_1.jpg'
  };

  it('Starts empty', done => {
    request.get('/api/images')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('/POST', done => {
    request
      .post('/api/images')
      .send(testImg)
      .then(res => {
        const newImg = res.body;
        assert.ok(newImg._id);
        testImg._id = newImg._id;
        testImg.__v = newImg.__v;
        done();
      })
      .catch(done);
  });

  it('Gets image by id', done => {
    request.get(`/api/images/${testImg._id}`)
      .then(res => {
        assert.deepEqual(res.body, testImg);
        done();
      })
      .catch(done);
  });

  it('/GET all', done => {
    request.get('/api/images')
      .then(res => {
        assert.isArray(res.body);
        assert.equal(res.body.length, 1);
        assert.deepEqual(res.body[0], testImg);
        done();
      })
      .catch(done);
  });

  it('Deletes images', done => {
    request.delete(`/api/images/${testImg._id}`)
      .then(res => {
        assert.deepEqual(res.body, testImg);
        done();
      })
      .catch(done);
  });
	
});