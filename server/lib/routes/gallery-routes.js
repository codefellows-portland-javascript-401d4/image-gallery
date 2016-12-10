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
      .then(res.send(`${image.title} successfully saved.`))
      .catch(next);
  });

module.exports = router;