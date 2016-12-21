const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('Album requests:', () => {

    before(done => {
        const drop = () => connection.db.dropDatabase(done);
        if (connection.readyState === 1) drop();
        else {
            connection.on('open', drop);
        }
    });

    const request = chai.request(app);

    const cuteBunnies = {
        name: 'Cute Bunnies',
        featured: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
    };

    it('GETs all albums', done => {
        request
            .get('/api/albums')
            .then(res => {
                assert.deepEqual(res.body, []);
                done();
            })
            .catch(done);
    });

    it('POSTs an album', done => {
        request
            .post('/api/albums')
            .send(cuteBunnies)
            .then(res => {
                const album = res.body;
                assert.ok(album._id);
                cuteBunnies.__v = 0;
                cuteBunnies._id = album._id;
                done();
            })
            .catch(done);
    });

    it('GETs album by id with list of images', done => {
        const calico = {
            title: 'Mango Calico Bunny',
            url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
            description: 'A super cute mango calico bunny',
            album: cuteBunnies._id
        };

        request
            .post('/api/images')
            .send(calico)
            .then(res => {
                const image = res.body;
                assert.ok(image._id);
                calico.__v = 0;
                calico._id = image._id;
            })
            .then(() => {
                request
                    .get(`/api/albums/${cuteBunnies._id}`)
                    .then(res => {
                        let expected = {
                            _id: cuteBunnies._id,
                            name: cuteBunnies.name,
                            featured: cuteBunnies.featured,
                            __v: cuteBunnies.__v,
                            images: [
                                {
                                    _id: calico._id,
                                    title: calico.title,
                                    url: calico.url,
                                    description: calico.description
                                }
                            ]
                        };
                        const album = res.body;
                        console.log('album: ', album);
                        assert.deepEqual(album, expected);
                        done();
                    })
                    .catch(done);
            })
            .catch(done);
    });

    it('GETs all albums after POST', done => {
        request
            .get('/api/albums')
            .then(res => {
                assert.deepEqual(res.body, [cuteBunnies]);
                done();
            })
            .catch(done);
    });

    it('DELETEs an album', done => {
        request
            .delete(`/api/albums/${cuteBunnies._id}`)
            .then(res => {
                assert.deepEqual(res.body, cuteBunnies);
                done();
            })
            .catch(done);
    });
	
});
