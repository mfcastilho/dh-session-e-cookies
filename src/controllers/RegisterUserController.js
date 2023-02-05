const RegisterUserModel = require("../models/RegisterUserModel");
const {v4:makeId} = require("uuid");
const { validationResult } = require("express-validator");

const RegisterUserController = {
  showRegisterUserPage:(req, res)=>{

    if(req.session.name){
      let userRegistered = req.session;
      return res.render("registerUser.ejs", {userRegistered});
    }
    
    return res.render("registerUser.ejs");
  },
  processingRegisterUser:(req, res)=>{
    const resultValidations = validationResult(req);

    //se NÃO estiver vazio é por que contém erros
    if(resultValidations.errors.length > 0){
      return res.render("registerUser.ejs", {errors: resultValidations.mapped(), old:req.body});
    }
    

    const { name, color, email, age } = req.body;

    req.session.name= name;
    req.session.color= color;
    req.session.email= email;
    req.session.age= age;


    return res.redirect("/admin/register");
  }
}


module.exports = RegisterUserController;