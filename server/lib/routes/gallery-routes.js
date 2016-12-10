const express = require('express');
const bodyParser = require('body-parser');
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
    new Gallery(req.body).save();
      .then(saved => req.send({
      message: `${req.body.name} successfully saved.`
      }))
      .catch(next);
});