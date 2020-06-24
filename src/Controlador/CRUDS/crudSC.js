module.exports = new crud();
function crud() {
    this.conexion;
    this.conectar = (conexion) => {
        this.conexion = conexion;
    }
    var tabla = "santa_cena";
    this.ingresar = (datos, callback) => {
        var consulta = "INSERT INTO `santa_Cena` (`id_ci`, `nombre`, `fecha`) VALUES (";
        const coma = ",";
        var strings = [0, 1, 1,
           ];
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
            //console.log("---"+datos[i]);
        }
        else {
            consulta += "'" + datos[datos.length - 1] + "'";
            //console.log("estas aqui---- "+datos[datos.length-2]);
            //console.log("aquiiii--- " + datos[i]);
        }

        consulta += "); ";
        //consulta+=;
        //console.log("antes --------" + consulta);

        this.conexion.query(consulta, (err, respuesta, fields) => {
            if (!err) {
                //this.conexion.query("INSERT INTO `miembro_solicitud` (`id_ci`, formulario) VALUES (" + datos[0] + ", '" + datos[20] + "');");//20
                //console.log(consulta);
                console.log(tabla + " Ingresado Correctamente");
                callback(respuesta);
            }
            else {
                console.log("Error al ingresar datos de la tabla " + tabla + ":", err);
            }
        });
    }

   
    


}
