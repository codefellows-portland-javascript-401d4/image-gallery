const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    Image.find()
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then(img => res.send(img))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(newImg => res.send(newImg))
      .catch(next);
  });

module.exports = router;