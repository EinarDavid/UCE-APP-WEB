module.exports = new peticion();
function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        this.rutas.post("/Registro/Disciplina", ver.verificarAdmin, (req, res) => {

            var id_ci = req.body.id_ci;
            var nombre_responsable = req.body.nombre_responsable;
            var fecha_disciplina = req.body.fecha_disciplina;
            var estado = 'Disciplina';
            bd.cruds.crudMembresia.leerCI(id_ci, (registro) => {
                if (registro.length > 0) {
                    var datos = [
                        id_ci,
                        registro[0].nombre + registro[0].ap_paterno + registro[0].ap_materno,
                        nombre_responsable,
                        fecha_disciplina,
                        estado
                    ];
                    bd.cruds.crudDisciplina.ingresar(datos, () => {
                        req.flash('confirm', 'Disciplina ingresada correctamente');
                        res.redirect('/registro/bautizo');
                    });
                }
                else {
                    req.flash('error', 'Miembro no esta registrado ');
                    res.redirect('back');
                }
            });
            

        });
        this.rutas.post("/Registro/Restauracion", ver.verificarAdmin, (req, res) => {

            var id_ci = req.body.id_ci;

            var fecha_restauracion = req.body.fecha_restauracion;
            var estado = 'Restaurado';

            bd.cruds.crudMembresia.leerCI(id_ci, (registro) => {
                //console.log(cliente);
                if (registro.length > 0) {
                    if(registro[0].estado=='Disciplina'){
                        var datos = [
                            fecha_restauracion,
                            estado,
                            id_ci
                        ];
                        bd.cruds.crudDisciplina.restaurado(datos, () => {
                            req.flash('confirm', 'Restauracion exitosa');
                            res.redirect('/registro/bautizo');
                        });
                    }
                    else{
                        req.flash('error', 'Membresia no se encuentra en Disciplina');
                        res.redirect('back');
                    }      

                }
                else {
                    req.flash('error', 'Miembro no registrado');
                    res.redirect('back');

                }
            });

        });
    }
}
