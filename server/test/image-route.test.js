const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const app = require('../lib/app');
const connection = require('./mongoose-test-setup');
chai.use(chaiHttp);

describe('testing image api end points', () => {

    before((done) => {
        const drop = () => connection.db.dropDatabase(done);
        if(connection.readyState === 1) drop();
        else connection.on('open', drop);
    });

    let request = chai.request(app);

    let whateverAlbum = {
        name: 'whatever',
        images: []
    };

    let whateverImage = {
        title: 'whatever',
        description: 'whatever',
        url: 'whatever',
        category: 'whatever'
    };

    let whateverAlbumId = '';

    it('posts to Albums and then to Images', done => {
        request
            .post('/api/albums')
            .send(whateverAlbum)
            .then(res => {
                assert.isOk(res.body);
                let {__v, _id} = res.body;
                whateverAlbum.__v = __v;
                whateverAlbum._id = _id;
                whateverAlbumId = _id;
                assert.deepEqual(res.body, whateverAlbum);
                return request
                    .post('/api/images')
                    .send(whateverImage);
            })
            .then(res => {
                assert.isOk(res.body);
                let {__v, _id} = res.body;
                whateverImage.__v = __v;
                whateverImage._id = _id;
                whateverImage.albumId = whateverAlbumId;
                assert.deepEqual(res.body, whateverImage);
                whateverAlbum.images.push(whateverImage); 
                done();
            })
            .catch(done);
    });

    it('tests the get route', done => {
        request
            .get('/api/images')
            .then(res => {
                assert.isOk(res.body);
                whateverAlbum.images = [];
                whateverImage.albumId = whateverAlbum;
                assert.deepEqual(res.body[0], whateverImage);
                done();
            })
            .catch(done);
    });

    it('tests the delete route', done => {
        request
            .del(`/api/images/${whateverImage._id}`)
            .then(res => {
                whateverImage.albumId = whateverAlbumId;
                assert.deepEqual(res.body, whateverImage);
                done();
            })  
            .catch(done);
    });
});