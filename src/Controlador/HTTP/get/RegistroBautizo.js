var personal = (rutas,bd,ver)=>
{
  rutas.get("/Usuarios/Registrar",ver.verificarAdmin,(req,res)=>
  {
    var callback = (car)=> {
      var cargos = car[0];
      var keys = Object.keys(cargos);
      console.log(cargos);
      res.render("Paginas/Personal/Registrar",
      {
        cargos,
        keys
      });
    }
    bd.cruds.crudCargo.leer(callback);

  });
  rutas.get("/Usuarios/IniciarSesion",(req,res)=>
  {
    if(req.isAuthenticated())
    {
      res.render("Paginas/Personal/Cuenta");
    }
    else
    {
      res.render("Paginas/Personal/iniciarSesion");
    }
  });
  rutas.get("/Usuarios/Cuenta",ver.verificar,(req,res)=>
  {
    res.render("Paginas/Personal/Cuenta");
  });
  rutas.get("/Usuarios/CerrarSesion",ver.verificar,(req,res)=>
  {
    req.logout();
    req.session.destroy();
    res.redirect("/");
  });
  rutas.get("/Usuarios/Ver", (req,res)=>
  {
    var callback = (per)=> {
      var personal = per[0];
      var keys = Object.keys(personal);
      //res.send(personal)
      res.render("Paginas/Personal/Ver",
      {
        personal,
        keys,
        todo:"todo"
      });
    }
    var personal = bd.cruds.crudPersonal.leer(callback);
  });
  rutas.get("/Usuarios/Detalle/:id",(req,res)=>
  {
    bd.cruds.crudCargo.leer((cargos)=>
    {
      var car = cargos[0];
        var id = req.params.id;
        var numero = 0;
        var callback = (per)=>
        {
          var personal = per[0][0];
          res.render("Paginas/Personal/Detalle",
          {
            personal,
            numero,
            cargos: car
          });
        }
        bd.cruds.crudPersonal.leerID(id,callback);
    })
  });
  rutas.get("/Usuarios/Modificar/:id",(req,res)=>
  {
    bd.cruds.crudCargo.leer((cargos)=>
    {
      var car = cargos[0];
        var id = req.params.id;
        var numero = 1;
        var callback = (per)=>
        {
          var personal = per[0][0];
          res.render("Paginas/Personal/Detalle",
          {
            personal,
            numero,
            cargos: car
          });
        }
        bd.cruds.crudPersonal.leerID(id,callback);
    })
  });
  rutas.get("/Usuarios/Eliminar/:id", ver.verificarAdmin, (req,res)=>
  {
    var id = req.params.id;
    var callback = (respuesta)=>
    {
      console.log(respuesta);
    }
    bd.cruds.crudPersonal.eliminar(id,callback);
    req.flash("confirm",["El personal",id,"fue eliminado correctamente"].join(" "))
    res.redirect("/Usuarios/Ver/");
  });
}

module.exports = personal;
