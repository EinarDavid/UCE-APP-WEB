module.exports = (passport) => {
  var bcrypt = require('bcryptjs');

  var bd = require('./../BD/bd.js');
  bd.iniciar();

  const LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser((user, done) => {
    //  console.log("serializando usuario",user);
    done(null, user._id);//segun la bd
  });
  passport.deserializeUser((id, done) => {
    console.log(id);
    bd.cruds.crudMembresias.buscar1(id, (usuario) => {
      console.log(usuario);
      if ((usuario != undefined)) {
        //    console.log("desearializando",id,usuario);
        done(null, usuario);
      }
      else {
        done(null, false);
        console.log("no hay este usuario");
      }
    });
  });
  // passport.use("local-signup", new LocalStrategy({
  //   usernameField: 'ci',
  //   passwordField: 'contra',
  //   passReqToCallback: true
  // },(req,ci,contra,done)=>
  // {
  //
  // }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'Ci',
    passwordField: 'Contraseña',
    passReqToCallback: true
  }, (req, ci, contra, done) => {
    console.log("Ci:", ci, "contra", contra)
    bd.cruds.crudMembresias.buscar({
      Ci:
      {
        valor: ci,
        tipo: 'contieneString'
      }
    }, (usuario) => {
      console.log(usuario);
      usuario = usuario[0];
      if (!(usuario != undefined)) {
        return done(null, false, req.flash('error', 'CI no registrado'));
      }
      else {

        bcrypt.compare(contra, usuario.Contraseña, function (err, resp) {
          if (err) console.log(err);
          if (resp == true) {
            req.session.usuario = usuario;
            //console.log("session nueva",req.session);
            return done(null, usuario, req.flash("confirm", "Bienvenido de nuevo " + usuario.Nombre));
          }
          else {
            return done(null, false, req.flash('error', 'Contraseña incorrecta'));
          }
        });
      }
    });
  })
  );


}
