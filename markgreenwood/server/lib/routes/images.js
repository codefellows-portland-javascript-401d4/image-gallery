const express = require('express');
const images = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

images
  .get('/', (req, res, next) => {
    const query = {};
    Image.find(query)
      .select('title link description')
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })
  
  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .select('title link description')
      .lean()
      .then(image => res.send(image))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then((savedImage) => { res.send(savedImage); })
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    // TODO: Implement PUT /api/images/:id
    return Promise.resolve(next);
  })

  .delete('/:id', (req, res, next) => {
    Image.findByIdAndRemove(req.params.id)
      .then(deletedImage => res.send(deletedImage))
      .catch(next);
  });

module.exports = images;