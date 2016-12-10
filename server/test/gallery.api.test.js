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

  const trex = {
    title: 'Tea-Rex',
    url: 'http://img05.deviantart.net/610d/i/2013/018/f/b/tea_rex_by_demonicneko-d5rxzq9.png',
    description: 'A very classy gent, this T-Rex prefers Assams.'
  };

  var id;
  const baddino = { title: 'Bad Dino' };
  const newTitle = {title:'Different T-Rex'};

  it('Gets an empty array before images have been added', done => {
    request
      .get('/api/gallery/')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('Adds an object to the db', done => {
    request
      .post('/api/gallery/')
      .send(trex)
      .then(res => {
        let img = JSON.parse(res.text);
        id = img._id;
        assert.equal(img.title, trex.title);
        assert.equal(img.url, trex.url);
        assert.equal(img.description, trex.description);
        done();
      })
      .catch(done);
  });

  it('Fails to add an object missing information', done => {
    request
      .post('/api/gallery/')
      .send(baddino)
      .end(err => {
        assert.equal(err.status, 400);
        assert.equal(err.response.text, '{"error":"Title, URL, and a description are all required"}');
        done();
      });
  });

  it('Gets an image by id', done => {
    request
      .get('/api/gallery/' + id)
      .then(res => {
        let img = JSON.parse(res.text);
        assert.equal(img.title, trex.title);
        assert.equal(img.url, trex.url);
        assert.equal(img.description, trex.description);
        assert.equal(img._id, id);
        done();
      })
      .catch(done);
  });

  it('Updates image fields, using the id', done => {
    request
      .put('/api/gallery/' + id)
      .send(newTitle)
      .then(res => {
        let img = JSON.parse(res.text);
        assert.equal(img.title, newTitle.title);
        assert.equal(img.url, trex.url);
        assert.equal(img.description, trex.description);
        assert.equal(img._id, id);
        done();
      })
      .catch(done);
  });

  it('Deletes an image using the id', done => {
    request
      .delete('/api/gallery/' + id)
      .then(res => {
        let img = JSON.parse(res.text);
        assert.equal(img.title, newTitle.title);
        assert.equal(img.url, trex.url);
        assert.equal(img.description, trex.description);
        assert.equal(img._id, id);
        done();
      })
      .catch(done);
  });

});