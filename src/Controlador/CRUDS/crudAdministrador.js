module.exports =new crud();

function crud()
{
  const Administrador= require('./../../Modelo/BD/Esquemas/Administrador.js');
  var tabla= "administradores";

  //Funciones
  this.ingresar =(datos,callback)=>
  {
    var docente=new Administrador(datos);
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
    Administrador.update({"_id":cod_docente},datosnuevos,(error,res)=>
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
    Administrador.deleteone({"_id":cod_docente},(error,res)=>
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
    Administrador.findOne({"_id":cod_docente},(error,res)=>
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

  this.buscardocente =(filtro,callback)=>
  {
    Administrador.find((error,res)=>
    {
      if(!error)
      {
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