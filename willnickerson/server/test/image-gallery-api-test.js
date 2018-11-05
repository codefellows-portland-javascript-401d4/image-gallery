const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');

const app = require('../lib/app');

describe('image gallery API', () => {
    before(done => {
        const drop = () => connection.db.dropDatabase(done);
        if(connection.readyState === 1) drop();
        else {
            connection.on('open', drop);
        }
    });

    const request = chai.request(app);

    const testImg = {
        title: 'test',
        url: 'http://placehold.it/350x150',
        description: 'test image'
    };

    it('GET all before post', done => {
        request
            .get('/api/images')
            .then(res => {
                assert.deepEqual(res.body, []);
                done();
            })
            .catch(done);
    });

    it('POST an image', done => {
        request
            .post('/api/images')
            .send(testImg)
            .then(res => {
                const image = res.body;
                assert.isOk(image._id);
                testImg._id = image._id;
                done();
            })
            .catch(done);
    });

    it('retrieves all images', done => {
        request
            .get('/api/images')
            .then(res => {
                assert.deepEqual([testImg], res.body);
                done();
            })
            .catch(done);
    });
});