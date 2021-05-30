import React, { Component } from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';

 

class Formulario extends Component {
    constructor() {
        super();
        this.state = {
            filtro: window.datos.filtro,
            titulo: window.datos.titulo,
            reporte: '/Descargar/'+window.datos.reporte
        };
        
        if (this.state.filtro.length == 0) {
            //console.log("----------------",this.state.filtro[0],"------------------");    
            this.state.filtro = [{}];
        }
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;")
        console.log(this.state)
        console.log(this.state.reporte)
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
                                    console.log("columna----------------------------------------------",columna)
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
                                            Object.values(filtro).map(valor => {
                                                return (
                                                    <td>{valor}</td>
                                                )
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
