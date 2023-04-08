const express = require('express');
const fs = require('fs');
const rutas = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if (!skip) {
        rutas.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)) //TODO: localhost/products
    }
})

module.exports = rutas