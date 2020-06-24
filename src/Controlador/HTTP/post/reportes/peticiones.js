module.exports = new peticion();

function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        this.rutas.post("/Descargar/membresia", ver.verificarAdmin, (req, res) => {
            res.download('membresia.xlsx');
        });

        this.rutas.post("/Descargar/SC", ver.verificarAdmin, (req, res) => {
            res.download('Santa_Cena.xlsx');
        });
       
        this.rutas.post("/Descargar/PN", ver.verificarAdmin, (req, res) => {
            res.download('Registro_de_Presentaciones.xlsx');
        });

        this.rutas.post("/Descargar/Matronio", ver.verificarAdmin, (req, res) => {
            res.download('Registro_de_Matrimonio.xlsx');
        });

        this.rutas.post("/Descargar/Usuario", ver.verificarAdmin, (req, res) => {
            res.download('Registro_de_Usuario.xlsx');
        });
    }
}
