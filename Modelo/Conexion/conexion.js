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

//MySQL details From devpress.csdn.net
/*
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "studentmanagement",
    multipleStatements: true,                       QUE ES ESTO!!!!!!!!
  });
  
  mysqlConnection.connect((err) => {
    if (!err) console.log("Connection Established Successfully");
    else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));     PARA QUE ES EL OBJETO JSON??????!!!!!
  });
*/