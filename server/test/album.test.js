const Album = require('../lib/models/album');
const assert = require('chai').assert;

describe('Album model', () => {

    it('validates with name and featured', done => {
        const album = new Album({
            name: 'Tiny Bunnies',
            featured: 'http://www.fakepictureurl1.com'
        });

        album.validate(err => {
            if (!err) done();
            else done(err);
        });
    });

    it('name is required', done => {
        const album = new Album({
            featured: 'http://www.fakepictureurl1.com'
        });

        album.validate(err => {
            assert.isOk(err, 'name should have been required');
            done();
        });
    });

});
