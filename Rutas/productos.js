const { Router } = require('express');
const express = require('express')
const rutas = express.Router();

// Todo el CRUD va aquí dentro 

rutas.get("/productos", (req, res) => {
    res.send("Hola mundo")
})


module.exports = rutas