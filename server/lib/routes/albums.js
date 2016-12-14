const express =  require ('express');
const router = express.Router();//eslint-disable-line
const bodyParser = require ('body-parser').json();
const Album = require('../models/album');

router
    .get('/', (req, res, next) => {
      const query = {};
      if(req.query.title) query.title = req.query.title;

      Image.find(query)
        .select('title description')
        .lean()
        .then(albums => res.send(albums))
        .catch(next);
    })

    .delete('/:id', (req, res, next) => {
      Image.findByIdAndRemove(req.params.id)
        .then(deleted => res.send(deleted))
        .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
      new Album(req.body).save()
        .then(saved => {
          res.send(saved);
        })
        .catch(err => {
          console.log('err', err);
          next();
        });
    });

module.exports = router;