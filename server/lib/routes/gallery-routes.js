const express = require('express');
const bodyParser = require('body-parser').json();
const Gallery = require('../models/gallery');

const router = express.Router();

router
  .get('/', (req, res, next) => {
    Gallery.find()
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Gallery.findById(req.params.id)
      .lean()
      .then(image => res.send(image))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    const image = new Gallery(req.body);
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
  });

module.exports = router;