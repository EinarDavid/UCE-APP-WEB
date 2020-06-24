import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';

class Formulario extends Component {
    render() {
        return (
            <div className="Form-registro">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre*</Form.Label>
                        <Form.Control type="text" placeholder="Nombre*" name="Nombre" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Direccion*</Form.Label>
                        <Form.Control type="text" placeholder="Direccion*" name="Direccion" />
                    </Form.Group>
                </Form.Row>
            </div>
        );
    }
}
export default Formulario;
