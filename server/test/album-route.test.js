const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const app = require('../lib/app');
const connection = require('./mongoose-test-setup');
chai.use(chaiHttp);

describe('testing album api end points', () => {

    before((done) => {
        const drop = () => connection.db.dropDatabase(done);
        if(connection.readyState === 1) drop();
        else connection.on('open', drop);
    });

    let request = chai.request(app);

    it('tests the get route', done => {
        request
            .get('/api/albums')
            .then(res => {
                assert.isOk(res.body);
                done();
            })
            .catch(done);
    });

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

    it('tests the post route and posts image to image route with category', done => {
        let whateverAlbumId = '';
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

    it('tests the get/:name route to make sure images are populated', done => {
        request
            .get(`/api/albums/${whateverAlbum.name}`)
            .then(res => {
                assert.deepEqual(res.body, whateverAlbum);
                done();
            })
            .catch(done);
    });

    it('tests the delete route', done => {
        request
            .del(`/api/albums/${whateverAlbum._id}`)
            .then(res => {
                whateverAlbum.images = [];
                assert.deepEqual(res.body, whateverAlbum);
                done();
            })  
            .catch(done);
    });
});