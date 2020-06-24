var mysql = require('mysql');
var database = "igle";
var datosConexion =
{
  host: "localhost",
  database: database,
  user: "root",
  password: "root"
};
var conexion = mysql.createConnection(datosConexion);
conexion.connect((err)=>
{
  if(err)
  {
    console.log("Error conectando a la base de datos:",err);
    return;
  }
  else {
    console.log("conexion exitosa a la base de datos",database,"con el id:",conexion.threadId);
  }
});
module.exports = conexion;