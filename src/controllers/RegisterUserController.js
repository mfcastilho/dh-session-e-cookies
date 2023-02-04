const RegisterUserModel = require("../models/RegisterUserModel");
const {v4:makeId} = require("uuid");

const RegisterUserController = {
  showRegisterUserPage:(req, res)=>{

    let userRegistered = req.session;
    return res.render("registerUser.ejs", {userRegistered});
  },
  processingRegisterUser:(req, res)=>{
    
    const { name, color, email, age } = req.body;

    

    req.session.name= name;
    req.session.color= color;
    req.session.email= email;
    req.session.age= age;

    
  
    return res.redirect("/admin/register")
  }
}


module.exports = RegisterUserController;