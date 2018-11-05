const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup_mongoose');
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

  const bunny = {__v: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Bunny_in_zoo_cropped.jpg', imageTitle: 'Fluffy the bunny', imageDescription: 'This is a close up photo of a little bunny.'};

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
      .send(bunny)
      .then(res => {
        const image = res.body;
        assert.ok(image._id);
        bunny._id = image._id;
        done();
      })
      .catch(done);
  });

  it('/GET by id', done => {
    request
      .get(`/api/images/${bunny._id}`)
      .then(res => {
        const image = res.body;
        assert.deepEqual(image, bunny);
        done();
      })
      .catch(done);
  });


});
