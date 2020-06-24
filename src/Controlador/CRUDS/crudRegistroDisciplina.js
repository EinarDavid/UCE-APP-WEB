module.exports = new crud();
function crud() {
    this.conexion;
    this.conectar = (conexion) => {
        this.conexion = conexion;
    }
    var tabla = "miembro_disciplina";
    this.ingresar = (datos, callback) => {

        var consulta = "INSERT INTO `miembro_disciplina` (`id_ci`, `nombre`, `nombre_responsable`, fecha_disciplina) VALUES (";
        const coma = ",";
        var strings = [0, 1, 1,1];

        for (var i = 0; i < datos.length - 2; i++) {
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
            consulta += datos[datos.length - 2];
        }
        else {
            consulta += "'" + datos[datos.length - 2] + "'";
        }

        consulta += "); ";
        //consulta+=;


        this.conexion.query(consulta, (err, respuesta, fields) => {
            if (!err) {
                //console.log("aquii--------- " + datos);
                this.conexion.query("UPDATE membresia SET estado =  '" + datos[4] + "' WHERE id_ci= "+datos[0]+";");

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

    this.restaurado = (datos, callback) => {
        console.log(datos);
        var consulta = "UPDATE miembro_disciplina SET fecha_restauracion = '"+ datos[0]+"' WHERE id_ci = "+datos[2]+" ;";
        

        this.conexion.query(consulta, (err, respuesta, fields) => {
            if (!err) {
                this.conexion.query("UPDATE membresia SET estado =  '" + datos[1] + "' WHERE id_ci= "+datos[2]+";");

                console.log(tabla + " Ingresado Correctamente");
                callback(respuesta);
            }
            else {
                console.log("Error al ingresar datos de la tabla " + tabla + ":", err);
            }
        });
    }


}
