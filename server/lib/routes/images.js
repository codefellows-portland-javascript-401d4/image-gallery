const express = require('express');
const router = express.Router();
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    Image.find({})
    .then(images => res.send(images))
    .catch(() => next({code: 400, message: 'Bad request'}));
  });

module.exports = router;