const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

//to test validation
const Image = require('../lib/models/image.js');

describe('unit testing the image model', () => {

  it('validates with name and url', (done) => {
    const image = new Image({
      name: 'test image',
      url: 'http://www.someURL.mock'
    });

    image.validate((err) => {
      if (!err) done();
      else done(err);
    });
  });

  it('requires a name to validate', (done) => {
    const image = new Image({
      name: '',
      url: 'http://www.someURL.mock'
    });

    image.validate((err) => {
      expect(err, 'name should have been required').to.be.ok;
      done();
    });
  });

  it('requires a url to validate', (done) => {
    const image = new Image({
      name: 'this image',
      url: ''
    });

    image.validate((err) => {
      expect(err, 'url should have been required').to.be.ok;
      done();
    });
  });

});