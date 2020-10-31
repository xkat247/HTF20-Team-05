const express = require('express');
const router = express.Router()
const {ensureAuth,ensureGuest} = require('../middleware/auth')
const Event = require('../models/events')
const items = require('../models/items')

router.get('/',ensureGuest,(req,res) => {
  res.render('login')
})

router.get('/dashboard', async (req, res) => {
  res.render('dashboard')
})

module.exports = router