//Declaración de el objeto conección y la libreria express
require('dotenv').config();
const express = require('express');
const sqlConnection = require('./Modelo/Conexion/conexion');


const app = express();
//Configuring express server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;

//listen(port: number, callback?: (() => void) | undefined): Server<typeof IncomingMessage, typeof ServerResponse>
app.listen(port, () => console.log(`Listening on port ${port}..`));
    
//app.use("/api", require("./rutas/productos"))


//REMINDER: THIS MUST BE MADE IN ANOTHER FILE!!!!!!

//Creating GET Router to fetch all the student details from the MySQL Database
app.get("/product", (req, res) => {
    sqlConnection.query("SELECT * FROM product", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
    });
});

//Router to GET specific student detail from the MySQL database
app.get("/product/:id", (req, res) => {
    sqlConnection.query(
        "SELECT * FROM product WHERE id = ?",
        [req.params.id],
        (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
        }
    );
});

//Router to INSERT/POST a student's detail
app.post("/product", (req, res) => {
    let product = req.body;
    if(product.id === undefined){
        product.id = 0;
    }
    var sql =
        'Insert into product values ('+ product.id +',"'+ product.nombre +'",'+ product.precio +')';
    sqlConnection.query(
        sql,
        (err, rows, fields) => {
        if (!err) res.send("Product Created Successfully");
        else console.log(err);
        }
    );
});

//Router to UPDATE a student's detail
app.put("/product/:id", (req, res) => {
    let product = req.body;
    var sql =
        'UPDATE product SET nombre = "'+product.nombre +'", precio = '+ product.precio+' WHERE id = ?'; 
        sqlConnection.query(
        sql,
        [req.params.id],
        (err, rows, fields) => {
        if (!err) res.send("Product Details Updated Successfully");
        else console.log(err);
        }
    );
});

//Router to DELETE a student's detail
app.delete("/product/:id", (req, res) => {
    sqlConnection.query(
        "DELETE FROM product WHERE id = ?",
        [req.params.id],
        (err, rows, fields) => {
        if (!err) res.send("Product Record deleted successfully.");
        else console.log(err);
        }
    );
});    