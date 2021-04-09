module.exports = new cruds();

function cruds() {
  this.crud_usuario;
  this.iniciar = () => {
    this.crudIglesia = require("./crudIglesia");
    this.crudMembresias = require("./crudMembresias");
    this.crudArea = require("./crudArea");
    this.crudAdministrador = require("./crudAdministrador");
    this.crudUsuario = require ("./crud_usuario");
    this.crudAdministrador = require ("./crudAdministrador");
    this.crudArea = require ("./crudArea");
    this.crudIglesia = require ("./crudIglesia");
    this.crudMatrimonio = require ("./crudMatrimonio");
   
  }


}
