const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json;
const Image = require('../models/image');

router  
    .get('/', (req, res, next) => {
        Image.find()
        .lean()
        .then(images => res.send(images))
        .catch(err => {
            console.log('error getting images: ', err);
            next(err);
        });
    })

    .get('/:id', (req, res, next) => {
        Image.findById(req.params.id)
            .lean()
            .then(image => res.send(image))
            .catch(err => {
                console.log('error getting image by id: ', err);
                next(err);
            });
    });

    module.exports = router;