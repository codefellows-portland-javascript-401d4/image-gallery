const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    Album.find(req.query)
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const albumId = req.params.id;

    Promise.all([
      Album.findById(albumId).lean(),
      Image.find({album: albumId}).lean()
    ])
    .then(([album, image]) => {
      album.image = image;
      console.log('what am i sending', album);
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