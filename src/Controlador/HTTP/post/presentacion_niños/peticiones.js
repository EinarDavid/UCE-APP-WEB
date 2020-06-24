module.exports = new peticion();
function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        this.rutas.post("/Registro/Presentacion", ver.verificarAdmin, (req, res) => {

            var ci = req.body.ci;
            var nombre = req.body.nombre;
            var apellido_paterno = req.body.apellido_paterno;
            var apellido_materno = req.body.apellido_materno;
            var nombre_padre = req.body.nombre_padre;
            var nombre_madre = req.body.nombre_madre;
            var fecha_nac = req.body.fecha_nac;
            var fecha_presentacion = req.body.fecha_presentacion;
            var numero_reg_civil = req.body.numero_reg_civil;
            var fecha_partida = req.body.fecha_partida;
            var nombre_pastor = req.body.nombre_pastor;

            //console.log("---------"+ ci);
            bd.cruds.crudPresentacion.leerCI(ci, (registro) => {
                //console.log(cliente);
                if (registro.length > 0) {
                    req.flash('error', 'El/La niño/a ya fue registrado/a');
                    res.redirect('back');
                }
                else {
                    var datos = [
                        ci,
                        nombre,
                        apellido_paterno,
                        apellido_materno,
                        nombre_padre,
                        nombre_madre,
                        fecha_nac,
                        fecha_presentacion,
                        numero_reg_civil,
                        fecha_partida,
                        nombre_pastor
                    ];
                    bd.cruds.crudPresentacion.ingresar(datos, () => {
                        req.flash('confirm', 'Presentacion de: ' + nombre + ' ' + apellido_paterno + ' ingresada correctamente');
                        res.redirect('/registro/bautizo');
                    });
                }
            });
        });
        this.rutas.post("/Presentacion/Modificar/:id", ver.verificarAdmin, (req, res) => {

            var id = req.params.id;

            var ci = req.body.ci;
            var nombre = req.body.nombre;
            var apellido_paterno = req.body.apellido_paterno;
            var apellido_materno = req.body.apellido_materno;
            var nombre_padre = req.body.nombre_padre;
            var nombre_madre = req.body.nombre_madre;
            var fecha_nac = req.body.fecha_nac;
            var fecha_presentacion = req.body.fecha_presentacion;
            var numero_reg_civil = req.body.numero_reg_civil;
            var fecha_partida = req.body.fecha_partida;
            var nombre_pastor = req.body.nombre_pastor;

            var datos = [
                ci,
                nombre,
                apellido_paterno,
                apellido_materno,
                nombre_padre,
                nombre_madre,
                fecha_nac,
                fecha_presentacion,
                numero_reg_civil,
                fecha_partida,
                nombre_pastor

            ];
            bd.cruds.crudPresentacion.actualizar(datos, id, () => {
                req.flash('confirm', 'Presentacion modificada correctamente');
                res.redirect('/registro/bautizo/' + id);
            });


        });
    }
}
