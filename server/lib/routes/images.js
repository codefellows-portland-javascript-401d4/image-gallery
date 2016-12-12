const express = require('express');
const router = express.Router();
const Image = require('../models/image');
const bodyParser = require('body-parser').json();

router
  .get('/', (req, res, next) => {
    Image.find({})
    .then(images => res.send(images))
    .catch(() => next({code: 400, message: 'Bad request'}));
  })

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;