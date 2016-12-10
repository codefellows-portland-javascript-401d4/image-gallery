const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('Gallery API and routes', () => {

  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else {
      connection.on('open', drop);
    }
  });

  const request = chai.request(app);

  // const trex = {
  //   title: 'Tea-Rex',
  //   url: 'http://img05.deviantart.net/610d/i/2013/018/f/b/tea_rex_by_demonicneko-d5rxzq9.png',
  //   description: 'A very classy gent, this T-Rex prefers Assams.'
  // };

  it('Gets an empty array before images have been added', done => {
    request
      .get('/api/gallery/')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

});