const mysql = require('mysql');

const conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'crud-simple-nodejs',
    password : ''
});

conexion.connect(function(error){
    if (error){
        console.log("Fail conexion to the DataBase", error);
    }
    else{
        console.log('Conexion exitosa');
    }
});

module.exports = conexion;