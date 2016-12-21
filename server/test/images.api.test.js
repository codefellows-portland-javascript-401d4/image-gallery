const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('Image requests:', () => {

    before(done => {
        const drop = () => connection.db.dropDatabase(done);
        if (connection.readyState === 1) drop();
        else {
            connection.on('open', drop);
        }
    });

    const request = chai.request(app);

    const calico = {
        title: 'Mango Calico Bunny',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        description: 'A super cute mango calico bunny'
    };

    it('GETs all images', done => {
        request
            .get('/api/images')
            .then(res => {
                assert.deepEqual(res.body, []);
                done();
            })
            .catch(done);
    });

    it('POSTs a new image', done => {
        request
            .post('/api/images')
            .send(calico)
            .then(res => {
                const image = res.body;
                assert.ok(image._id);
                calico._id = image._id;
                done();
            })
            .catch(done);

    });

    it('GETs image by id', done => {
        request
            .get(`/api/images/${calico._id}`)
            .then(res => {
                const image = res.body;
                assert.deepEqual(image, calico);
                done();
            })
            .catch(done);
    });

    it('GETs all after post', done => {
        request
            .get('/api/images')
            .then(res => {
                assert.deepEqual(res.body, [ calico ]);
                done();
            })
            .catch(done);
    });

    it('DELETEs an image', done => {
        request
            .delete(`/api/images/${calico._id}`)
            .then(res => {
                calico.__v = 0;
                assert.deepEqual(res.body, calico);
                done();
            })
            .catch(done);
    });
	
});
