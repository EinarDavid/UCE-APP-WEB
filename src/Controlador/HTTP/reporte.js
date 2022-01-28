const xlsx = require('xlsx');
module.exports = (datos, nombre, excepciones = [])=>
{
  //console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^_^^^^^^^^^^^^^^^^^^",datos, datos[0])
  var tabla = [];
  if(datos[0]!=undefined)
  {
    datos.map(dato=>
    {
      excepciones.map(exc =>
      {
        delete dato[exc];
      });
    });
    var getKeys = function(obj){
      var keys = [];
      for(var key in obj){
        if( typeof obj[key] !== '') {
          
          keys.push(key);
      }
      }
      return keys;
   }
    var llaves = Object.keys(Object.getPrototypeOf(datos[0]))
    //getKeys(datos[0])
    console.log("¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡", datos[0], Object.keys(datos[0]),"eeeeeeeeeeeeeeeeeeee",llaves,Object.getPrototypeOf(datos[0]), Object.keys(Object.getPrototypeOf(datos[0])))
    var atributos = [];
    Object.keys(datos[0]).map(atributo => {
      atributos.push(atributo);
      //console.log("----------------------a---------", atributo, datos[0])
    })
    tabla.push(atributos);
    datos.map(dato=>
    {
      var fila = [];
      atributos.map(atributo=>
      {
        fila.push(dato[atributo]);
      });
      tabla.push(fila);
    });
    var excel = xlsx.utils.aoa_to_sheet(tabla);
    var wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb,excel,nombre);
    xlsx.writeFile(wb, nombre+'.xlsx')
    return nombre+'.xlsx';
  }
  else
  {
    return 'No se pudo hacer nada'
  }
}