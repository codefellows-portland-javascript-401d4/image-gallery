const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
// const Image = require('../models/image');
const Album = require('../models/album');

router
  .get('/', (req, res, next) => {
    Album.find(req.query)
      .select('name images')
      .populate('images')
      .then(albums => {
        res.send(albums);
      })
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Album.findById(req.params.id)
      .then(album => res.send(album))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    new Album(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;
