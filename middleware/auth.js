module.exports = {
    ensureAuth : function (req,res,next){
      if (req.isAuthenticated()){
        return next()
      }else{
        res.render('error/404')
      }
    },
    ensureGuest: function (req,res,next){
      if(req.isAuthenticated()){
        res.redirect('/dashboard')
      }else{
        return next()
      }
    },
    ensureAdmin: function(req,res,next){
      if(req.user.role==="normie"){
        res.status(403).json({msg:"not authorized"})
      }else{
        next()
      }
    }
  }
  