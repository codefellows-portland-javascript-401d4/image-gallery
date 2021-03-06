const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router  
    .get('/', (req, res, next) => {
        Image.find()
        .lean()
        .select('title description url')
        .then(images => res.send(images))
        .catch(err => {
            console.log('error getting images: ', err);
            next(err);
        });
    })

    .get('/:id', (req, res, next) => {
        Image.findById(req.params.id)
            .lean()
            .select('title description url')
            .then(image => res.send(image))
            .catch(err => {
                console.log('error getting image by id: ', err);
                next(err);
            });
    })
    
    .post('/', bodyParser, (req, res, next) => {
        new Image(req.body).save()
            .then(saved => res.send(saved))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Image.findByIdAndRemove(req.params.id)
            .then(deleted => res.send(deleted))
            .catch(next);
    });

    module.exports = router;