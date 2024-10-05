
//importo la libreria a una variable
const express = require("express");
const mysql = require("mysql2");
//guardo todos las propiedaddes del express en una variable
const app = express();

const connection = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está en otro lugar
    user: 'root', // Tu usuario de la base de datos
    password: '', // Tu contraseña de la base de datos
    database: 'elciervo' // Nombre de tu base de datos
  });

app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.get("/", function(req,res){
    res.render("Registro");
})
//traduce el html de codigo a objeto para poder manipularlo abajo

//aca
app.post("/validar", function(req,res){
    const datos = req.body;
    const nombre = datos.com;
    const temperatura = datos.temp;
    const ubicacion = datos.ubi;

    const Agregar = "INSERT INTO comidas (id, nombre, temperatura, ubicacion) VALUES (NULL,'"+nombre+"','"+temperatura+"','"+ubicacion+"')";
connection.query(Agregar,function(err,rows){
  if(err){
    throw err;
  }else{
    console.log("datos ingreados ");
  }
})
});

//si pone cualquier cosa
//app.get("/",function(req,res){res.send("No se conoce direccion http");})
//hosteo local
app.listen(3000, function(){
console.log("server en http://localhost:3000")
});