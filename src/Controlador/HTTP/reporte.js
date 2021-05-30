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
    //console.log(datos[0])
    var atributos = [];
    Object.getOwnPropertyNames(datos[0]).map(atributo => {
      atributos.push(atributo);
      console.log("----------------------a---------", atributo, dato[0])
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