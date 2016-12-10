const express = require('express');
const bodyParser = require('body-parser');
const gallery = require('../models/gallery');

const router = express.Router();

router
  .get('/', (req, res, next) => {
    next();
  })
  .get('/:id', (req, res, next) => {
    next();
  })
  .post('/', bodyParser, (req, res, next) => {
    next();
});