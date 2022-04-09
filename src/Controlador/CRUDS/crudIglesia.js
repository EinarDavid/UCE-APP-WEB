module.exports = new crud();

function crud() {
  const Iglesia = require('./../../Modelo/BD/Esquemas/Iglesia.js');
  var tabla = "iglesias";
  var ObjectID = require('mongodb').ObjectID;

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

    var idIglesia2 = ObjectID( _idIglesia);
    var idActividad2 = ObjectID(_idActividad);
    var idMiembro2 = ObjectID(_idMiembro);

    Iglesia.updateOne({
      "_id": ObjectID(_idIglesia),
      "Actividades._id": ObjectID(_idActividad),
      "Actividades.AsistenciaActividad.Id_miembro": {
        "$ne": _idMiembro
      }
    },
      {
        "$push": {
          "Actividades.$.AsistenciaActividad": {
            Id_miembro: _idMiembro,
            Estado: datosnuevos.Estado
          }
        }
      }, (error, res) => {
        if (!error) {
          callback(res);
          if (res.modifiedCount == 0) {
            Iglesia.updateOne({
              "_id": ObjectID(_idIglesia),
            },
              {
                "$set": {
                  "Actividades.$[act].AsistenciaActividad.$[miem].Estado": datosnuevos.Estado
                }
              },
              {
                arrayFilters: [
                  {
                    "act._id": ObjectID(_idActividad)
                  },
                  {
                    "miem.Id_miembro": {_idMiembro}
                  }
                ]
              }, (error, res) => {
                if (!error) {
                  console.log("Entro a Modificar Estado");
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