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
    description: 'A very classy gent, this T-Rex prefers Assams.',
    album: ''
  };

  const dinos = {
    title: 'Dinosaurs',
    description: 'An album of awesome dinosaur pictures.'
  };

  var dino_id;
  var id;
  const baddino = { title: 'Bad Dino' };
  const newTitle = {title:'Different T-Rex'};

  it('Gets an empty array before albums have been added', done => {
    request
      .get('/api/')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('Adds an album to the db', done => {
    request
      .post('/api/albums/')
      .send(dinos)
      .then(res => {
        let album = JSON.parse(res.text);
        dino_id = album._id;
        assert.equal(album.title, dinos.title);
        assert.equal(album.url, dinos.url);
        assert.equal(album.description, dinos.description);
        done();
      })
      .catch(done);
  });

  it('Gets an album after it has been added', done => {
    request
      .get('/api/')
      .then(res => {
        let album = res.body[0];
        assert.equal(album.title, dinos.title);
        assert.equal(album.description, dinos.description);
        assert.equal(album._id, dino_id);
        done();
      })
      .catch(done);
  });

  it('Adds an image to the album', done => {

    trex.album = dino_id;

    request
      .post('/api/')
      .send(trex)
      .then(res => {
        let img = JSON.parse(res.text);
        id = img._id;
        assert.equal(img.title, trex.title);
        assert.equal(img.url, trex.url);
        assert.equal(img.description, trex.description);
        assert.equal(img.album, trex.album);
        done();
      })
      .catch(done);
  });

  it('Fails to add an image missing information', done => {
    request
      .post('/api/')
      .send(baddino)
      .end(err => {
        assert.equal(err.status, 400);
        assert.equal(err.response.text, '{"error":"Title, URL, and a description are all required"}');
        done();
      });
  });

  it('Gets an album by id', done => {
    request
      .get('/api/albums/' + dino_id)
      .then(res => {
        let albums = JSON.parse(res.text);
        assert.equal(albums[0].title, trex.title);
        assert.equal(albums[0].url, trex.url);
        assert.equal(albums[0].description, trex.description);
        assert.equal(albums[0]._id, id);
        done();
      })
      .catch(done);
  });

  it('Gets an image by id', done => {
    request
      .get('/api/images/' + id)
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
      .put('/api/images/' + id)
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
      .delete('/api/images/' + id)
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