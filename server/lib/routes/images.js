const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
    .get('/', bodyParser, (req, res, next) => {
        Image
            .find({})
            .then(images => {
                res.send(images);
            })
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        const {title, description, url} = req.body;
        if (!title || !description || !url) {
            return next({
                code: 400,
                error: 'One of the following fields are missing title/description/url' 
            });
        };

        let importImage = new Image(req.body);
        importImage
            .save()
            .then(image => {
                res.send(image);
            })
            .catch(next);
    })
    .delete('/:id', bodyParser, (req, res, next) => {
        const _id = req.params.id;
        Image
            .findByIdAndRemove({_id})
            .then(image => {
                res.send(image);
            })
            .catch(next);
    });

module.exports = router;