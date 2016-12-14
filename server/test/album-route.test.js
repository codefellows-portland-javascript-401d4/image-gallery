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

    it('tests the post route', done => {
        request
            .post('/api/albums')
            .send(whateverAlbum)
            .then(res => {
                assert.isOk(res.body);
                let {__v, _id} = res.body;
                whateverAlbum.__v = __v;
                whateverAlbum._id = _id;
                assert.deepEqual(res.body, whateverAlbum);
                done();
            })
            .catch(done);
    });

    // TODO: include get/name route

    it('tests the delete route', done => {
        request
            .del(`/api/albums/${whateverAlbum._id}`)
            .then(res => {
                assert.deepEqual(res.body, whateverAlbum);
                done();
            })  
            .catch(done);
    });
});