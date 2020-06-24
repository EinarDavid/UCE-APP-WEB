import React, { Component } from "react";

class SuperGeneradorFormularios3000 extends Component
{
  constructor() {
    super();
    this.state = {
      form: window.datos.SuperGeneradorFormularios3000
    };
  }
  render()
  {
    var campos = this.state.form.campos.map(campo => {
        switch (campo.type) {
          case 'combobox':
            return (
              <div>
                <label htmlFor={campo.name}> {campo.label} </label>
                <br></br>
                <select name = {campo.name} required={campo.required} readOnly={campo.readonly}>
                  {
                    campo.contenido.map(option =>
                    {
                      return(
                        <option value = {option.valor} selected = {option.selected}>
                          {option.contenido}
                        </option>
                      )
                    })
                  }
                </select>
                <br></br>
              </div>
            )
            break;
          default:
          return (
            <div>
              <label htmlFor={campo.name}> {campo.label} </label>
              <br></br>
              <input name = {campo.name} type ={campo.type} required={campo.required} placeholder={campo.placeholder} defaultValue = {campo.value} readOnly={campo.readonly}></input>
              <br></br>
            </div>
          )
            break;
        }
      });
    return (
      <div>
      {
        <form action = {this.state.form.action} method = {this.state.form.method} encType={this.state.form.enctype}>
          <h1>{this.state.form.titulo}</h1>
          {campos}
        </form>
      }
      </div>
    )
  }
}
export default SuperGeneradorFormularios3000;