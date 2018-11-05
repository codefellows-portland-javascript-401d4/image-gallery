const express = require('express');
const router = express.Router(); //eslint-disable-line
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    const query = {};

    Album.find(query)
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Promise
      .all([
        Album.findById(req.params.id).lean(),
        Image.find({ albumId: req.params.id })
          .select('name')
          .lean()
      ])
      .then(([album, images]) => {
        console.log('album', album);
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