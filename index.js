const express = require('express');
const cors = require("cors");
const app = express();
//const clasedesoftwareseguro = require("./desarrolloseguro.js");

app.use(express.json());
app.use(cors());
app.get ("/", (req,res) => {
    res.send ("Subio el servidor y vamos bien");
})

//app.use ("/desarrolloseguro",clasedesoftwareseguro);

app.listen (6500,() =>{
    console.log("servidor activo.......");
});
