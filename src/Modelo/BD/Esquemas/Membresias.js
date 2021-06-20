const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const miembrosolicitudSchema=Schema({
Formulario:String
});

const matrimonioSchema=Schema({
Fecha:String,
CI_Pareja:String,
CI_Pastor: String
});

const miembrobautizoSchema=Schema({
Fecha_Bautizo:String,
Lugar_Bautizo:String
});

const miembrotransferenciaSchema=Schema({
Carta_Transferencia:String,
Iglesia_Salida: String,
Iglesia_Destino:String,
Fecha_Transferencia: String
});

const disciplinaSchema=Schema({
CI_Responsable:String,
Fecha_Inicio:String,
Fecha_Fin:String
});


const hijoSchema=Schema({
CI_Hijo:String,
Fecha_Presentacion: String,
Pastro_Presentacion: String,
Fecha_Partida: String
});


const membresiaSchema=Schema({
Ci:String,  //si
Nombre:String,	 //si
Apellido_Paterno:String, //si
Apellido_Materno:String, //si
Genero:String, //si
Contacto: String, //si
Email: String, //si
Fecha_Nacimiento: String, //si
Lugar_Nacimiento: String, //si
Numero_Registro_Civil: String, //si
Profesion: String, //si
Direccion: String, //si
Estado_Civil: String,
Imagen_Membresia: String, //no
FotoPerfil: String,
Iglesia: String, //combobox
Contraseña: String, //si
Cargo: String, //combobox
Cargo_Ministerial: String,
MiembroSolicitud:miembrosolicitudSchema,
Matrimonio: matrimonioSchema,
MiembroBautizo: miembrobautizoSchema,
MiembroTransferencia: [miembrotransferenciaSchema],
Disciplina: [disciplinaSchema],
Hijos: [hijoSchema]

});
module.exports=mongoose.model('membresias',membresiaSchema);

