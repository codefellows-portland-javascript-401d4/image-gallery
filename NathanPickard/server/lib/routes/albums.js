const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');
const Album = require('../models/album');

router
  .get('/', (req, res, next) => {
    Album.find(req.query)
      .select('name images')
      .populate('images')
      .then(albums => {
        res.send(albums);
      })
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const album = req.params.id;
    Promise.all([
      Album.findById(album).lean(),
      Image.find({ album }).select('url title').lean()
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
  });

module.exports = router;