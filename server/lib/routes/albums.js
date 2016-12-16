const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Album = require('../models/crew');
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    Album.find(req.query).lean()
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const album = req.params.id;

    Promise.all([
      Album.findById(album),
      Image.find({album}).lean()
    ])
    .then(([album, images]) => {
      album.images = images;
      res.send(album);
    })
    .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })

  .post('/', jsonParser, (req, res, next) => {
    new Album(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .put('/:id', jsonParser, (req, res, next) => {
    Album.findByIdAndUpdate(req.params.id, req.body)
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;