const express = require('express');
const router = express.Router()
const LostFound = require('../models/lostfound')

// get a list of items from database
router.get('/', function (req, res, next) {
    LostFound.find({ createdAt: { $lt: Date.now() } }).sort({ createdAt: -1 }).then(function (items) {
        res.send(items);
    })
});

// add a new item to the database
router.post('/', function (req, res, next) {
    LostFound.create(req.body).then(function (item) {
        res.send(item);
    }).catch(next);
});

// update a item in the database
router.put('/:id', function (req, res, next) {
    LostFound.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        LostFound.findOne({ _id: req.params.id }).then(function (item) {
            res.send(item);
        });
    });
});

// delete a item from the database
router.delete('/:id', function (req, res, next) {
    LostFound.findByIdAndRemove({ _id: req.params.id }).then(function (item) {
        res.send(item);
    });
});

module.exports = router