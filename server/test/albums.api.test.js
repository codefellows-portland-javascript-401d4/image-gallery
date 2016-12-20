const chai = require('chai');
const chaiHttp = require ('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('album', ()=> {
  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if(connection.readyState === 1) drop();
    else{
      connection.on('open', drop);
    }
  });

  const request = chai.request(app);

  const sloths = {
    title: 'sloth',
    description: 'sloth album',
  };

  it('get all', done => {
    request
       .get('/albums')
       .then(res => {
         assert.deepEqual(res.body, []);
         done();
       })
       .catch(done);
  });

  it('post', done => {
    request
        .post('/albums')
        .send(sloths)
        .then(res => {
          const slothAlbum = res.body;
          assert.ok(slothAlbum._id);
          sloths._id = slothAlbum._id;
          done();
        })
        .catch(done);
  });

});