const express =  require ('express');
const router = express.Router();//eslint-disable-line
const bodyParser = require ('body-parser').json();
const Image = require('../models/image');

router
    .get('/', (req, res, next) => {
      const query = {};
      if(req.query.title) query.title = req.query.title;

      Image.find(query)
        .select('title description url fullImage thumbnail albumId')
        .populate('albumId', 'title')
        .lean()
        .then(images => {
          res.send(images);})
        .catch(next);
    })

    .get('/:albumId', (req, res, next) => {
      const albumId = req.params.albumId;
      console.log('albumId', albumId);
      Image.find({albumId})
      .then(image => {
        res.send(image);
        console.log('image', image);
      })
      .catch(next);
    })

    .delete('/:id', (req, res, next) => {
      Image.findByIdAndRemove(req.params.id)
        .then(deleted => res.send(deleted))
        .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
      new Image(req.body).save()
        .then(saved => {
          res.send(saved);
        })
        .catch(err => {
          console.log('err', err);
          next();
        });
    });

module.exports = router;