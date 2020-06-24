module.exports = new crud();
function crud()
{
  this.conexion;
  this.conectar = (conexion)=>
  {
    this.conexion = conexion;
  }
  var tabla = "membresia";
 
  
  /*this.eliminar = (id, callback)=>
  {
    this.conexion.query("SELECT DELETE("+id+");", (err, respuesta, fields)=>
    {
      if(!err)
      {
        //console.log(respuesta);
        callback(respuesta);
        return respuesta;
      }
      else {
        console.log("Error al borrar datos de la tabla "+tabla+":", err);
      }
    });
  }*/

  
 
  this.leerCI = (id_ci,callback)=>//muestra un cliente en especifico por su ID
  {
    this.conexion.query("SELECT * FROM membresia WHERE id_ci= "+id_ci+";", (err, respuesta, fields)=>
    {
      if(!err)
      {
        //console.log("respuesta leer id personal",respuesta);
        callback(respuesta);

        return respuesta;
      }
      else {
        console.log("Error al leer datos de la tabla "+tabla+":", err);
      }
    });
  }

  this.buscar = (filtro,callback)=>//muestra un cliente en especifico por su ID
  {
    this.conexion.query("SELECT * FROM membresia ;", (err, respuesta, fields)=>
    {
      if(!err)
      {
        //console.log("respuesta leer id personal",respuesta);
        const buscador= require("./filtro.js");
        respuesta = buscador(respuesta, filtro);
        callback(respuesta);

        return respuesta;
      }
      else {
        console.log("Error al leer datos de la tabla "+tabla+":", err);
      }
    });
  }
  this.buscar_SC = (filtro,callback)=>//muestra un cliente en especifico por su ID
  {
    this.conexion.query("SELECT * FROM santa_cena ;", (err, respuesta, fields)=>
    {
      if(!err)
      {
        //console.log("respuesta leer id personal",respuesta);
        const buscador= require("./filtro.js");
        respuesta = respuesta.filter(cena=>new Date(cena.fecha).getMonth()==filtro.fecha.valor && new Date(cena.fecha).getYear()==new Date().getYear() );
        callback(respuesta);

        return respuesta;
      }
      else {
        console.log("Error al leer datos de la tabla "+tabla+":", err);
      }
    });
  }
  this.buscar_PN = (filtro,callback)=>//muestra un cliente en especifico por su ID
  {
    this.conexion.query("SELECT * FROM presentacion_ninos ;", (err, respuesta, fields)=>
    {
      if(!err)
      {
        //console.log("respuesta leer id personal",respuesta);
        const buscador= require("./filtro.js");
        respuesta = buscador(respuesta, filtro);
        callback(respuesta);

        return respuesta;
      }
      else {
        console.log("Error al leer datos de la tabla "+tabla+":", err);
      }
    });
  }
  this.buscar_Matrimonio = (filtro,callback)=>//muestra un cliente en especifico por su ID
  {
    this.conexion.query("SELECT * FROM matrimonio ;", (err, respuesta, fields)=>
    {
      if(!err)
      {
        //console.log("respuesta leer id personal",respuesta);
        const buscador= require("./filtro.js");
        respuesta = buscador(respuesta, filtro);
        callback(respuesta);

        return respuesta;
      }
      else {
        console.log("Error al leer datos de la tabla "+tabla+":", err);
      }
    });
  }
  this.buscar_Usuario = (filtro,callback)=>//muestra un cliente en especifico por su ID
  {
    this.conexion.query("SELECT * FROM usuario ;", (err, respuesta, fields)=>
    {
      if(!err)
      {
        //console.log("respuesta leer id personal",respuesta);
        const buscador= require("./filtro.js");
        respuesta = buscador(respuesta, filtro);
        callback(respuesta);

        return respuesta;
      }
      else {
        console.log("Error al leer datos de la tabla "+tabla+":", err);
      }
    });
  }
  
}
