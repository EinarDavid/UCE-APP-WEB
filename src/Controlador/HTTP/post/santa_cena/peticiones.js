module.exports = new peticion();
function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        this.rutas.post("/Registro/SantaCena", ver.verificarAdmin, (req, res) => {

            
            var id_ci = req.body.id_ci;

            //var nombre = req.body.nombre;//averiguar como obtener el nombre

            
            
            var fecha = new Date();

            bd.cruds.crudMembresia.leerCI(id_ci, (registro) => {
                if (registro.length > 0) {
                    var datos = [
                        id_ci,
                        registro[0].nombre + registro[0].ap_paterno + registro[0].ap_materno,
                        fecha

                    ];
                    bd.cruds.crudSantaCena.ingresar(datos, () => {
                        req.flash('confirm', 'Registro de Santa Cena ingresado correctamente');
                        res.redirect('/registro/bautizo');
                    });
                }
                else{
                    req.flash('error', 'Membresia no esta registrada');
                    res.redirect('back');

                }
            });

        });
    }
}
var MostrarFecha = (fecha) => {
    //console.log(fecha);
    var nombres_dias = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    var nombres_meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var fecha_actual = fecha;

    dia_mes = fecha_actual.getDate() //dia del mes
    dia_semana = fecha_actual.getDay() //dia de la semana
    mes = fecha_actual.getMonth() + 1
    anio = fecha_actual.getFullYear()


    var fechaHora = fecha_actual;
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    var sufijo = 'AM';

    if (horas > 12) {
        horas = horas - 12;
        sufijo = "PM";
    }

    if (horas < 10) { horas = "0" + horas; }
    if (minutos < 10) { minutos = "0" + minutos; }
    if (segundos < 10) { segundos = "0" + segundos; }

    //escribe en pagina
    var ret = (nombres_dias[dia_semana] + ", " + dia_mes + " de " + nombres_meses[mes - 1] + " de " + anio + ", " + horas + ":" + minutos + ":" + segundos + " " + sufijo);

    return ret;
}
