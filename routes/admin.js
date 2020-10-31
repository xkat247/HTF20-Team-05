const express = require('express');
const router = express.Router()
const Admin = require('../models/admin')

// get a admin from database
router.get('/:email', function (req, res, next) {
    Admin.findOne({ email: req.params.email }).then(function (admin) {
        res.send(admin);
    })
});

// add a new admin to the database
router.post('/', function (req, res, next) {
    Admin.create(req.body).then(function (admin) {
        res.send(admin);
    }).catch(next);
});

// update a admin in the database
router.put('/:id', function (req, res, next) {
    Admin.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Admin.findOne({ _id: req.params.id }).then(function (admin) {
            res.send(admin);
        });
    });
});

// delete a admin from the database
router.delete('/:id', function (req, res, next) {
    Admin.findByIdAndRemove({ _id: req.params.id }).then(function (admin) {
        res.send(admin);
    });
});

module.exports = router