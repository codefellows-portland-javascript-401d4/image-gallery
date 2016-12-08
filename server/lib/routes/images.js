const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    const query = {};

    Image.find(query)
      .then(images => res.send(images))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });

  module.exports = router;