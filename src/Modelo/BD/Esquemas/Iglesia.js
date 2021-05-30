const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const actividadSchema = Schema({
    Codigo: String,
    FotoActividad:String,
    Titulo: String,
    Descripcion: String,
    Inicio: String,
    Fin: String,
    Departamento: String,
    Area:String,
    Presupuesto: Number
});

const iglesiaSchema = Schema({
    Nombre: String,
    Direccion: String,
    Logo: String,
    
    Fotos: [String],
    FotosSlider: [String],
    Descripcion: String,
    Mision: String,
    Vision: String,
    NumeroCelular: String,
    Correo: String,
    Facebook: String,
    ResSocial: String,
    Pastores: String,
    Horario: String,

    Cargos: [String],

    Actividades: [actividadSchema]
});
module.exports = mongoose.model('iglesia', iglesiaSchema);
