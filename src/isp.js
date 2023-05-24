const path = require("path");
const express = require('express');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
var MongoDBStore = require('connect-mongodb-session')(session);


var app = express();

var puerto = "7000";

require('./Modelo/Autenticacion/local.js')(passport);

var store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/iglesia',
  collection: 'mySessions'
});

app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  rolling: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 'COOKIE_TIMEOUT',
    maxAge: 1000 * 60 * 60 *24 * 365
  },
  maxAge: 1000 * 60 * 60 *24 * 365,
  store: store,
  resave: false,
  saveUninitialized: false
}));

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"../public")));

app.use(cookieParser());

mongoose.connect('mongodb://localhost/iglesia')
.then(db => console.log('db connected'))
.catch(err => console.log(err));

app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  rolling: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 'COOKIE_TIMEOUT',
    maxAge: 1000 * 60 * 60 *24 * 365
  },
  maxAge: 1000 * 60 * 60 *24 * 365,
  resave: false,
  saveUninitialized: false
}));

app.set("views", path.join(__dirname, "vista"));
app.set("view engine", "ejs");

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.confirm = req.flash("confirm");
  app.locals.error = req.flash("error");
  app.locals.nombre = "igle";
  app.locals.usuario = req.user; //guardar req. tantos
  //console.log(app.locals)
  next();
});

//var favicon = require('serve-favicon');
//app.use(favicon(path.join(__dirname,'public','img','favicon2.ico')));

var rutas = require('./Controlador/HTTP/index.js');
app.use(rutas(passport));

app.listen(puerto, ()=>
//app.listen(4000, ()=>
{
  console.log("Servidor lanzado en el puerto:",puerto);
/*
  var bcrypt = require('bcryptjs');
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('admin', salt, function(err, hash) {
      console.log(hash);
    });
  });*/

  /*bd.cruds.crudCliente	138.128.244.16.leer();
  bd.cruds.crudCliente.ingresar({edad: 28});
  bd.cruds.crudCliente.leer();*/
});
