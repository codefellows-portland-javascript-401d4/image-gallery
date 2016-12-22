const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Spider = require('../models/spider-schema');

router
  .get('/', (req, res, next) => {
    const query = {};
    if(req.query.type) query.type = req.query.type;

    Spider.find(query)
      .select('name type url')
      .lean()
      .populate({
        path: 'arachnidId',
        select: 'name'
      })
      .lean()
      .then(spiders => res.send(spiders))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Spider.findById(req.params.id)
      .select('name type url')
      .lean()
      .then(spider => res.send(spider))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Spider.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Spider(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .put('/:id', bodyParser, (req, res, next) => {
    Spider.findByIdAndUpdate(req.params.id, req.body)
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;
