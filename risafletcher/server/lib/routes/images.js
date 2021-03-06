const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Images = require('../models/images');

router
  .get('/', (req, res, next) => {
    const query = {};
    Images.find(query)
      .then(images => res.send(images))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Images.findById(req.params.id)
      .then(image => res.send(image))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    new Images(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Images.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  });

module.exports = router;