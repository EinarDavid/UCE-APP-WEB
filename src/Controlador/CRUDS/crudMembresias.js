module.exports =new crud();

function crud()
{
  const Membresias= require('./../../Modelo/BD/Esquemas/Membresias.js');
  var tabla= "Membresias";

  //Funciones
  this.ingresar =(datos,callback)=>
  {
    var docente=new Membresias(datos);
    docente.save((error,res)=>
    {
      if(!error)
      {
        callback(res);
      }
      else
      {
        console.log("Error ingresando en la tabla: "+ tabla +" - ",error);
      }
    });
  }

  this.modificar =(cod_docente,datosnuevos,callback)=>
  {
    Membresias.update({"_id":cod_docente},datosnuevos,(error,res)=>
    {
      if(!error)
      {
        callback(res);
      }
      else
      {
        console.log("Error modificando en la tabla: "+tabla+"-",error);
      }
    });
  }

  this.eliminar =(cod_docente,callback)=>
  {
    Membresias.deleteone({"_id":cod_docente},(error,res)=>
    {
      if(!error)
      {
        callback(res);
      }
      else
      {
        console.log("Error eliminando en la tabla: "+tabla+"-",error);
      }
    }); 
  }

  this.buscar1 = (cod_docente,callback)=>
  {
    Membresias.findOne({"_id":cod_docente},(error,res)=>
    {
      if(!error)
      {
        callback(res);
      }
      else
      {
        console.log("error buscando a uno en la tabla: "+tabla+"-",error);
      }
    });
  }

  this.buscar =(filtro,callback)=>
  {
    Membresias.find((error,res)=>
    {
      if(!error)
      {
        console.log(res)
        const buscar=require("./buscar.js");
        res=buscar(res,filtro);
        callback(res);
      }
      else
      {
        console.log("error buscando a uno en la tabla: "+tabla+"-",error);
      }
    });
  }
  

  //cierra Funciones
}//cierra crud