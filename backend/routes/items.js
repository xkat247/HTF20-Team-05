const express = require('express');
const router = express.Router()
const Item = require('../models/items')

// get a list of items from database
router.get('/', function (req, res, next) {
    Item.find({}).sort({ name: 1 }).then(function (items) {
        res.send(items);
    })
});

// add a new items to the database
router.post('/', function (req, res, next) {
    Item.create(req.body).then(function (item) {
        res.send(item);
    }).catch(next);
});

// update a items in the database
router.put('/:id', function (req, res, next) {
    Item.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Item.findOne({ _id: req.params.id }).then(function (item) {
            res.send(item);
        });
    });
});

// delete a items from the database
router.delete('/:id', function (req, res, next) {
    Item.findByIdAndRemove({ _id: req.params.id }).then(function (item) {
        res.send(item);
    });
});

module.exports = router