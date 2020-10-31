const express = require('express');
const router = express.Router()
const {ensureAuth,ensureGuest} = require('../middleware/auth')
const Event = require('../models/events')
const items = require('../models/items')

router.get('/',ensureGuest,(req,res) => {
  res.render('login')
})

router.get('/dashboard', async (req, res) => {
  var user = req.user.name
  res.render('dashboard',{user})
})

module.exports = router