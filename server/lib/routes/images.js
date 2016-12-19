const express = require('express');
const router = express.Router(); //eslint-disable-line
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    const query = {};

    Image.find(query)
      .populate({
        path: 'albumId',
        select: 'title'
      })
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Image.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  });

module.exports = router;