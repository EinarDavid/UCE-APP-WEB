import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';



class Formulario extends Component {
    constructor() {
        super();
        this.state = {
            cargos: window.datos.cargos
        };
    }
    render() {
        return (

            <div className="Form-registro">

                <Form.Row> 
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>CI*</Form.Label>
                        <Form.Control type="number" placeholder="CI" name="Ci" required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                        <Form.Label>Cargo</Form.Label>
                        <Form.Control as="select" name="Cargo">
                            <option value="Administrador">Administrador</option>
                            <option value="Secretaria">Secretaria</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>


            </div>
        );
    }
}
export default Formulario;

/*
{
                                this.state.cargos.map(cargo => {
                                    return(
                                        <option value={cargo.nombre} >
                                        {cargo.nombre}
                                        </option>
                                        )
                                })
                            }
*/
/*selected={option.selected}

<Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Password*</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="Contraseña" required/>
                    </Form.Group>

*/