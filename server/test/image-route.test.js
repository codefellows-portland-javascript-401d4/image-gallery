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
            .get('/api/images')
            .then(res => {
                assert.isOk(res.body);
                done();
            })
            .catch(done);
    });

    let whateverImage = {
        title: 'whatever',
        description: 'whatever',
        url: 'whatever'
    };

    it('tests the post route', done => {
        request
            .post('/api/images')
            .send(whateverImage)
            .then(res => {
                assert.isOk(res.body);
                let {__v, _id} = res.body;
                whateverImage.__v = __v;
                whateverImage._id = _id;
                assert.deepEqual(res.body, whateverImage);
                done();
            })
            .catch(done);
    });

    it('tests the delete route', done => {
        request
            .del(`/api/images/${whateverImage._id}`)
            .then(res => {
                assert.deepEqual(res.body, whateverImage);
                done();
            })  
            .catch(done);
    });
});