module.exports = new peticion();

function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        this.rutas.post("/Registro/Usuario", ver.verificar, (req, res) => {

            bd.cruds.crudMembresias.buscar(req.body.Ci, (reg) => {
                if (reg.length > 0) {
                    console.log("----------------------Info---------------------");
                    console.log("Ci: ", req.body.Ci);
                    console.log("Ci: ", reg);
                    console.log("Cargo: ", req.body.Cargo)
                    bd.cruds.crudMembresias.modificar(req.body._id, req.body.Cargo, () => {
                        req.flash('confirm', 'Usuario registrado correctamente');
                        res.redirect('back');
                    });
                    console.log("---------------------Registrado-----------------------");
                    console.log(req.body)
                    console.log("--------------------------------------------");
                } else {
                    req.flash('error', 'Membresia no existe');
                    res.redirect('back');
                }
            });

        });

        this.rutas.post("/Usuario/Modificar/:id", ver.verificarAdmin, (req, res) => {

            var id = req.params.id;

            var id_ci = req.body.id_ci;
            var password = req.body.password;
            var id_cargo = req.body.id_cargo;

            var datos = {
                id_ci,
                password,
                id_cargo

            };
            bd.cruds.crudUsuario.actualizar(datos, id, () => {
                req.flash('confirm', 'Usuario modificado correctamente');
                res.redirect('/Usuario/Ver/' + id);
            });


        });
    }
}
