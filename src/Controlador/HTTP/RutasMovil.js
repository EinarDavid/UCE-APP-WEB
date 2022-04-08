
module.exports = new peticion();

function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }
    const fs = require("fs")
    this.funciones = (bd, ver) => {
        this.rutas.get("/Prueba", (req, res) => {
            res.json({ pru: "eba", num: 9 })
        });

        this.rutas.post("/PruebaPost", (req, res) => {
            console.log(req.body)
            res.json(req.body)
        });

        var bcrypt = require('bcryptjs');
        this.rutas.post("/LoginMovil", (req, res) => {
            bd.cruds.crudMembresias.buscar({
                Ci:
                {
                    valor: req.body.ci,
                    tipo: 'contieneString'
                }
            }, (usuario) => {
                console.log(usuario);
                usuario = usuario[0];
                if (!(usuario != undefined)) {
                    var mensage = 'CI no registrado';
                    res.json({ jala: "no", mensage })
                }
                else {

                    bcrypt.compare(req.body.contra, usuario.Contraseña, function (err, resp) {
                        if (err) console.log(err);
                        if (resp == true) {
                            var mensage = "Bienvenido de nuevo " + usuario.Nombre;
                            res.json({ usuario, mensage });
                        }
                        else {
                            var mensage = 'Contraseña incorrecta';
                            res.json({ jala: "no", mensage })
                        }
                    });
                }
            });
        });
        this.rutas.get("/FotoPerfil/:foto", (req, res) => {
            var nombre = req.params.foto;
            var path = require("path");
            console.log("ññññññññññññññññññññ", nombre);
            console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", path.resolve(__dirname, '/public/fotos/Membresias/', nombre), __dirname, '/public/fotos/Membresias/', nombre)
            res.sendFile(path.resolve('./public/fotos/Membresias/', nombre))
        })
        this.rutas.post("/VerDatosIglesia", (req, res) => {
            bd.cruds.crudIglesia.buscar1(req.body.idIglesia, (igle) => {
                console.log("Datos Iglesia: ", igle);
                res.json(igle);
            })
        });
        this.rutas.post("/Movile/ModMembresia/:id", (req, res) => {

            const id = req.params.id;
            //delete req.body.id;
            console.log("body:", req.body, id);
            bd.cruds.crudMembresias.modificar(id, req.body, () => {
                var mensage = 'Guardado Correctamente';
                bd.cruds.crudMembresias.buscar1(id, (usuario) => {
                    res.json({ jala: "si", mensage, usuario });
                })

            })
        });
        this.rutas.post("/ModificarEstado/", (req, res) => {
            var id_Iglesia = req.body.id_iglesia;
            var id_Actividad = req.body.id_actividad;
            var id_Miembro = req.body.id_miembro;

            bd.cruds.crudIglesia.buscar1(id_Iglesia, (igle) =>{
                igle.Actividades.forEach(actividad => {
                    if(actividad._id == id_Actividad){
                        if(actividad.AsistenciaActividad.length == 0){
                            igle.actividad
                        }
                        else{
                            actividad.AsistenciaActividad.forEach(miembro => {
                                if(miembro.id_miembro == id_Miembro){
                                    console.log('Aqui')
                                }
                            });
                        }
                    }
                });
            })

        })

        this.rutas.post("/ActividadAsistencia/", (req, res) =>{
            var id_Iglesia = req.body.id_iglesia;
            var id_Actividad = req.body.id_actividad;
            var id_Miembro = req.body.id_miembro;

            var datos = {
                Id_miembro: req.body.id_miembro,
                Estado: req.body.estado
            }

            bd.cruds.crudIglesia.modificarAsistenciaMiembro(id_Iglesia, id_Actividad, id_Miembro, datos, ()=>{
                var mensage = 'Guardado Correctamente';
                console.log("Entro", res);
                res.json({ jala: "si", mensage });
            })
        })

    }
}
