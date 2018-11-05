const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Image = require('../models/image');
const Album = require('../models/album');

router
  .get('/', (req, res, next) => {
    let query = {};
    if(req.query) query = req.query;
    
    Image.find(query)
      .populate('album', 'name')
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .lean()
      .then(image => res.send(image))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Image.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })

  .post('/', jsonParser, (req, res, next) => {
    const newAlbum = new Album(req.body);
    const newImg = new Image(req.body);
    Album.findOne({name: req.body.name})
      .then(album => {
        if(album) {
          return album;
        }
        return newAlbum.save();
      })
      .then(album => {
        newImg.album = album._id;
        return newImg.save();
      })
      .then(image => res.send(image))
      .catch(next);
  });
 
module.exports = router;