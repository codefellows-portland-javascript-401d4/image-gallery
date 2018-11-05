const app = require('../lib/app');

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const expect = chai.expect;
chai.use(chaiHttp);

mongoose.Promise = Promise;

//need to connect to db
const connection = require('../lib/set-mongoose');
//need to connect to server
const request = chai.request(app);

describe('e2e testing the album', () => {
  before((done) => {
    const CONNECTED = 1;
    if (connection.readyState === CONNECTED) dropCollection();
    else connection.on('open', dropCollection);

    function dropCollection() {
      const name = 'albums';
      connection.db
        .listCollections({name})
        .next((err, callinfo) => {
          if (!callinfo) return done();
          connection.db.dropCollection(name, done);
        });
    }
  });

  const albumTested = {
    name: 'testAlbum',
    description: 'blah blah blah'
  };

  it('gets all albums', done => {
    request
      .get('/api/albums')
      .then(res => {
        const knownAlbums = [];
        expect(res.body).to.deep.equal(knownAlbums);
        done();
      })
      .catch(done);
  });

  it('navigates to POST and stashes a new note', (done) => {
    request
      .post('/api/albums')
      .send(albumTested)
      .then(res => {
        const album = res.body;
        expect(album._id).to.be.ok;
        albumTested.__v = 0;
        albumTested._id = album._id;
        done();
      })
      .catch(done);
  });







});