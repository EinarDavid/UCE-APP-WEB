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
                        <Form.Label>Nombre del Responsable*</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del Responsable" name="nombre_responsable" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Fecha de Disciplina</Form.Label>
                        <Form.Control type="date" name="fecha_disciplina" />
                    </Form.Group>
                </Form.Row>



            </div>
        </div>


    );
}
export default Formulario;
