const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fotosSchema = Schema({
    Foto:String
});

const asistenciaActividadSchema = Schema({
    Id_miembro:String,
    Estado: String
});

const fotosUsuarioSchema = Schema({
    Miembro: String,
    Fecha: String,
    Fotos: String

});

const actividadSchema = Schema({
    Codigo: String,
    FotoActividad:String,
    Titulo: String,
    Descripcion: String,
    Inicio: String,
    HoraInicio: String,
    Fin: String,
    HoraFin: String,
    Departamento: String,
    Area:String,
    Presupuesto: Number,
    Asistencia: Number,
    Resultado: String,

    FotosUsuario:[fotosUsuarioSchema],
    AsistenciaActividad: [asistenciaActividadSchema]
});

const iglesiaSchema = Schema({
    Nombre: String,
    Direccion: String,
    Logo: String,
    
    Fotos: [String],
    FotosSlider: [String],
    Denominacion: String,
    Titulo_Descripcion: String,
    Descripcion: String,

    Mision: String,
    Vision: String,
    NumeroCelular: String,
    Correo: String,
    Facebook: String,
    ResSocial: String,
    Pastores: String,
    Horario: String,
    Horario_Lunes: String,
    Horario_Martes: String,
    Horario_Miercoles: String,
    Horario_Jueves: String,
    Horario_Viernes: String,
    Horario_Sabado: String,

    Cargos: [String],

    Actividades: [actividadSchema]
});
module.exports = mongoose.model('iglesia', iglesiaSchema);
