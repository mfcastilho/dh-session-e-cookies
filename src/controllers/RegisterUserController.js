const RegisterUserModel = require("../models/RegisterUserModel");
// const {v4:makeId} = require("uuid");
const { validationResult } = require("express-validator");

const RegisterUserController = {
  showRegisterUserPage:(req, res)=>{

    //Se o cookie estiver armazenando a cor
    if(req.cookies.color){

      //Se a session estiver aarmazenando o nome do usuário
      if(req.session.name){
        let userRegistered = req.session;
        let userRegisteredColor = req.cookies.color;
        return res.render("registerUser.ejs", {userRegisteredColor,userRegistered});
      }
      let userRegisteredColor = req.cookies.color;
      return res.render("registerUser.ejs", {userRegisteredColor});
    }
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

    //GUardando a informção em um cookie
    if(req.body.remember_color){
      res.cookie("color", req.body.color, {maxAge: (60 * 1000) * 30});
    }


    return res.redirect("/register");
  },
  showColorFormPage:(req, res)=>{
    if(req.session.name){
      let userRegistered = req.session;

      return res.render("colorForm.ejs", {userRegistered});
    }

    res.render("colorForm.ejs");
  },
  delete:(req, res)=>{
    req.session.name= null;
    req.session.color= null;
    req.session.email= null;
    req.session.age= null;

    res.cookie("color", null, {maxAge:-1});
    res.send("A cor foi apagada coom sucesso!");
  }
}


module.exports = RegisterUserController;