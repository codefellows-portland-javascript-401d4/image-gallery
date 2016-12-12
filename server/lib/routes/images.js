const express = require('express');
const router = express.Router();

const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    Image.find()
      .then(images => {
        res.send(images);
      })
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then(image => res.send(image))
      .catch(next);
  });

module.exports = router;
