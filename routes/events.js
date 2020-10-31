const express = require('express');
const router = express.Router()
const {ensureAuth,ensureAdmin} = require('../middleware/auth')
const Event = require('../models/events')

// get a list of events from database
router.get('/',ensureAuth, function (req, res, next) {
    var flag=0
    console.log(1)
    if(req.user.role==='admin'){
        flag=1
        console.log(2)
    }
    console.log(3)
    Event.find({ date: { $gt: Date.now() } }).sort({ date: 1 }).then(function (events) {
        res.render('events',{events},flag);
    })
});
  
  // add a new event to the database
  router.post('/add',ensureAuth,ensureAdmin, function (req, res) {
    Event.create(req.body).then(function (event) {
        res.redirect('/');
    })
  });
  // add a new event to the database
router.get('/add',ensureAuth,ensureAdmin, function (req, res, next) {
    res.render('events_add');
});
  
  // update a event in the database
  router.put('/:id',ensureAuth,ensureAdmin, function (req, res, next) {
    Event.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Event.findOne({ _id: req.params.id }).then(function (event) {
            res.redirect('/');
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