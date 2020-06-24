module.exports = new peticion();
function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        const multer = require('multer');
        var ruta = "./public/fotos/Membresias";
        var storage = multer.diskStorage({
            destination: ruta,
            filename: function (req, file, callback) {
                callback(null, file.fieldname + '-' + Date.now() + ".png");
            }
        });
        var upload = multer({ storage: storage }).fields(
            [
                {
                    name: 'Imagen_Membresia', maxCount: 1
                },
                {
                    name: 'FotoPerfil', maxCount: 1
                }
            ]
        );

        this.rutas.post("/Registro/Bautizo", ver.verificarAdmin, (req, res) => {
            //ingresar los datos
            upload(req, res, function (err) {

                if (err) {
                    console.log(err, 'Im in post , inside upload' + ruta);
                    return res.end('Error subiendo archivo' + err);
                }
                else {
                    req.body.MiembroBautizo = {};
                    req.body.MiembroBautizo.Fecha_Bautizo = req.body.Fecha_Bautizo;
                    req.body.MiembroBautizo.Lugar_Bautizo = req.body.Lugar_Bautizo;
                    console.log("--------------------Files-------------------",req.files)
                    if (req.files.Imagen_Membresia != undefined) {
                        var Imagen_Membresia = req.files.Imagen_Membresia[0].filename;
                    }
                    else {
                        var Imagen_Membresia = undefined;
                    } 

                    if (req.files.FotoPerfil != undefined) {
                        var FotoPerfil = req.files.FotoPerfil[0].filename;
                    }
                    else {
                        var FotoPerfil = undefined;
                    }
                    req.body.FotoPerfil= FotoPerfil;
                    req.body.Imagen_Membresia = Imagen_Membresia;
                    req.body.Iglesia = req.user.Iglesia;

                    bd.cruds.crudMembresias.buscar({ Ci: { valor: req.body.Ci, tipo: "igual" } }, (membresia) => {
                        console.log("Membresia nueva ---------------------------------------------", membresia);
                        if (membresia.length > 0) {
                            req.flash('error', 'La membresia ya fue registrada');
                            res.redirect('back');
                        }
                        else {
                            var bcrypt = require('bcryptjs');
                            bcrypt.genSalt(10, function (err, salt) {
                                bcrypt.hash(req.body.Contraseña, salt, function (err, contraEncriptado) {
                                    req.body.Contraseña = contraEncriptado;
                                    var datos = req.body;
                                    console.log("-------------------------", datos);
                                    bd.cruds.crudMembresias.ingresar(datos, () => {
                                        req.flash('confirm', 'Membresia de: ' + datos.Nombre + ' ' + datos.Apellido_Paterno + ' ' + datos.Apellido_Materno + 'ingresada correctamente');
                                        res.redirect('back');
                                    });
                                })
                            });

                        }
                    });
                }
            });
        });
        this.rutas.post("/Membresia/Modificar/Bautizo/:id", ver.verificarAdmin, (req, res) => {
            upload(req, res, function (err) {

                if (err) {
                    console.log(err, 'Im in post , inside upload' + ruta);
                    return res.end('Error uploading file.' + err);
                }
                else {
                    var id = req.params.id;

                    var nombre = req.body.nombre;
                    var ap_paterno = req.body.ap_paterno;
                    var ap_materno = req.body.ap_materno;
                    var genero = req.body.genero;
                    var telefono = req.body.telefono;
                    var celular = req.body.celular;
                    var fecha_nac = req.body.fecha_nac;
                    var lugar = req.body.lugar;
                    var fecha_conversion = req.body.fecha_conversion;
                    var fecha_bautizo = req.body.fecha_bautizo;
                    var profesion = req.body.profesion;
                    var ocupacion = req.body.ocupacion;
                    var direccion = req.body.direccion;
                    var estado_civil = req.body.estado_civil;
                    var imagen_membresia;
                    var email = req.body.email;
                    var foto;

                    if (imagen_membresia == "" || req.files.imagen_membresia == undefined) {
                        imagen_membresia = req.body.rutaoriginal;
                    }
                    else {
                        var imagen_membresia = req.files.imagen_membresia.filename;
                    }

                    if (foto == "" || req.files.foto == undefined) {
                        foto = req.body.rutaoriginal;
                    }
                    else {
                        var foto = req.files.foto.filename;
                    }
                    var datos = [
                        nombre,
                        ap_paterno,
                        ap_materno,
                        genero,
                        telefono,
                        celular,
                        fecha_nac,
                        lugar,
                        fecha_conversion,
                        fecha_bautizo,
                        profesion,
                        ocupacion,
                        direccion,
                        estado_civil,
                        imagen_membresia,
                        email,
                        foto

                    ];
                    bd.cruds.crudMembresiaBautizo.actualizar(datos, id, () => {
                        req.flash('confirm', 'Membresia modificada correctamente');
                        res.redirect('/administracion/' + id);
                    });
                }
            });


        });
    }
}
