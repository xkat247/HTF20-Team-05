const express = require('express');
const router = express.Router()
const {ensureAuth,ensureAdmin} = require('../middleware/auth')
const Event = require('../models/events')

// get a list of events from database
router.get('/',ensureAuth,ensureAdmin, function (req, res, next) {
    Event.find({}).then(function (events) {
      res.send(events);
    })
  });
  
  // add a new event to the database
  router.post('/',ensureAuth,ensureAdmin, function (req, res, next) {
    Event.create(req.body).then(function (event) {
      res.send(event);
    }).catch(next);
  });
  
  // update a event in the database
  router.put('/:id',ensureAuth,ensureAdmin, function (req, res, next) {
    Event.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
      Event.findOne({ _id: req.params.id }).then(function (event) {
        res.send(event);
      });
    });
  });
  
  // delete a event from the database
  router.delete('/:id',ensureAuth,ensureAdmin, function (req, res, next) {
    Event.findByIdAndRemove({ _id: req.params.id }).then(function (event) {
      res.send(event);
    });
  });

  module.exports = router