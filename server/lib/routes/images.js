const express = require('express');
const router = express.Router();
const Image = require('../models/image');
const Album = require('../models/album');
const bodyParser = require('body-parser').json();

router
  .get('/', (req, res, next) => {
    Image.find({})
    .then(images => res.send(images))
    .catch(() => next({code: 400, message: 'Bad request'}));
  })

  .post('/', bodyParser, (req, res, next) => {
    let albumId;
    Album.find({name: req.body.album})
      .then(album => {
        return albumId = album[0]._id;
      })
    .then(() => {
      req.body.albumId = albumId;
      console.log('what am i saving', req.body);
      new Image(req.body).save()
        .then(saved => {
          console.log('what am I sending back', saved);
          res.send(saved);
        });
    })
      .catch(next);
  });


module.exports = router;