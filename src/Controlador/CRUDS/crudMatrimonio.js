module.exports = new crud();
function crud() {
  this.conexion;
  this.conectar = (conexion) => {
    this.conexion = conexion;
  }
  var tabla = "matrimonio";
  this.ingresar = (datos, callback) => {
    var consulta = "INSERT INTO `matrimonio` (`nombre_pastor`, `id_ci_esposo`, `nombre_esposo`, `id_ci_esposa`, `nombre_esposa`, `fecha_matrimonio`) VALUES (";
    const coma = ",";
    var strings = [1, 0, 1,
      0, 1,1];
    for (var i = 0; i < datos.length - 1; i++) {
      if ((datos[i] == undefined || datos[i] == null || datos[i] == "") && strings[i] == 0) {
        datos[i] = 0;
      }
      if (strings[i] == 0) {
        consulta += datos[i] + coma;
      }
      else {
        consulta += "'" + datos[i] + "'" + coma;
      }
    }
    if (strings[i] == 0) {
      consulta += datos[datos.length - 1];
    }
    else {
      consulta += "'" + datos[datos.length - 1] + "'";
    }

    consulta += "); ";
    //consulta+=;


    this.conexion.query(consulta, (err, respuesta, fields) => {
      if (!err) {
        
        console.log(tabla + " Ingresado Correctamente");
        callback(respuesta);
      }
      else {
        console.log("Error al ingresar datos de la tabla " + tabla + ":", err);
      }
    });
  }
  this.leerCI = (id_ci,callback)=>//muestra un cliente en especifico por su ID
  {
    this.conexion.query("SELECT * FROM matrimonio WHERE id_ci_esposo= "+id_ci+";", (err, respuesta, fields)=>
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

  this.actualizar = (datos, callback) => {
    console.log(datos);
    var consulta = "INSERT INTO membresia( nombre, ap_paterno, ap_materno, genero, telefono, celular, fecha_nac, lugar, fecha_conversion, fecha_bautizo, profesion, ocupacion, direccion, estado_civil, imagen, email,foto, estado, miembro_por) VALUES (";
    const coma = ",";
    var strings = [1, 1, 1,
      1, 0, 0,
      1, 1, 1,
      1, 1, 1,
      1, 1, 1,
      1, 1, 1,
      1];
    for (var i = 0; i < datos.length - 1; i++) {
      if (strings[i] == 0) {
        consulta += datos[i] + coma;
      }
      else {
        consulta += "'" + datos[i] + "'" + coma;
      }
    }
    if (strings[i] == 0) {
      consulta += datos[datos.length - 1];
    }
    else {
      consulta += "'" + datos[datos.length - 1] + "'";
    }

    consulta += ");";

    this.conexion.query(consulta, (err, respuesta, fields) => {
      if (!err) {
        console.log(tabla + " Ingresado Correctamente");
        callback(respuesta);
      }
      else {
        console.log("Error al ingresar datos de la tabla " + tabla + ":", err);
      }
    });
  }


}
