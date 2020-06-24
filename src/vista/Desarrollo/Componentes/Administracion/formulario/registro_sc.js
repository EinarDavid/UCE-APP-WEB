import React from 'react';
import { Form, Col } from 'react-bootstrap';


function Formulario() {
    return (
        <div>
            <div className="Form-registro">
            <Form.Row >
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className='reloj'></Form.Label>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>CI*</Form.Label>
                        <Form.Control type="text" placeholder="CI" name="id_ci" />
                    </Form.Group>

                </Form.Row>
                



            </div>
        </div>


    );
}
export default Formulario;
