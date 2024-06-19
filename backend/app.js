const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const products = [
    {id: 1, name:""}
]

app.get("/categories/:categories/products", (req, res)=>{
    const {categoryname} = req.params;

    res.json({

    })
})




app.get("/", function(req, res){
    //server is on
    res.send("Services is up and running")
});


module.exports = app;