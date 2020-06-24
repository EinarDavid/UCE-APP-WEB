module.exports = new crud();
function crud() {
    this.conexion;
    this.conectar = (conexion) => {
        this.conexion = conexion;
    }
    var tabla = "miembro_transferencia";
    this.ingresar = (datos, callback) => {
        var consulta = "INSERT INTO `membresia` (`id_ci`, `nombre`, `ap_paterno`, `ap_materno`, `genero`, `telefono`, `celular`, `fecha_nac`, `lugar`, `fecha_conversion`, `fecha_bautizo`, `profesion`, `ocupacion`, `direccion`, `estado_civil`, `imagen`, `email`,`foto`,`estado`, `miembro_por`) VALUES (";
        const coma = ",";
        var strings = [0, 1, 1,
            1, 1, 0,
            0, 1, 1,
            1, 1, 1,
            1, 1, 1,
            1, 1, 1,
            1];
        for (var i = 0; i < datos.length - 3; i++) {
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
            consulta += datos[datos.length - 3];
            console.log("---"+datos[i]);
        }
        else {
            consulta += "'" + datos[datos.length - 3] + "'";
            //console.log("estas aqui---- "+datos[datos.length-2]);
            //console.log("aquiiii--- " + datos[i]);
        }

        consulta += "); ";
        //consulta+=;
        //console.log("antes --------" + consulta);

        this.conexion.query(consulta, (err, respuesta, fields) => {
            if (!err) {
                this.conexion.query("INSERT INTO `miembro_transferencia` (`id_ci`, iglesia, carta_transferencia) VALUES (" + datos[0] + ", '" + datos[20] + "','"+datos[21]+"');");//20
                //console.log(consulta);
                console.log(tabla + " Ingresado Correctamente");
                callback(respuesta);
            }
            else {
                console.log("Error al ingresar datos de la tabla " + tabla + ":", err);
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
        var strings = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
