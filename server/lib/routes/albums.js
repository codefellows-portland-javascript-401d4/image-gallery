const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const Image = require('../models/image');

router
    .get('/', (req, res, next) => {
        Album.find()
            .select('title')
            .then(albums => res.send(albums))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const album = req.params.id;
        Promise.all([
            Album.findById(album).lean(),
            Image.find({album}).lean()
        ])
            .then(([album, images]) => {
                console.log('album images', images);
                album.images = images;
                res.send(album);
            })
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Album.findByIdAndRemove(req.params.id)
            .then(deleted => res.send(deleted))
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        new Album(req.body).save()
            .then(album => res.send(album))
            .catch(next);
    })
    .post('/:albumId', bodyParser, (req, res, next) => {
        const image = req.body;
        image.album = req.params.albumId;
        new Image(image).save()
            .then(image => res.send(image))
            .catch(next);
    })
    .delete('/', (req, res, next) => {
        Album.remove()
            .then(() => {
                res.send('All albums deleted');
            })
            .catch(next);
    });

module.exports = router;