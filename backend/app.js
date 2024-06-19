const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const products = [
    {id: 1, name:"redmi note 10s", category: "mobile"},
    {id: 2, name:"redmi 9i", category: "mobile"},
]

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

function getProductById(category, id) {
    return products.find(product => product.category === category && product.id === id);
}

app.get('/categories/:categoryname/products', (req, res) => {
    const { categoryname } = req.params;
    let { n, page } = req.query;

    if (!categoryname) {
        return res.status(400).send("Please provide a category name");
    }

    // Default value for 'n' if not specified
    n = parseInt(n) || 10;
    page = parseInt(page) || 1;

    const categoryProducts = getProductsByCategory(categoryname);
    const startIndex = (page - 1) * n;
    const endIndex = page * n;

    const paginatedProducts = categoryProducts.slice(startIndex, endIndex);

    res.json({
        page,
        n,
        totalProducts: categoryProducts.length,
        products: paginatedProducts
    });
});

app.get("/categories/:categoryname/products/:productid", (req, res) => {
    //this is my exposing api
    const { categoryname, productid } = req.params;

    if (!categoryname || !productid) {
        return res.status(400).send("Please provide all details");
    }

    const product = getProductById(categoryname, parseInt(productid));

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.json(product);
});




app.get("/", function(req, res){
    //server is on
    res.send("Services is up and running")
});


module.exports = app;