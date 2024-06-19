const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());



app.get("/", function(req, res){
    //server is on
    res.send("Services is up and running")
})


module.exports = app;