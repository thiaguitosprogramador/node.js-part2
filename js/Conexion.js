

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.log("error we");
  }else{
 console.log('Conectado como id ' + connection.threadId);
  }
 
});
//Guardo en una constante el comando selecionar todos los datos de comidas




const modificaar = "UPDATE comidas SET nombre = 'pizza' WHERE id = 1";
connection.query(modificaar,function(err,lista){
if(err){
  throw err;
}else{
  console.log("dato corregido");
}
})

const borrar = "DELETE FROM comidas WHERE id = 1";
connection.query(borrar,function(err,lista){
  if(err){
    throw err;
  }else{
    console.log("dato borrado");
  }
  })
const Tabla = "SELECT * FROM comidas";
//Hago una peticion con el comando y que se va a hacer(tabla, funcion a hacer)
connection.query(Tabla,function(err,lista){
if(err){
  throw err;
}else{
  console.log(lista);
}
})
connection.end();