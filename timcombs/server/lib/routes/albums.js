const express = require('express');
const bodyParser = require('body-parser').json();

const Album = require('../models/album');
const Image = require('../models/image');

const router = express.Router();

router
  .get('/', (req, res, next) => {
    const query = {};

    Album.find(query)
      .select('name description _id')
      .lean()
      .then(data => res.send(data))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const albumId = req.params.id;

    Promise
      .all([
        Album.findById(albumId).lean(),
        Image
          .find({albumId})
          .select('name description _id')
          .lean()
      ])
      .then(([album, images]) => {
        album.images = images;
        res.send({data: album});
      })
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Album(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .put('/:id', bodyParser, (req, res, next) => {
    const albumId = req.params.id;

    Album.findByIdAndUpdate(albumId, {$set: req.body}, {new: true})
      .then(data => {
        res.send({data: data});
      })
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const albumId = req.params.id;

    Album.findByIdAndRemove(albumId)
      .then(data => {
        res.send({data: data});
      })
      .catch(next);
  });

module.exports = router;