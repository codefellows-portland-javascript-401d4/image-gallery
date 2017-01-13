const path = require('path');
require('dotenv').load({path: path.join(__dirname, '.env.test')});
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

const connection = require('../lib/mongoose-config');
const app = require('../lib/app');

describe('Validating Image routes', () => {

  before( done => {
    const CONNECTED = 1;
    if (connection.readyState === CONNECTED) dropCollection();
    else connection.on('open', dropCollection);

    function dropCollection(){
      const name = 'images';
      connection.db
        .listCollections({ name })
        .next( (err, collinfo) => {
          if (!collinfo) return done();
          connection.db.dropCollection(name, done);
        });
    }
  });

  const testImage = {
    title: 'Test Image',
    description: 'test image description',
    url: 'http://orig14.deviantart.net/a038/f/2015/355/a/0/red_dragon_v2_by_sandara-d9kytw1.jpg',
    album: '58547f17fe53f22a22cc1696'
  };

  const request = chai.request(app);

  it('POST new image', done => {
    request
            .post('/api/images')
            .send(testImage)
            .then(res => {
              const image = res.body;
              assert.ok(image._id);
              testImage._id = image._id;
              testImage.__v = 0;
              done();
            })
            .catch(done);
  });

  it ('GET all', done => {
    request
            .get('/api/images')
            .then(res => {
              assert.deepEqual(res.body, [testImage]);
              done();
            })
            .catch(done);
  });

  it('DELETE an image', done => {
    request
            .delete(`/api/images/${testImage._id}`)
            .then(res => {
              const deletedImage = res.body;
              assert.ok(deletedImage._id);
              done();
            })
            .catch(done);
  });

});