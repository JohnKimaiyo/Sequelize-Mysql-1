const express = require("express");

const app = express();

const mysql = require("mysql");

const  db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Esoteric90@!",

});

app.listen(5000,() =>{
    console.log("Server is runing")
})