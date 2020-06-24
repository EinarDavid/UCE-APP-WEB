module.exports = new peticion();
function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        this.rutas.post("/Registro/Matrimonio", ver.verificarAdmin, (req, res) => {

            var nombre_pastor = req.body.nombre_pastor;
            var id_ci_esposo = req.body.id_ci_esposo;
            var nombre_esposo;
            var id_ci_esposa = req.body.id_ci_esposa;
            var nombre_esposa;
            var fecha_matrimonio = req.body.fecha_matrimonio;
            
            bd.cruds.crudMembresia.leerCI(id_ci_esposo, (nombre_es) => {
                if (nombre_es.length > 0) {
                    nombre_esposo = nombre_es[0].nombre + nombre_es[0].ap_paterno + nombre_es[0].ap_materno;
                    bd.cruds.crudMembresia.leerCI(id_ci_esposa, (nombre_espo) => {
                        if (nombre_espo.length > 0) {
                            nombre_esposa = nombre_espo[0].nombre + nombre_espo[0].ap_paterno + nombre_espo[0].ap_materno;
                            bd.cruds.crudMatrimonio.leerCI(id_ci_esposo, (registro) => {
                                //console.log(cliente);
                                if (registro.length > 0) {
                                    req.flash('error', 'Matrimonio ya fue registrado');
                                    res.redirect('/registro/bautizo');
                                }
                                else {
                
                                    var datos = [
                                        nombre_pastor,
                                        id_ci_esposo,
                                        nombre_esposo,
                                        id_ci_esposa,
                                        nombre_esposa,
                                        fecha_matrimonio
                                    ];
                                    bd.cruds.crudMatrimonio.ingresar(datos, () => {
                                        req.flash('confirm', 'Matrimonio de: ' + nombre_esposo + ' y ' + nombre_esposa + 'ingresada correctamente');
                                        res.redirect('/registro/bautizo');
                                    });
                                }
                
                
                            });
                        } else {
                            
                            req.flash('error', 'Membresia de la esposa no existe');
                            res.redirect('/registro/bautizo');
                        }
                    });
                }
                else {
                    req.flash('error', 'Membresia del esposo no existe');
                    res.redirect('/registro/bautizo');
                }
            });
            
            
        });
        this.rutas.post("/Matrimonio/Modificar/:id", ver.verificarAdmin, (req, res) => {

            var id = req.params.id;

            var nombre_pastor = req.body.nombre_pastor;
            var id_ci_esposo = req.body.id_ci_esposo;
            var nombre_esposo = req.body.nombre_esposo;
            var id_ci_esposa = req.body.id_ci_esposa;
            var nombre_esposa = req.body.nombre_esposa;
            var fecha_matrimonio = req.body.fecha_matrimonio;

            var datos = {
                nombre_pastor,
                id_ci_esposo,
                nombre_esposo,
                id_ci_esposa,
                nombre_esposa,
                fecha_matrimonio

            };
            bd.cruds.crudMatrimonio.actualizar(datos, id, () => {
                req.flash('confirm', 'Matrimonio modificado correctamente');
                res.redirect('/registro/bautizo/' + id);
            });


        });
    }
}
