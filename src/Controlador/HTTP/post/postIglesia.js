
module.exports = new peticion();

function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }
    const fs = require("fs")
    this.funciones = (bd, ver) => {
        const multer = require('multer');
        var ruta = "./public/fotos/Iglesias/";
        var ruta2 = "./public/fotos/Iglesias/Actividad";
        var storage = multer.diskStorage({
            destination: ruta,
            filename: function (req, file, callback) {
                var re = /(?:\.([^.]+))?$/;
                var extension = re.exec(file.originalname)[1];
                //console.log(extension);
                callback(null, req.user.Iglesia + " - " + Date.now() + "." + extension);
            }
        });
        var storage2 = multer.diskStorage({
            destination: ruta2,
            filename: function (req, file, callback) {
                var re = /(?:\.([^.]+))?$/;
                var extension = re.exec(file.originalname)[1];
                //console.log(extension);
                callback(null, req.user.Iglesia + " - " + Date.now() + "." + extension);
            }
        });
        var upload = multer({ storage: storage }).fields([
            {
                name: 'Logo', maxCount: 1
            },
            {
                name: 'Fotos'
            },
            {
                name: 'FotosSlider'
            }
        ]);
        var upload2 = multer({ storage: storage2 }).fields([
            {
                name: 'FotoActividad', maxCount: 1
            }
        ]);

        this.rutas.post("/Registro/Iglesia", ver.verificar, (req, res) => {
            bd.cruds.crudIglesia.ingresar(req.body, () => {
                res.redirect("/admiCental");
            });
        });
        this.rutas.post("/Editar/Iglesia", ver.verificar, (req, res) => {
            upload(req, res, function (err) {
                if (err) {
                    //console.log(err, 'Im in post , inside upload' + ruta);
                    return res.end('Error subiendo archivo' + err);
                }
                else {
                    if (req.files.Logo != undefined && req.body.MantenerLogo != 'on')
                        req.body.Logo = req.files.Logo[0].filename;
                    if (req.files.Fotos != undefined && req.body.MantenerFotos != 'on')
                        req.body.Fotos = req.files.Fotos.map((a) => { return a.filename });
                    if (req.files.FotosSlider != undefined && req.body.MantenerFotosSlider != 'on')
                        req.body.FotosSlider = req.files.FotosSlider.map((a) => { return a.filename });
                    //console.log("----------------------------------Imagenes:------------------------------------")
                    //console.log("body:", req.body);
                    //console.log("files:", req.files);
                    bd.cruds.crudIglesia.modificar(req.user.Iglesia, req.body, () => {
                        res.redirect("back");
                    });
                }
            });

        });

        this.rutas.post("/Registro/Encargado", ver.verificar, (req, res) => {
            bd.cruds.crudMembresias.buscar({ Ci: { valor: req.body.Ci, tipo: "igual" } }, (membresia) => {
                if (membresia.length > 0) {
                    req.flash('error', 'La membresia ya fue registrada');
                    res.redirect("/admiCental");
                }
                else {
                    var bcrypt = require('bcryptjs');
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(req.body.Contraseña, salt, function (err, contraEncriptado) {
                            req.body.Contraseña = contraEncriptado;
                            req.body.Cargo = "Administrador"
                            bd.cruds.crudMembresias.ingresar(req.body, () => {
                                req.flash('confirm', 'Membresia ingresada correctamente');
                                res.redirect("/admiCental");
                            });
                        })
                    });
                }
            })

        });

        this.rutas.post("/Registrar/Actividad/Todo", ver.verificarAdmin, (req, res) => {
            upload2(req, res, function (err) {
                if (err) {
                    return res.end('Error subiendo archivo' + err);
                }
                else {

                    bd.cruds.crudIglesia.buscar({}, (iglesias) => {
                        const crypto = require('crypto');
                        var hash = crypto.randomBytes(3).toString('hex');
                        iglesias.forEach(igle => {
                            if (igle.actividades == undefined) {
                                igle.actividades = []
                            }
                            igle.Actividades.push(
                                {
                                    Codigo: hash,
                                    FotoActividad: req.files.FotoActividad[0].filename,
                                    Titulo: req.body.Titulo,
                                    Descripcion: req.body.Descripcion,
                                    Inicio: req.body.Inicio,
                                    Fin: req.body.Fin,
                                    Departamento: req.body.Departamento,
                                    Area: req.body.Area,
                                    Presupuesto: req.body.Presupuesto,
                                }
                            )
                            bd.cruds.crudIglesia.modificar(igle._id, igle, () => {
                                //console.log(iglesia.Actividades)

                                res.redirect("back")
                            })
                        });
                    });
                }
            })
        })

        this.rutas.post("/Registrar/Actividad", ver.verificarAdmin, (req, res) => {

            upload2(req, res, function (err) {
                if (err) {
                    //console.log(err, 'Im in post , inside upload' + ruta);
                    return res.end('Error subiendo archivo' + err);
                }
                else {
                    //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o@@@@@@@@",req.body, req.user)
                    bd.cruds.crudIglesia.buscar1(req.user.Iglesia, (iglesia) => {
                        if (iglesia.actividades == undefined) {
                            iglesia.actividades = []
                        }
                        const crypto = require('crypto');
                        var hash = crypto.randomBytes(3).toString('hex');
                        //console.log(hash);
                        //console.log("----------------------------------Imagenes:------------------------------------")
                        //console.log("body:", req.body);
                        //console.log("files:", req.files);
                        iglesia.Actividades.push(
                            {
                                Codigo: hash,
                                FotoActividad: req.files.FotoActividad[0].filename,
                                Titulo: req.body.Titulo,
                                Descripcion: req.body.Descripcion,
                                Inicio: req.body.Inicio,
                                Fin: req.body.Fin,
                                Departamento: req.body.Departamento,
                                Area: req.body.Area,
                                Presupuesto: req.body.Presupuesto,
                            }
                        )
                        bd.cruds.crudIglesia.modificar(req.user.Iglesia, iglesia, () => {
                            //console.log(iglesia.Actividades)

                            res.redirect("back")
                        })
                    })


                }
            });

        });
    }
}
