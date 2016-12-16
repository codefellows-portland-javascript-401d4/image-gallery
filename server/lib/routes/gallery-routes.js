const express = require('express');
const bodyParser = require('body-parser').json();
const Image = require('../models/image');
const Album = require('../models/album');

const router = express.Router();

router
  .get('/', (req, res, next) => {
    Album.find()
      .lean()
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/albums/:albumId', (req, res, next) => {
    Image.find({ album: req.params.albumId })
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/images/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .lean()
      .then(image => res.send(image))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    const image = new Image(req.body);
    image.save()
      .then(response => {
        if (response.name !== 'ValidationError') {
          res.send(response);
        }
      })
      .catch(err => {
        if (err.name === 'ValidationError') {
          return next({
            code: 400,
            error: 'Title, URL, and a description are all required'
          });
        } else {
          next(err);
        }
      });
  })

  .post('/albums', bodyParser, (req, res, next) => {
    const album = new Album(req.body);
    album.save()
      .then(response => {
        if (response.name !== 'ValidationError') {
          res.send(response);
        }
      })
      .catch(err => {
        if (err.name === 'ValidationError') {
          return next({
            code: 400,
            error: 'Album title is required'
          });
        } else {
          next(err);
        }
      });
  })

  .put('/:id', bodyParser, (req, res, next) => {
    Image.findByIdAndUpdate(req.params.id, req.body) // doesn't return the obj
      .then(() => { return Image.findById(req.params.id); }) // re-fetch obj
      .then(saved => res.send(saved))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Image.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  });

module.exports = router;