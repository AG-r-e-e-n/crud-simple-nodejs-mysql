const express = require('express')
const rutas = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../Controlador/products') 

// Manejo de rutas con el metodo rutas

rutas.get("/", getProducts);
rutas.get("/:id", getProduct);
rutas.post("/", createProduct);
rutas.put("/:id", updateProduct);
rutas.delete("/:id", deleteProduct);


module.exports = rutas