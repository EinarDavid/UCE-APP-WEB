module.exports = new crud();
function crud()
{
  this.conexion;
  this.conectar = (conexion)=>
  {
    this.conexion = conexion;
  }
  var tabla = "usuario";
 
  this.leerID = (ci,callback)=>//muestra un cliente en especifico por su ID
  {
    
    this.conexion.query("Select * from usuario where  id_ci = "+ci+" ;", (err, respuesta, fields)=>
    {
      console.log('---------------------ingresando '+JSON.stringify(respuesta) +'----------------------------')
      if(!err)
      {
        //console.log("respuesta leer id personal",respuesta);
        callback(respuesta[0]);

        return respuesta;
      }
      else {
        console.log("Error al leer datos de la tabla "+tabla+":", err);
      }
    });
  
  }
}
