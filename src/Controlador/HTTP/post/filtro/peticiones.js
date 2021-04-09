module.exports = new peticion();
function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }
 
    this.funciones = (bd, ver) => {

        this.rutas.post("/Filtro/Membresia", ver.verificar, (req, res) => {

            var campo = req.body.membresia;
            var valor = req.body.buscar;

            var filtro = {}
            filtro[campo] = { valor, tipo: 'contieneString' }
            //console.log(bd.cruds);
            
            bd.cruds.crudMembresias.buscar(filtro, (respuesta) => {
        /*
                bd.cruds.crudUsuario.leer((car) => {
                    //console.log(""==respuesta);
                    cargos = car;
                    const excel = require('./../../reporte.js');
                    (excel(respuesta, 'membresia', ['id_membresia']));

                    res.render("Paginas/index", {
                        pagina: 'filtro',
                        datos: { titulo: 'Resultados De la Busqueda Membresia', cargos, filtro: respuesta, reporte: 'membresia' }
                    });
                });
        */
                console.log("--------------------***************************",respuesta)
                res.render("Paginas/index", {
                    pagina: 'filtro',
                    datos: { titulo: 'Resultados De la Busqueda Membresia', respuesta, filtro: respuesta, reporte: 'membresia' }
                });
            });
// git add . || git commit -am "filtros" || git push

        });
        this.rutas.post("/Filtro/SC", ver.verificarAdmin, (req, res) => {

            var valor = req.body.santa_cena;
            var filtro = {};
            filtro['fecha'] = { valor, tipo: 'igual' }
            console.log(filtro);
            bd.cruds.crudMembresia.buscar_SC(filtro, (respuesta) => {
                bd.cruds.crudUsuario.leer((car) => {
                    cargos = car;

                    const excel = require('./../../reporte.js');
                    (excel(respuesta, 'Santa_Cena', ['id_santacena']));

                    res.render("Paginas/index", {
                        pagina: 'filtro',
                        datos: { titulo: 'Resultados De la Busqueda Santa Cena', cargos, filtro: respuesta, reporte:'SC' }
                    });
                });

            });


        });
        this.rutas.post("/Filtro/PN", ver.verificarAdmin, (req, res) => {

            var campo = req.body.pre_niños;
            var valor = req.body.buscar;

            var filtro = {}
            filtro[campo] = { valor, tipo: 'contieneString' }
            console.log(filtro);
            bd.cruds.crudMembresia.buscar_PN(filtro, (respuesta) => {
                bd.cruds.crudUsuario.leer((car) => {
                    cargos = car;

                    const excel = require('./../../reporte.js');
                    (excel(respuesta, 'Registro_de_Presentaciones', ['id_presentacion']));

                    res.render("Paginas/index", {
                        pagina: 'filtro',
                        datos: { titulo: 'Resultados De la Busqueda Presentacion de Niños', cargos, filtro: respuesta,reporte:'PN' }
                    });
                });

            });


        });
        this.rutas.post("/Filtro/Matrimonio", ver.verificarAdmin, (req, res) => {

            var campo = req.body.matrimonio;
            var valor = req.body.buscar;

            var filtro = {}
            filtro[campo] = { valor, tipo: 'contieneString' }
            console.log(filtro);
            bd.cruds.crudMembresia.buscar_Matrimonio(filtro, (respuesta) => {
                bd.cruds.crudUsuario.leer((car) => {
                    cargos = car;

                    const excel = require('./../../reporte.js');
                    (excel(respuesta, 'Registro_de_Matrimonio', ['id_matrimonio']));

                    res.render("Paginas/index", {
                        pagina: 'filtro',
                        datos: { titulo: 'Resultados De la Busqueda Matrimonio', cargos, filtro: respuesta ,reporte:'Matrimonio'}
                    });
                });

            });


        });
        this.rutas.post("/Filtro/Usuario", ver.verificarAdmin, (req, res) => {

            var campo = req.body.usuario;
            var valor = req.body.buscar;

            var filtro = {}
            filtro[campo] = { valor, tipo: 'contieneString' }
            console.log(filtro);
            bd.cruds.crudMembresia.buscar_Usuario(filtro, (respuesta) => {

                bd.cruds.crudUsuario.leer((car) => {
                    cargos = car;

                    const excel = require('./../../reporte.js');
                    (excel(respuesta, 'Registro_de_Usuario', ['id_usuario']));

                    res.render("Paginas/index", {
                        pagina: 'filtro',
                        datos: { titulo: 'Resultados De la Busqueda Usuario', cargos, filtro: respuesta, reporte:'Usuario' }
                    });
                });

            });


        });
    }
}
