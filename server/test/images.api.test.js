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

   const elephant = {
        title: 'Elephant',
        description: 'An adorable baby elephant.',
        url: 'http://images.nationalgeographic.com/wpf/media-live/photos/000/002/cache/baby-asian-elephant_227_600x450.jpg'
    };

    it('/GET all images', done => {
        request
            .get('/api/images')
            .then(res => {
                assert.deepEqual(res.body, []);
                done();
            })
            .catch(done);
    });

    it('/POST an image', done => {
        request
            .post('/api/images')
            .send(elephant)
            .then(res => {
                const animal = res.body;
                assert.ok(animal._id);
                elephant._id = animal._id;
                done();
            })
            .catch(done);
    });

    it('/GET an image by id', done => {
        request
            .get(`/api/images/${elephant._id}`)
            .then(res => {
                const animal = res.body;
                assert.deepEqual(animal, elephant);
                done();
            })
            .catch(done);
    });

    it('/DELETE an image', done => {
        request
            .del(`/api/images/${elephant._id}`)
            .then( (deleted) => {
                assert.equal(deleted.body.title, elephant.title);
                done();
            })
            .catch(done);
    });

});