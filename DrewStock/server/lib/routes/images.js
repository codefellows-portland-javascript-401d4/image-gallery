const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    Image.find(req.query)
      .select('url imageTitle imageDescription album')
      .populate('album')
      .then(images => {
        res.send(images);
      })
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then(image => res.send(image))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;
