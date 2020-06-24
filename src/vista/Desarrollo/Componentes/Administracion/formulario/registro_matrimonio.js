import React from 'react';
import { Form, Col } from 'react-bootstrap';



function Formulario() {
    return (
        <div>
            <div className="Form-registro">

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre del Pastor*</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del Pastor" name="nombre_pastor" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>CI Esposo*</Form.Label>
                        <Form.Control type="text" placeholder="CI Esposo" name="id_ci_esposo" />
                    </Form.Group>
                    
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>CI Esposa*</Form.Label>
                        <Form.Control type="text" placeholder="CI Esposa" name="id_ci_esposa" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Fecha de Matrimonio</Form.Label>
                        <Form.Control type="date" name="fecha_matrimonio" />
                    </Form.Group>
                </Form.Row>

            </div>
        </div>


    );
}
export default Formulario;
