const express = require('express');
const router = express.Router();

const {Category} = require("../Controller/categoryController");

router.route(":categoryname/products").get(Category);