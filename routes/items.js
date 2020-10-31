const express = require('express');
const router = express.Router()
const {ensureAuth,ensureAdmin} = require('../middleware/auth')

const Item = require('../models/items')

// get a list of items from database
router.get('/',ensureAuth,async (req, res) => {
    
    try {
        var items = await Item.find({}).sort({ name: 1 });
        res.render('items',{items});
    } catch (err) {
         console.log(err)
    }
});
router.get('/add',ensureAuth,async (req, res) => {
    
    try {
        res.render('items_add');
    } catch (err) {
         console.log(err)
    }
});
  
  // add a new items to the database
  router.post('/add',ensureAuth,ensureAdmin, function (req, res) {
    Item.create(req.body).then(function (item) {
        res.redirect('/')
    }).catch(err=>{console.log(err)})
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