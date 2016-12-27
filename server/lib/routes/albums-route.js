const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Album = require('../models/album-schema');
const Image = require('../models/image-schema');

router
  .get('/', (req, res, next) => {
    const query = {};
    if(req.query.type) query.type = req.query.type;

    Album.find(query)
      .select('name type url')
      .lean()
      .populate({
        path: 'albumId',
        select: 'name'
      })
      .lean()
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Album.findById(req.params.id)
      .select('name type url')
      .lean()
      .then(album => res.send(album))
      .catch(next);
  })

  .get('/:id/images', (req, res, next) => {
    Image.findById(req.params.id)
      .select('name type url')
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Album(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .put('/:id', bodyParser, (req, res, next) => {
    Album.findByIdAndUpdate(req.params.id, req.body)
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;
