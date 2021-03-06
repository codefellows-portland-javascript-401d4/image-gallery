const Image = require('../lib/models/image');
const assert = require('chai').assert;

describe('Image model', () => {
  it ('validates with title, description, url', done => {
    const image = new Image({
      title: 'title',
      description: 'description',
      url: 'http://url.com'
      // album: 'album'
    });

    image.validate(err => {
      if (!err) done();
      else done(err);
    });
  });

  it('should require a url', done => {
    const image = new Image({
      title: 'title',
      description: 'description'
    });

    image.validate(err => {
      assert.isOk(err, 'url should be required');
      done();
    });
  });
});