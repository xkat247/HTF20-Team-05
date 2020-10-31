module.exports = {
    ensureAuth : function (req,res,next){
      if (req.isAuthenticated()){
        return next()
      }else{
        res.status(401).send({error:"not authenticated"});
      }
    },
    ensureGuest: function (req,res,next){
      if(req.isAuthenticated()){
        res.status(200).send({msg:"Old user"})
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
  