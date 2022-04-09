module.exports = new crud();

function crud() {
  const Iglesia = require('./../../Modelo/BD/Esquemas/Iglesia.js');
  var tabla = "iglesias";

  //Funciones
  this.ingresar = (datos, callback) => {
    var docente = new Iglesia(datos);
    docente.save((error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error ingresando en la tabla: " + tabla + " - ", error);
      }
    });
  }

  this.modificar = (cod_docente, datosnuevos, callback) => {
    Iglesia.update({ "_id": cod_docente }, datosnuevos, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error modificando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.modificarAsistenciaMiembro = (_idIglesia, _idActividad, _idMiembro, datosnuevos, callback) => {
    console.log('Datos nuevos', datosnuevos)

    // var idIglesia2 = ObjectId(_idIglesia);
    // var idActividad2 = ObjectId(_idActividad);
    // var idMiembro2 = ObjectId(_idMiembro);

    var idIglesia2 = {"$oid": _idIglesia};
    var idActividad2 = {"$oid":_idActividad};
    var idMiembro2 = {"$oid":_idMiembro};

    Iglesia.updateOne({
      "_id": idIglesia2,
      "Actividades._id": idActividad2,
      "Actividades.AsistenciaActividad.Id_miembro": {
        "$ne": idMiembro2
      }
    },
      {
        "$push": {
          "Actividades.$.AsistenciaActividad": {
            Id_miembro: idMiembro2,
            Estado: datosnuevos.Estado
          }
        }
      }, (error, res) => {
        if (!error) {
          callback(res);
          if (res.modifiedCount == 0) {
            Iglesia.updateOne({
              "_id": idIglesia2,
            },
              {
                "$set": {
                  "Actividades.$[act].AsistenciaActividad.$[miem].Estado": datosnuevos.Estado
                }
              },
              {
                arrayFilters: [
                  {
                    "act._id": idActividad2
                  },
                  {
                    "miem.Id_miembro": idMiembro2
                  }
                ]
              }, (error, res) => {
                if (!error) {

                  callback(res);
                }
                else {
                  console.log("Error modificando en la tabla: " + tabla + "-", error);
                }
              })
          }
          // console.log("", res)
        }
        else {
          console.log("Error modificando en la tabla: " + tabla + "-", error);
        }
      })
  }

  this.eliminar = (cod_docente, callback) => {
    Iglesia.deleteone({ "_id": cod_docente }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error eliminando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar1 = (cod_docente, callback) => {
    Iglesia.findOne({ "_id": cod_docente }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar = (filtro, callback) => {
    Iglesia.find((error, res) => {
      if (!error) {
        const buscar = require("./buscar.js");
        res = buscar(res, filtro);
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    });
  }


  //cierra Funciones
}//cierra crud