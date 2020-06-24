module.exports = new peticion();

function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        this.rutas.post("/Registro/Usuario", ver.verificar, (req, res) => {

            bd.cruds.crudMembresias.buscar({Ci:{valor: req.body.Ci, tipo:"igual"}}, (reg) => {
                if (reg.length > 0) {
                    reg =reg[0];
                    console.log("----------------------Info---------------------");
                    console.log("Ci: ", req.body.Ci);
                    console.log("Ci: ", reg._id);
                    console.log("Cargo: ", req.body.Cargo)
                    bd.cruds.crudMembresias.modificar(reg._id, {Cargo: req.body.Cargo}, () => {
                        req.flash('confirm', 'Usuario registrado correctamente');
                        res.redirect('back');
                    });
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
