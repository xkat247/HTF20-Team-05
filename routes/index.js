const express = require('express');
const router = express.Router()

// requiring models
const Event = require('../models/events')


router.get('/dashboard', async (req, res) => {
  console.log('/dashboard route')
})

module.exports = router