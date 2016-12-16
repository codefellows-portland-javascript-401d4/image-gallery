const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    let query = {};
    if(req.query) query = req.query;
    
    Image.find(query)
      .populate('album', 'name')
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .lean()
      .then(image => res.send(image))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Image.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })

  .post('/', jsonParser, (req, res, next) => {
    new Image(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;