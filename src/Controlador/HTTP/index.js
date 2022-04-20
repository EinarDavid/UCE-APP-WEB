//module.exports = rutas;
//function rutas(bd)

var ret = (passport) => {

  var bd = require('./../../Modelo/BD/bd.js');
  bd.iniciar();

  const express = require('express');
  const rutas = express.Router();

  var cargos;
  var datos = { cargos };
  rutas.use((req, res, next) => {
    /*bd.cruds.crudUsuario.leer((car)=>{
      cargos=car;
      console.log(cargos)
      datos={cargos};
      next();
    });*/
    /*   bd.cruds.crudMembresias.ingresar({
         Ci: "123",
         Contraseña: "$2a$10$F3rvsIyFSxgFd6Q1ey5G6e23nZoXcCjTfXP3pT7jS6uP9mZwT/LrC"
       },()=>{})
       bd.cruds.crudMembresias.buscar({},(todos)=>
       {
         console.log("todos",todos)
       })*/
    var actual = req.user;
    if (actual != undefined || false) {/*
        var idIglesia = actual.iglesia;
        bd.cruds.crudIglesia.buscar1(idIglesia,(igl)=>
        {
          datos = {cargos : igl.cargos}
        });*/
      datos = { cargos: [] }
    }
    else {
      datos = { cargos: [] }
    }
    next();
  });

  // console.log(datos)
  var ver = require('./../../Modelo/Autenticacion/verificar.js')
  require('./get/usuario.js')(rutas, bd, ver);


  rutas.get("/", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    res.render("Paginas/index",
      {
        pagina: 'loginprincipal',
        datos
      });
  });
  rutas.get("/inicio", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    res.render("Paginas/index",
      {
        pagina: 'inicio',
        datos
      });
  });
  rutas.get("/Vista/Administracion", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    res.render("Paginas/index",
      {
        pagina: 'vistaAdministracion',
        datos
      });
  });

  rutas.get("/Vista/General", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    res.render("Paginas/index",
      {
        pagina: 'vistaGeneral',
        datos
      });
  });
  rutas.get("/administracion", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    res.render("Paginas/index",
      {
        pagina: 'admin',
        datos
      });
  });

  rutas.get("/filtro/", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);

    bd.cruds.crudIglesia.buscar1(req.params.idIglesia, (igle) => {
      datos.user = req.user;
      datos.user.FotoPerfil = (datos.user.FotoPerfil == undefined) ? "IconoPersona.jpg" : datos.user.FotoPerfil;

      datos.Iglesia = igle;
      datos.Iglesia.Logo = (datos.Iglesia.Logo == undefined) ? "Iglesia.png" : datos.Iglesia.Logo;

      res.render("Paginas/index",
        {
          pagina: 'filtro',
          datos
        });
    })

  });

  rutas.get("/filtroIglesia/", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);

    bd.cruds.crudIglesia.buscar({}, (iglesias) => {
      bd.cruds.crudMembresias.buscarTodo((membresias) => {
        datos.membresias = membresias;
        datos.iglesias = iglesias;
        datos.user = req.user;
        datos.user.FotoPerfil = (datos.user.FotoPerfil == undefined) ? "IconoPersona.jpg" : datos.user.FotoPerfil;
        // console.log("Datos de iglesiaaaaaaaaaaaa", datos.membresias)

        res.render("Paginas/index",
          {
            pagina: 'filtroIglesia',
            datos
          });
      })
    })
  })

  rutas.get("/dashboardIglesia/", (req, res) => {
    bd.cruds.crudIglesia.buscar({}, (iglesias) => {
      bd.cruds.crudMembresias.buscarTodo((membresias) => {
        datos.membresias = membresias;
        datos.iglesias = iglesias;
        datos.user = req.user;
        datos.user.FotoPerfil = (datos.user.FotoPerfil == undefined) ? "IconoPersona.jpg" : datos.user.FotoPerfil;
        // console.log("Datos de iglesiaaaaaaaaaaaa", datos.membresias)

        res.render("Paginas/index",
          {
            pagina: 'dashboardIglesia',
            datos
          });
      })
    })
  });

  rutas.get("/Iglesia/:idIglesia/filtro", (req, res) => {
    bd.cruds.crudIglesia.buscar1(req.params.idIglesia, (igle) => {
      bd.cruds.crudMembresias.buscarTodo((membresias) => {
        datos.membresias = membresias;
        datos.user = req.user;
        datos.user.FotoPerfil = (datos.user.FotoPerfil == undefined) ? "IconoPersona.jpg" : datos.user.FotoPerfil;

        datos.Iglesia = igle;
        datos.Iglesia.Logo = (datos.Iglesia.Logo == undefined) ? "Iglesia.png" : datos.Iglesia.Logo;

        res.render("Paginas/index",
          {
            pagina: 'filtro',
            datos
          });
      })
    })
  })

  rutas.get("/Iglesia/:idIglesia/poa", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);

    bd.cruds.crudIglesia.buscar1(req.params.idIglesia, (igle) => {
      datos.user = req.user;
      datos.user.FotoPerfil = (datos.user.FotoPerfil == undefined) ? "IconoPersona.jpg" : datos.user.FotoPerfil;

      datos.Iglesia = igle;
      datos.Iglesia.Logo = (datos.Iglesia.Logo == undefined) ? "Iglesia.png" : datos.Iglesia.Logo;

      res.render("Paginas/index",
        {
          pagina: 'poa',
          datos
        });
    })
  });
  rutas.get("/Iglesia/:idIglesia/accion_social", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    bd.cruds.crudIglesia.buscar1(req.params.idIglesia, (igle) => {
      datos.user = req.user;
      datos.user.FotoPerfil = (datos.user.FotoPerfil == undefined) ? "IconoPersona.jpg" : datos.user.FotoPerfil;

      datos.Iglesia = igle;
      datos.Iglesia.Logo = (datos.Iglesia.Logo == undefined) ? "Iglesia.png" : datos.Iglesia.Logo;

      datos.Iglesia.Fotos = (datos.Iglesia.Fotos == undefined) ? [] : datos.Iglesia.Fotos;

      res.render("Paginas/index",
        {
          pagina: 'accion_social',
          datos
        });
    })

  });
  rutas.get("/Iglesia/:idIglesia", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    bd.cruds.crudIglesia.buscar1(req.params.idIglesia, (igle) => {
      bd.cruds.crudIglesia.buscar({}, (iglesias) => {
        datos.iglesias = iglesias;

        datos.user = req.user;
        datos.user.FotoPerfil = (datos.user.FotoPerfil == undefined) ? "IconoPersona.jpg" : datos.user.FotoPerfil;
        datos.Iglesia = igle;
        datos.Iglesia.Logo = (datos.Iglesia.Logo == undefined) ? "Iglesia.png" : datos.Iglesia.Logo;
        datos.Iglesia.Fotos = (datos.Iglesia.Fotos == undefined) ? [] : datos.Iglesia.Fotos;
        datos.Iglesia.FotosSlider = (datos.Iglesia.FotosSlider == undefined) ? [] : datos.Iglesia.FotosSlider;
        var pag = "";

        if (req.user.Cargo == "Administrador") {
          pag = "vistaAdministracion";
        }
        else {
          pag = "vistaGeneral";
        }
        //console.log("&&&&&&&&&&&&&&777777777777777777777", datos.Iglesia)
        res.render("Paginas/index",
          {
            pagina: pag,
            datos
          });
      })

    })

  });

  rutas.get("/admiCental", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);

    bd.cruds.crudIglesia.buscar({}, (iglesias) => {
      datos.iglesias = iglesias;
      datos.user = req.user;
      datos.user.FotoPerfil = (datos.user.FotoPerfil == undefined) ? "IconoPersona.jpg" : datos.user.FotoPerfil;
      //console.log("Datos de iglesiaaaaaaaaaaaa", datos.iglesias)

      res.render("Paginas/index",
        {
          pagina: 'admiCental',
          datos
        });

    })
  });
  rutas.get("/viewMod", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    //console.log(cargos)
    res.render("Paginas/index",
      {
        pagina: 'viewmod',
        datos
      });
  });

  rutas.get("/ministerial", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    res.render("Paginas/index",
      {
        pagina: 'ministerial',
        datos
      });
  });

  rutas.get("/ev_min", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    res.render("Paginas/index",
      {
        pagina: 'ev_min',
        datos
      });
  });



  rutas.get("/edu_cris", (req, res) => {
    // req.flash("confirm", req.app.locals.confirm[0]);
    // req.flash("error", req.app.locals.error[0]);
    res.render("Paginas/index",
      {
        pagina: 'edu_cris',
        datos
      });
  });
  rutas.post("/iniciar/sesion", passport.authenticate("local-login",
    {
      //successRedirect: '/Usuarios/Cuenta',
      failureRedirect: '/',
      failureFlash: true
    }), (req, res) => {
      //console.log(req.user);
      var idAdministrador = "624c5412a73165aade1ef67a";
      if (req.user._id == idAdministrador) {
        res.redirect('/admiCental')
      }
      else {
        res.redirect("/Iglesia/" + req.user.Iglesia)
      }

    });



  rutas.get("/cerrar/sesion", ver.verificar, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect("/");
  });
  /*
      rutas.get("*",(req,res)=>
      {
        res.render("Paginas/error"); //Pagina error
      });*/

  require('./post/Registro/peticiones_bautizo.js').iniciar(rutas, bd, ver);
  require('./post/Registro/peticiones_solicitud.js').iniciar(rutas, bd, ver);
  require('./post/Registro/peticiones_transferencia.js').iniciar(rutas, bd, ver);
  require('./post/miembro_transferido/peticiones.js').iniciar(rutas, bd, ver);
  require('./post/miembro_disciplina/peticiones.js').iniciar(rutas, bd, ver);
  require('./post/santa_cena/peticiones.js').iniciar(rutas, bd, ver);
  require('./post/presentacion_niños/peticiones.js').iniciar(rutas, bd, ver);
  require('./post/matrimonio/peticiones.js').iniciar(rutas, bd, ver);
  require('./post/usuario/peticiones.js').iniciar(rutas, bd, ver);
  require('./post/filtro/peticiones.js').iniciar(rutas, bd, ver);
  require('./post/reportes/peticiones.js').iniciar(rutas, bd, ver);
  //nuevos
  require('./post/postIglesia.js').iniciar(rutas, bd, ver);
  require('./post/postMembresia.js').iniciar(rutas, bd, ver);

  //Movile
  require('../HTTP/RutasMovil.js').iniciar(rutas, bd, ver);
  return rutas;
}

module.exports = ret;
