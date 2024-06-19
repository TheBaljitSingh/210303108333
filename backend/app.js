const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const categories = require("./Routes/categoryRoute.js");

app.use("/categories/", )



app.get("/", function(req, res){
    //server is on
    res.send("Services is up and running")
});


module.exports = app;