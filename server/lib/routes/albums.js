const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Album = require('../models/albums');
const Image = require('../models/image');

router  
  .get('/', (req, res, next) => {
    Album.find({}).lean()
    .then(albums => res.send(albums))
    .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const album = req.params.id;

    Promise.all([
      Album.findById(album).lean(),
      Image.find({album}).lean()
    ])
    .then(([album, images]) => {
      album.images = images;
      res.send(album);
    })
    .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Album(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  });

module.exports = router;
