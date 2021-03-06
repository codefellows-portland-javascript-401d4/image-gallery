const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const Image = require('../models/image');

router
    .get('/', (req, res, next) => {
      Album.find(req.query).lean()
            .then(albums => res.send(albums ))
            .catch(next);
    })

     .get('/:id', (req, res, next) => {
       const album = req.params.id;

       Promise.all([
         Album.findById(album).lean(),
         Image.find({ album }).select('title url desc').lean()
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

    .post('/', bodyParser, (req, res, next) => {
      new Album(req.body).save()
            .then(saved => res.send(saved))
            .catch(next);
    })

    .put('/:id', bodyParser, (req, res, next) => {
      Album.findByIdAndUpdate(req.params.id, req.body)
            .then(saved => res.send(saved))
            .catch(next);
    })

  .put('/:albumId/images/:imageId', bodyParser, (req, res, next) => {
    Image.findById(req.params.imageId)
            .then(image => {
              image.album = req.params.albumId;
              return image.save();
            })
            .then(image => res.send(image))
            .catch(next);
  });

module.exports = router;