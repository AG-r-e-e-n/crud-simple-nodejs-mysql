const express = require('express')
const rutas = express.Router();
const {getProducts} = require('../Controlador/products') 

// Todo el CRUD va aquí dentro 

rutas.get("/products", getProducts);


module.exports = rutas