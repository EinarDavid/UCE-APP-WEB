
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
        this.rutas.post("/VerDatosIglesia", (req, res) => {
            bd.cruds.crudIglesia.buscar1(req.body.idIglesia, (igle) => {
                console.log("Datos Iglesia: ", igle);
                res.json(igle);
            })
        });
        this.rutas.post("/Movile/ModMembresia", (req, res) => {
            console.log("body:", req.body);
            const id = req.body._id;
            delete req.body.id;
            bd.cruds.crudMembresias.modificar(id, req.body, () => {
                var mensage = 'Guardado Correctamente';
                res.json({jala:"si", mensage});
            })


        })
    }
}
