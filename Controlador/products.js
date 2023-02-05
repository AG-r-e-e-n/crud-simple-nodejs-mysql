const sqlConnection = require('../Modelo/Conexion/conexion');


const getProducts = (req, res) => {
    sqlConnection.query("SELECT * FROM product", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
    })};

module.exports = {getProducts};