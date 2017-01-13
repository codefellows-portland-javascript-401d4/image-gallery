const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();
const Album = require('../models/album');
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    Album.find()
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Promise.all([
      Album.findById(req.params.id).lean(),
      Image.find({ albumId: req.params.id }).select('title description url').lean()
    ])
      .then(([album, images]) => {
        album.images = images;
        res.send(album);
      })
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Album(req.body).save()
      .then(newAlbum => res.send(newAlbum))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then(del => res.send(del))
      .catch(next);
  });

module.exports = router;