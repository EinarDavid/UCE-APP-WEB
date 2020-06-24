var entrada = "./src/vista/Desarrollo/paginas/";
var salida = "/public/react";
module.exports =
{
  entry: {
   "inicio": entrada + "inicio.js",
   "filtro": entrada + "filtro.js",
   "admin": entrada + "admin.js",
   "reg_bautizo" : entrada + "administracion/reg_bautizo.js",
   "ministerial" : entrada + "ministerial.js",
   "ev_min" : entrada + "ev_min.js",
   "accion_social" : entrada + "accion_social.js",
   "edu_cris" : entrada + "edu_cris.js",
   "poa" : entrada + "poa.js",
   "loginprincipal" : entrada + "LoginPrincipal/LoginPrincipal.js", 
   "admiCental" : entrada + "AdmiCentral/AdmiCentral.js",
   "viewmod" : entrada + "ViewMod/View.js",
   "vistaAdministracion" : entrada + "VistaAdministracion.js",
   "vistaGeneral" : entrada + "VistaGeneral.js",
  },
  output:
  {
    path: __dirname + salida,
    filename: '[name].js'
  },
  module:
  {
    rules:
    [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
      , {
        test: /\.png$/,
        loaders: ["style-loader", "css-loader"]
      }
      , {
        test: /\.jfif$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};