//Declaración de el objeto conección y la libreria express
require('dotenv').config();
const cors = require('cors')
const express = require('express');

const app = express();
//Configuring express server
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;

//listen(port: number, callback?: (() => void) | undefined): Server<typeof IncomingMessage, typeof ServerResponse>
app.listen(port, () => console.log(`Listening on port ${port}..`));
    
app.use("/api", require("./Rutas"))

//REMINDER: THIS MUST BE MADE IN ANOTHER FILE!!!!!!

//Creating GET Router to fetch all the student details from the MySQL Database
//app.get("/products", ESTA FUNCIÓN CALL VA DENTRO DE LOS CONTROLADORES     