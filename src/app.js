//=== IMPORTAÇÕES ===
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");


//=== VARIÁVEIS ===
const app = express();
const port = 9000;




app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));



//=== MIDDLEWARES ===
app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.static(path.resolve("src", "public")));
app.use(express.urlencoded({ extended: false}));




//=== ROTAS ===







//=== CONFIGURANDO O SERVIDOR ===
app.listen(port, ()=>{
  console.log(`O servidor está rodando na porta: ${port}`);
})