const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Mantis = require('../models/mantis-schema');

router
  .get('/', (req, res, next) => {
    const query = {};
    if(req.query.type) query.type = req.query.type;

    Mantis.find(query)
      .select('name type url')
      .lean()
      .populate({
        path: 'insectId',
        select: 'name'
      })
      .lean()
      .then(mantids => res.send(mantids))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Mantis.findById(req.params.id)
      .select('name type url')
      .lean()
      .then(mantis => res.send(mantis))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Mantis.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Mantis(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .put('/:id', bodyParser, (req, res, next) => {
    Mantis.findByIdAndUpdate(req.params.id, req.body)
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;
