const Album = require('../lib/models/album');
const assert = require('chai').assert;


describe('album model', () => {
  it('validates with name', done => {
    const album = new Album();
    album.name = 'album';
    album.validate(err => {
      if(!err) done();
      else done(err);
    });
  });

  it('should require a name', done => {
    const album = new Album();
    album.validate(err => {
      assert.isOk(err, 'it should throw and error');
      done();
    });

  });
});