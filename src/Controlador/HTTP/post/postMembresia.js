module.exports = new peticion();

function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) =>{
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
        var upload = multer({ storage: storage }).fields([
            {
                name: 'FotoPerfil', maxCount: 1
            }
        ]);
        this.rutas.post("/Modificar/Membresia", ver.verificar, (req, res) => {
            upload(req,res, function (err){
                if (err) {
                    console.log(err, 'Im in post , inside upload' + ruta);
                    return res.end('Error subiendo archivo' + err);
                }
                else
                {
                    if(req.files.FotoPerfil != undefined && req.body.MantenerFotoPerfil != 'on')
                        req.body.FotoPerfil = req.files.FotoPerfil[0].filename;

                    //console.log("----------------------------------Imagenes:------------------------------------")
                    //console.log("body:", req.body);
                    //console.log("files:", req.files);
                    bd.cruds.crudMembresias.modificar(req.user._id, req.body, () => {
                        res.redirect("back");
                    })
                }
            })
        })
        this.rutas.post("/Modificar/Membresia/user/:ci", ver.verificar, (req, res) => {
            upload(req,res, function (err){
                if (err) {
                    console.log(err, 'Im in post , inside upload' + ruta);
                    return res.end('Error subiendo archivo' + err);
                }
                else
                {
                    if(req.files.FotoPerfil != undefined && req.body.MantenerFotoPerfil != 'on')
                        req.body.FotoPerfil = req.files.FotoPerfil[0].filename;

                   // console.log("----------------------------------Imagenes:------------------------------------")
                    //console.log("body:", req.body);
                    //console.log("files:", req.files);
                    var filtro  = { 'Ci':{ valor: req.params.ci, tipo: 'igual' }}
                    console.log("eeeeeeeeeeeeeeeeee",req.params.ci)
                    bd.cruds.crudMembresias.buscar(filtro, (resu)=>
                    {
                        
                        var nuevo = {...resu, ...req.body}
                        console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",resu, req.body, nuevo)
                        bd.cruds.crudMembresias.modificar(resu._id, nuevo, () => {
                            res.redirect("back");
                        })
                    })

                }
            })
        })

    } 
}