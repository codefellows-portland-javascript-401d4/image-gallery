const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Album = require('../models/album');
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
      Album.findById(album).lean(),
      Image.find({album}).select('title description url').lean()
    ])
    .then(([album, images]) => {
      album.images = images;
      res.send(album);
    })
    .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    console.log('delparams', req.params);
    Album.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })

  .post('/', jsonParser, (req, res, next) => {
    const album = req.body;
    Album.find(album)
      .count()
      .then(count => {
        if(count > 0) {
          return next({
            code: 400,
            error: 'album already exists'
          });
        } else {
          new Album(req.body).save()
          .then(saved => res.send(saved))
          .catch(next);
        }
      });
  })

  .put('/:id', jsonParser, (req, res, next) => {
    Album.findByIdAndUpdate(req.params.id, req.body)
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;