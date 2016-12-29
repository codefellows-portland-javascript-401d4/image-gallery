const express = require('express');
const router = express.Router();
const Album = require('../models/album');
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    let result;
    Album.find(req.query).lean()
      .then(albums => {
        result = albums;
        Promise.all(albums.map((item, idx) => {
          return Image.find({album: item._id})
            .then(images => {
              result[idx].images = images;
            });
        }))
        .then(() => {
          res.send(result);
        });
      })
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
    Album.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  });

module.exports = router;