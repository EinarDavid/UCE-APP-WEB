import React from 'react';
import { Form, Col } from 'react-bootstrap';



function Formulario() {
    return (
        <div>
            <div className="Form-registro">

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>CI*</Form.Label>
                        <Form.Control type="number" placeholder="CI" name="id_ci" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Fecha_de_Transferencia</Form.Label>
                        <Form.Control type="date" name="fecha_transferencia" />
                    </Form.Group>
                </Form.Row>



            </div>
        </div>


    );
}
export default Formulario;
