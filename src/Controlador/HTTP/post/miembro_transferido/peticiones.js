module.exports = new peticion();
function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        this.rutas.post("/Registro/Transfererido", ver.verificarAdmin, (req, res) => {

            var id_ci = req.body.id_ci;
           
            var fecha_transferencia = req.body.fecha_transferencia;

            bd.cruds.crudMembresia.leerCI(id_ci, (registro) => {
                //console.log(("Aquiiiiiiiiiiii")+registro);
                if (registro.length > 0) {
                    var datos = [
                        id_ci,
                        registro[0].nombre + registro[0].ap_paterno + registro[0].ap_materno,
                        fecha_transferencia,
                        registro[0].miembro_por
                    ];
                    bd.cruds.crudTransferencia.ingresar(datos, () => {
                        req.flash('confirm', 'Miembro transferido correctamente');
                        res.redirect('/registro/bautizo');
                    });

                } else {
                    req.flash('error', 'Miembro no esta registrado ');
                    res.redirect('back');

                }
            });
        });
    }
}
