import React, { Component } from 'react';
import { Table, Form, Col, Button, Modal } from 'react-bootstrap';
import ModificarInformacion from '../../Usuario/ModificarInformacionUser';



class Formulario extends Component {
    constructor() {
        super();
        var excepciones = ["_id", "__v", "MiembroBautizo", "MiembroTransferencia", "MiembroSolicitud", "Matrimonio", "Disciplina", "Hijos", "Iglesia", "Contraseña",
            "Email", "Estado_Civil", "Fecha_Nacimineto", "Genero", "Lugar_Nacimiento", "Profesion", "Direccion", "Cargo", "Numero_Registro_Civil", "Fecha_Nacimiento"]
        var rellenar = ["Cargo", "FotoPerfil"]
        window.datos.filtro = window.datos.filtro.map(a => {
            if (a != undefined) {
                rellenar.map(b => {
                    if (a[b] == undefined) {
                        a[b] = ""
                    }
                    return b;
                });
                excepciones.map(c => {
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
            reporte: '/Descargar/' + window.datos.reporte,
            show1: false,
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


       
        this.handleClose = this.handleClose.bind(this);
        this.handleShow_EditarPerfil = this.handleShow_EditarPerfil.bind(this);
    }
    handleClose() {
        this.setState({
            show1: false,

        });
    }
    handleShow_EditarPerfil(){
        this.setState({show1: true});
    }
    render() {
        return (

            <div className="Form-filtro" id="texto">

                <h1>{this.state.titulo}</h1>
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            <th>Nro</th>
                            {

                                Object.getOwnPropertyNames(this.state.filtro[0]).map(columna => {
                                    //console.log("columna===========================",columna)
                                    return (
                                        <th>{columna}</th>
                                    )
                                })

                            }
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.filtro.map((filtro, i) => {


                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        {
                                            this.columnas.map(columna => {
                                                var valor = filtro[columna]

                                                if (columna == "FotoPerfil") {
                                                    if (valor == "") {
                                                        valor = "IconoPersona.jpg"
                                                    }
                                                    return (
                                                        <td>
                                                            <img src={'/fotos/Membresias/' + valor} width="100px" height="100px"></img></td>
                                                    )
                                                }
                                                if (columna == "Imagen_Membresia") {
                                                    if (valor == "") {
                                                        valor = "IconoPersona.jpg"
                                                    }
                                                    return (
                                                        <td>
                                                            <img src={'/fotos/Membresias/' + valor} width="150px" height="100px"></img></td>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <td>{valor}</td>
                                                    )
                                                }


                                            })

                                        }



                                        <td>
                                            <h4 className="accion">

                                                <Button onClick={this.handleShow_EditarPerfil} > </Button>

                                            </h4>
                                        </td>
                                    </tr>
                                )

                            })
                        }

                    </tbody>
                </Table>
                <br></br>
                <Modal size="lg" show={this.state.show1} onHide={this.handleClose} centered>
                    <Form action="/Modificar/Membresia" method="post" enctype="multipart/form-data">
                        <Modal.Header closeButton>
                            <Modal.Title>Modificar perfil</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ModificarInformacion />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose} >Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
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

//<a href="#"></a>
