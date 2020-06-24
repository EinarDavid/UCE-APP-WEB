module.exports = new obj();
function obj()
{
  this.verificar = (req, res, next)=>{
    if(req.isAuthenticated())
    {
//      console.log("autenticado session",req.session);
        return next();
    }
    else
    {
      //console.log(req.app.locals);
//      console.log("enlace actual:",req.url);
     
      req.flash("error","primero es necesario iniciar sesion");
    //  console.log("no autenticado session",req.session);
      res.redirect('/');
    }
  }
  this.verificarAdmin = (req, res, next)=>{
  //  console.log("session",req.session);
    if(req.isAuthenticated())
    {
        if(req.user.Cargo== "Administrador")
        {
          return next();
        }
        else
        {
      //    console.log("enlace actual:",req.url);
          
          req.flash("error","es necesario iniciar sesion como Administrador");
          res.redirect('/registro/bautizo');
        }
    }
    else
    {
    //  console.log("enlace actual:",req.url);
      req.flash("error","primero es necesario iniciar sesion");
      res.redirect('/registro/bautizo');
    }
  }
  
}
