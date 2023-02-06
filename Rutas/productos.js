const express = require('express')
const rutas = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../Controlador/products') 

// Manejo de rutas con el metodo rutas

rutas.get("/products", getProducts);
rutas.get("/product/:id", getProduct);
rutas.post("/product", createProduct);
rutas.put("/product/:id", updateProduct);
rutas.delete("/product/:id", deleteProduct);


module.exports = rutas