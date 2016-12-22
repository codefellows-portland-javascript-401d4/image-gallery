const Image = require('../lib/models/image');
const assert = require('chai').assert;

describe('Image model', () => {

    it('validates with title, url, and description', done => {
        const image = new Image({
            title: 'Tiny Bunny',
            url: 'http://www.fakepictureurl1.com',
            description: 'A picure of a tiny bunny'
        });

        image.validate(err => {
            if (!err) done();
            else done(err);
        });
    });

    it('title is required', done => {
        const image = new Image({
            url: 'http://www.fakepictureurl1.com',
            description: 'A picure of a tiny bunny'
        });

        image.validate(err => {
            assert.isOk(err, 'title should have been required');
            done();
        });
    });

    it('url is required', done => {
        const image = new Image({
            title: 'Tiny Bunny',
            description: 'A picure of a tiny bunny'
        });

        image.validate(err => {
            assert.isOk(err, 'url should have been required');
            done();
        });
    });

    it('description is required', done => {
        const image = new Image({
            title: 'Tiny Bunny',
            url: 'http://www.fakepictureurl1.com'         
        });

        image.validate(err => {
            assert.isOk(err, 'description should have been required');
            done();
        });
    });

});
