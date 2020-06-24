const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const actividadSchema=Schema({
Codigo:String, 
Titulo:String,
Descripcion:String,
Inicio:String,
Fin:String,
Tipo:String,
Iglesias:[String],
CI_encargados:[String],
Presupuesto:Number
});

const presupuestoSchema=Schema({
Año:String, 
Cantidad:Number,
});

const departamentoSchema=Schema({
Nombre:String, 
Contacto:String,
Presupuestos:[presupuestoSchema],
Actividades:[actividadSchema]
});

const areaSchema=Schema({
Nombre:String, 
Color:String,
Contacto:String,
Departamentos:[departamentoSchema]
});

module.exports=mongoose.model('area',areaSchema);

