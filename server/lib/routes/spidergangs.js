const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Spidergang = require('../models/spidergang');

router
  .get('/', (req, res, next) => {
    Spidergang.find(req.query).lean()
      .then(spidergangs => res.send(spidergangs))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Spidergang.findById(req.params.id).lean()
      .then(spidergang => res.send(spidergang))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Spidergang.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Spidergang(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .put('/:id', bodyParser, (req, res, next) => {
    Spidergang.findByIdAndUpdate(req.params.id, req.body)
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;
