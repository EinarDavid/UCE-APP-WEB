const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const actividadSchema = Schema({
    Codigo: String,
    FotoActividad:String,
    Titulo: String,
    Descripcion: String,
    Inicio: String,
    Fin: String,
    Tipo: String,
    Iglesias: String,
    CI_encargados: [String],
    Presupuesto: Number
});

const presupuestoSchema = Schema({
    Año: String,
    Cantidad: Number,
});

const departamentoSchema = Schema({
    Nombre: String,
    Contacto: String,
    Presupuestos: [presupuestoSchema],
    Actividades: [actividadSchema]
});

const areaSchema = Schema({
    Nombre: String,
    Color: String,
    Contacto: String,
    Departamentos: [departamentoSchema]
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
    Areas: [areaSchema]
});
module.exports = mongoose.model('iglesia', iglesiaSchema);
