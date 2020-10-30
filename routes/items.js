const express = require('express');
const router = express.Router()
const {ensureAuth,ensureAdmin} = require('../middleware/auth')

const Item = require('../models/items')

// get a list of items from database
router.get('/',ensureAuth, function (req, res, next) {
    Item.find({}).then(function (items) {
      res.send(items);
    })
  });
  
  // add a new items to the database
  router.post('/',ensureAuth,ensureAdmin, function (req, res, next) {
    Item.create(req.body).then(function (item) {
      res.send(item);
    }).catch(next);
  });
  
  // update a items in the database
  router.put('/:id',ensureAuth,ensureAdmin, function (req, res, next) {
    Item.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
      Item.findOne({ _id: req.params.id }).then(function (item) {
        res.send(item);
      });
    });
  });
  
  // delete a items from the database
  router.delete('/:id',ensureAuth,ensureAdmin, function (req, res, next) {
    Item.findByIdAndRemove({ _id: req.params.id }).then(function (item) {
      res.send(item);
    });
  });

  module.exports = router