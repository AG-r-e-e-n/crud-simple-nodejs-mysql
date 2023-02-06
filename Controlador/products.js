const sqlConnection = require('../Modelo/Conexion/conexion');


const getProducts = (req, res) => {
    sqlConnection.query("SELECT * FROM product", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
    })};

const getProduct = (req, res) => {
    sqlConnection.query(
        "SELECT * FROM product WHERE id = ?",
        [req.params.id],
        (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
})};

const createProduct = (req, res) => {
    let product = req.body;
        if(product.id === undefined){
            product.id = 0;
        }
        var sql ='Insert into product values ('+ product.id +',"'+ product.nombre +'",'+ product.precio +')';
        sqlConnection.query(
            sql,
            (err, rows, fields) => {
            if (!err) res.send("Product Created Successfully");
            else console.log(err);
            }
        );
    }

const updateProduct = (req, res) => {
    let product = req.body;
    var sql = 'UPDATE product SET nombre = "'+product.nombre +'", precio = '+ product.precio+' WHERE id = ?'; 
        sqlConnection.query(
        sql,
        [req.params.id],
        (err, rows, fields) => {
        if (!err) res.send("Product Details Updated Successfully");
        else console.log(err);
        }
    );
};

const deleteProduct = (req, res) => {
    sqlConnection.query(
                "DELETE FROM product WHERE id = ?",
                [req.params.id],
                (err, rows, fields) => {
                if (!err) res.send("Product Record deleted successfully.");
                else console.log(err);
                }
            );
};

module.exports = {getProducts, getProduct, createProduct, updateProduct, deleteProduct};