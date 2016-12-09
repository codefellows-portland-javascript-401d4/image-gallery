const express = require('express');
const router = express.Router();
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    const query = {}
    if(req.query.rank) query.rank = req.query.rank;
  })

  .get('./id:', (req,res, next) => {
    Image.findById(req.params.id)
  })
  