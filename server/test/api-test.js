const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('image', () => {

  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else {
      connection.on('open', drop);
    }
  });

  const request = chai.request(app);

  const cottontail = {
    title: 'Desert Cottontail',
    url: 'https://en.wikipedia.org/wiki/File:Sylvilagus_audubonii_2.jpg',
    desc: 'The desert cottontail (Sylvilagus audubonii), also known as Audubon\'s cottontail, is a New World cottontail rabbit, and a member of the family Leporidae.'
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

  it('/POST', done => {
    request
            .post('/api/images')
            .send(cottontail)
            .then(res => {
              const image = res.body;
              assert.ok(image._id);
              cottontail._id = image._id;
              cottontail.__v = 0;
              done();
            })
            .catch(done);

  });

  it('/GET by id', done => {
    request
            .get(`/api/images/${cottontail._id}`)
            .then(res => {
              const image = res.body;
              assert.deepEqual(image, cottontail);
              done();
            })
            .catch(done);
  });

  it('/GET all after post', done => {
    request
            .get('/api/images')
            .then(res => {
              assert.deepEqual(res.body, [ cottontail ]);
              done();
            })
            .catch(done);
  });

});