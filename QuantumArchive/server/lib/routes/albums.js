const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');
const Album = require('../models/album');

router
    .get('/', bodyParser, (req, res, next) => {
        Album
            .find({})
            .then(albums => {
                res.send(albums);
            })
            .catch(next);
    })
    .get('/:name', bodyParser, (req, res, next) => {
        const name = req.params.name;
        Promise
            .all([
                Album
                    .findOne({name}),
                Image
                    .find({category: name})
            ])
            .then(([album, images]) => {
                album.images = images;
                res.send(album);
            })
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        req.body.name = req.body.name.toLowerCase();
        let newAlbum = new Album(req.body);
        newAlbum
            .save()
            .then(album => {
                res.send(album);
            })
            .catch(next);
    })
    .delete('/:id', bodyParser, (req, res, next) => {
        const _id = req.params.id;
        Album
            .findByIdAndRemove({_id})
            .then(image => {
                res.send(image);
            })
            .catch(next);
    });

module.exports = router;