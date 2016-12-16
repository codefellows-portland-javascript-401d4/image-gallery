const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const Image = require('../models/pirate');

router
  .get('/', (req, res, next) => {
    Album.find(req.query)
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const album = req.params.id;

    Promise.all([
      Album.findById(album).lean(),
      Image.find({album}).select('url').lean()
    ])
    .then(([album, image]) => {
      album.image = image;
      res.send(album);
    })
    .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Album(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;