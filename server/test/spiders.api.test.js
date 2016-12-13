const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('spider', () => {

  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else {
      connection.on('open', drop);
    }
  });

  const request = chai.request(app);

  const igor = {
    name: 'Igor',
    type: 'dapper'
  };

  it('/GET all', done => {
    request
      .get('/api/spiders')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('/POST', done => {
    request
      .post('/api/spiders')
      .send(igor)
      .then(res => {
        const spider = res.body;
        assert.ok(spider._id);
        igor._id = spider._id;
        done();
      })
      .catch(done);
  });

  it('/GET by id', done => {
    request
      .get(`/api/spiders/${igor._id}`)
      .then(res => {
        const spider = res.body;
        assert.deepEqual(spider, igor);
        done();
      })
      .catch(done);
  });

  it('/GET all after post', done => {
    request
      .get('/api/spiders')
      .then(res => {
        assert.deepEqual(res.body, [igor]);
        done();
      })
      .catch(done);
  });

  it('add a non-dapper spider', done => {
    request
      .post('/api/spiders')
      .send({name: 'Spike', type: 'punk'})
      .then(res => {
        assert.ok(res.body._id);
        done();
      })
      .catch(done);
  });

  it('/GET where type is dapper', done => {
    request
      .get('/api/spiders')
      .query({type: 'dapper'})
      .then(res => {
        assert.deepEqual(res.body, [igor]);
        done();
      })
      .catch(done);
  });
});
