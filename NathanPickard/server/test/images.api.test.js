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

    const testImage = {
        title: 'TestingImage',
        description: 'Monkey image',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Saimiri_sciureus-1_Luc_Viatour.jpg/220px-Saimiri_sciureus-1_Luc_Viatour.jpg'
    };

    it('Empty', done => {
        request.get('/api/images')
            .then(res => {
                assert.deepEqual(res.body, []);
                done();
            })
            .catch(done);
    });

    it('/POST', done => {
        request
            .post('/api/images')
            .send(testImage)
            .then(res => {
                const newImage = res.body;
                assert.ok(newImage._id);
                testImage._id = newImage._id;
                testImage.__v = newImage.__v;
                done();
            })
            .catch(done);
    });

    it('/GET all', done => {
        request.get('/api/images')
            .then(res => {
                assert.deepEqual(res.body[0], testImage);
                done();
            })
            .catch(done);
    });
    
});