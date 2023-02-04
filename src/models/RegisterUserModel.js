const database = require("../database/database.json");
const path = require("path");
const fs = require("fs");

const databasePath = path.resolve("src", "database", "database.json"); 

const RegisterUserModel = {
  findAll:()=>{

    return database.users;
  },
  create:(newUser)=>{

    

    database.users.push(newUser);

    const dbJSON = JSON.stringify(database);
    fs.writeFileSync(databasePath, dbJSON);
  
    return true;
  }
}

module.exports = RegisterUserModel;