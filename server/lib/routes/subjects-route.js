const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Subject = require('../models/subject-schema');

router
  .get('/', (req, res, next) => {
    const query = {};
    if(req.query.type) query.type = req.query.type;

    Subject.find(query)
      .select('name type url')
      .lean()
      .populate({
        path: 'subjectId',
        select: 'name'
      })
      .lean()
      .then(subjects => res.send(subjects))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Subject.findById(req.params.id)
      .select('name type url')
      .lean()
      .then(subject => res.send(subject))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Subject.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Subject(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .put('/:id', bodyParser, (req, res, next) => {
    Subject.findByIdAndUpdate(req.params.id, req.body)
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;
