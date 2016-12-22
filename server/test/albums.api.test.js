const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('image', () => {

    before(done => {
        const drop = () => connection.db.dropDatabase(done);
        if (connection.readyState === 1) drop();
        else {
            connection.on('open', drop);
        }
    });

    const request = chai.request(app);

    const testAlbum = {
        name: 'New Album',
        description: 'A test album, cool huh'
    };

    it('/GET all albums', done => {
        request
            .get('/api/albums')
            .then(res => {
                assert.deepEqual(res.body, []);
                done();
            })
            .catch(done);
    });

    it('/POST a new album', done => {
        request
            .post('/api/albums')
            .send(testAlbum)
            .then(res => {
                assert.ok(res.body._id);
                testAlbum._id = res.body._id;
                done();
            })
            .catch(done);
    });

    it('/GET an album by id', done => {
        request
            .get(`/api/albums/${testAlbum._id}`)
            .then(res => {
                assert.deepEqual(res.body.description, testAlbum.description);
                done();
            })
            .catch(done);
    });

    it('/DELETE an album', done => {
        request
            .del(`/api/albums/${testAlbum._id}`)
            .then( (deleted) => {
                assert.equal(deleted.body.name, testAlbum.name);
                done();
            })
            .catch(done);
    });
});