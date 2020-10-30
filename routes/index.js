const express = require('express');
const router = express.Router()


router.get('/dashboard', async (req, res) => {
  console.log('/dashboard route')
})

module.exports = router