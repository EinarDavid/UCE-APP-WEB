import React, { Component } from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';

 

class Formulario extends Component {
    constructor() {
        super();
        var excepciones = ["_id", "__v","MiembroBautizo","MiembroTransferencia", "MiembroSolicitud","Matrimonio","Disciplina", "Hijos","Iglesia","Contraseña"]
        var rellenar = ["Cargo", "FotoPerfil"]
        window.datos.filtro = window.datos.filtro.map(a=>{
            if(a!=undefined)
            {
                rellenar.map(b=>{
                    if(a[b]==undefined)
                    {
                        a[b]=""
                    }
                    return b;
                });
                excepciones.map(c=>{
                    delete a[c]
                    return c;
                });
            }
            return a;
        });
/*
        window.datos.filtro = window.datos.filtro.map(a=>{
            delete a.MiembroBautizo;
            delete a.MiembroTransferencia;
            delete a.MiembroSolicitud;
            delete a.Matrimonio;
            delete a.Disciplina;
            delete a.Hijos;
            delete a.Iglesia;
            delete a.Contraseña;
            
            console.log("-->-->", a)
            return a;
        })
        */
        this.state = {
            filtro: window.datos.filtro,
            titulo: window.datos.titulo,
            reporte: '/Descargar/'+window.datos.reporte
        };
        
        if (this.state.filtro.length == 0) {
            //console.log("----------------",this.state.filtro[0],"------------------");    
            this.state.filtro = [{}];
        }
        //console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;")
        //console.log(this.state)
        //console.log(this.state.reporte)
        this.columnas = Object.getOwnPropertyNames(this.state.filtro[0]);
//        Object.values(filtro)
    }
    render() {
        return (

            <div className="Form-filtro">

                <h1>{this.state.titulo}</h1>
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            {

                                Object.getOwnPropertyNames(this.state.filtro[0]).map(columna => {
                                    //console.log("columna===========================",columna)
                                    return (
                                        <th>{columna}</th>
                                    )
                                })

                            }
                            <th>Acción</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.filtro.map((filtro, i) => {


                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        {
                                            this.columnas.map(columna => {
                                                var valor=filtro[columna]
                                                if(columna=="FotoPerfil")
                                                {
                                                    if (valor =="")
                                                    {
                                                        valor="IconoPersona.jpg"
                                                    }
                                                    return (
                                                        <td><img src ={'/fotos/Membresias/' + valor} width="100px" height="100px"></img></td>
                                                    )
                                                }
                                                else
                                                {
                                                    return (
                                                        <td>{valor}</td>
                                                    )
                                                }

                                            })

                                        }
                                        <td>
                                            <h4 className="accion">

                                                <a href="#"></a>
                                                <a href="#"></a>
                                            </h4>
                                        </td>
                                    </tr>
                                )

                            })
                        }

                    </tbody>
                </Table>
                <br></br>
                <div className="Reportes">
                    <Form action={this.state.reporte} method="post">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Button type="submit" variant="outline-light">Descargar</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Formulario;
