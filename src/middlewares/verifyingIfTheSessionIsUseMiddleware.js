

const verifyingIfTheSessionIsUseMiddleware = (req, res, next)=>{
  if(!req.session.name){
    res.redirect("/register");
  }

  next();
}

module.exports = verifyingIfTheSessionIsUseMiddleware;