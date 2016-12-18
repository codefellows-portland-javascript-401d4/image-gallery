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
    new Image(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });

  // .post('/', jsonParser, (req, res, next) => {
  //   console.log('imagepost reqbody', req.body);
  //   const newImg = new Image(req.body);
  //   Album.find({name: req.body.albumName})
  //     // .count()
  //     .then(album => {
  //       console.log('image post album', album);
  //       if(album) {
  //         let existingAlbum = album;
  //         newImg.save()
  //         // .then(savedImg => {
  //         //   existingAlbum[0].images.push(savedImg);
  //         //   console.log('existing album', existingAlbum);
  //         // })
  //         .then(savedImg => {
  //           console.log('savedImg', savedImg);
  //           existingAlbum[0].images = savedImg;
  //           console.log('existalb', existingAlbum[0]);
  //         })
  //         .then(saved => res.send(saved))
  //         .catch(next);
  //       } else {
  //         router.post('/albums', (req, res, next) => {
  //           let newAlbum = new Album(req.body.albumName);
  //           newAlbum.save()
  //           .then(album => {
  //             console.log('new album', album);
  //             album.images.push(newImg)
  //           .then(saved => res.send(saved))
  //           .catch(next);
  //           });
  //         });
          
          
        
  //       }
       
  //     });
  
  // });

module.exports = router;