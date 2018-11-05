const chai = require('chai');
const chaiHttp = require ('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('image', ()=> {
  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if(connection.readyState === 1) drop();
    else{
      connection.on('open', drop);
    }
  });

  const request = chai.request(app);

  const cutie = {
    title: 'cute buuny',
    description: 'bunny photo',
    url: 'www.fakeurl.com',
    fullImage: 'www.fakeurl1.com',
    thumbnail: 'www.fakeurl2.com'
  };

  it('get all', done => {
    request
       .get('/images')
       .then(res => {
         assert.deepEqual(res.body, []);
         done();
       })
       .catch(done);
  });

  it('post', done => {
    request
        .post('/images')
        .send(cutie)
        .then(res => {
          const bunny = res.body;
          assert.ok(bunny._id);
          cutie._id = bunny._id;
          done();
        })
        .catch(done);
  });

});