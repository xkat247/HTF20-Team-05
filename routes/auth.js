const express = require('express');
const passport = require('passport');
const {ensureAuth,ensureGuest} = require('../middleware/auth')
const router = express.Router()

//@desc Google auth
//@route GET /auth/google
router.get('/google',ensureGuest,passport.authenticate('google',{ scope : ['profile', 'email'] }))

//@desc google auth callback
//@route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/error' }),
  (req, res) => {
    // Successful authentication, redirect home.
    //have to add
    res.status(200).send({msg:"success"});
  });

//@desc logging out user
//@route /auth/logout
router.get('/logout',(req, res) => {
      req.logout()
      //what to do now
      res.status(200).send({msg:"success"})
    });

module.exports = router
