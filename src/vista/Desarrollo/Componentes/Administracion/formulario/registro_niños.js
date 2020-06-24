import React from 'react';
import { Form, Col } from 'react-bootstrap';



function Formulario() {
    return (
        <div>
            <div className="Form-registro">

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>CI*</Form.Label>
                        <Form.Control type="number" placeholder="CI" name="ci" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre*</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name="nombre" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Apellido Paterno*</Form.Label>
                        <Form.Control type="text" placeholder="Apellido Paterno" name="apellido_paterno" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Apellido Materno*</Form.Label>
                        <Form.Control type="text" placeholder="Apellido Materno" name="apellido_materno" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre Padre*</Form.Label>
                        <Form.Control type="text" placeholder="Nombre Padre" name="nombre_padre" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre Madre*</Form.Label>
                        <Form.Control type="text" placeholder="Nombre Madre" name="nombre_madre" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control type="date" name="fecha_nac" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Fecha de Presentacion</Form.Label>
                        <Form.Control type="date" name="fecha_presentacion" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Numero de Registro Civil</Form.Label>
                        <Form.Control type="text" placeholder="Numero de Registro Civil" name="numero_reg_civil" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Fecha de Partida</Form.Label>
                        <Form.Control type="date" name="fecha_partida" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre del Pastor</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del Pastor" name="nombre_pastor" />
                    </Form.Group>
                </Form.Row>
            </div>
        </div>


    );
}
export default Formulario;
