
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
        var storage = multer.diskStorage({
            destination: ruta,
            filename: function (req, file, callback) {
                var re = /(?:\.([^.]+))?$/;
                var extension = re.exec(file.originalname)[1];
                console.log(extension);
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
                name:'FotosSlider'
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
                    console.log(err, 'Im in post , inside upload' + ruta);
                    return res.end('Error subiendo archivo' + err);
                }
                else {
                    if(req.files.Logo != undefined && req.body.MantenerLogo != 'on')
                        req.body.Logo = req.files.Logo[0].filename;
                    if(req.files.Fotos != undefined && req.body.MantenerFotos != 'on' )
                        req.body.Fotos = req.files.Fotos.map((a)=>{return a.filename});
                    if(req.files.FotosSlider != undefined && req.body.MantenerFotosSlider != 'on')
                        req.body.FotosSlider = req.files.FotosSlider.map((a)=>{return a.filename});
                    console.log("----------------------------------Imagenes:------------------------------------")
                    console.log("body:", req.body);
                    console.log("files:", req.files);
                    bd.cruds.crudIglesia.modificar(req.user.Iglesia, req.body, () => {
                        res.redirect("back");
                    });
                }
            });

        });
        this.rutas.post("/Registro/Encargado", ver.verificar, (req, res) => {
            var bcrypt = require('bcryptjs');
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(req.body.Contraseña, salt, function (err, contraEncriptado) {
                    req.body.Contraseña = contraEncriptado;
                    req.body.Cargo = "Administrador"
                    bd.cruds.crudMembresias.ingresar(req.body, () => {
                        res.redirect("/admiCental");
                    });
                })
            });
        });
    }
}
