const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
    .get('/', (req, res, next) => {
        Image.find()
            .select('title url description album')
            .then(images => res.send(images))
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Image.findByIdAndRemove(req.params.id)
            .then(deleted => res.send(deleted))
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        console.log('in post route');
        new Image(req.body).save()
            .then(image => res.send(image))
            .catch(next);
    })
    .delete('/', (req, res, next) => {
        Image.remove()
            .then(() => {
                res.send('All images deleted');
            })
            .catch(next);
    });
module.exports = router;