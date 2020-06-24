import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

class Formulario extends Component {
    render() {
        return (
            <div>
                <div className="Form-registro">

                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Nombre de la Iglesia*</Form.Label>
                            <Form.Control type="text" placeholder="Nombre de la Iglesia" name="Nombre" required defaultValue={window.datos.Iglesia.Nombre} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Descripcion" name="Descripcion" defaultValue={window.datos.Iglesia.Descripcion} />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Misión</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Misión" name="Mision" defaultValue={window.datos.Iglesia.Mision} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Visión</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Visión" name="Vision" defaultValue={window.datos.Iglesia.Vision} />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Numero de Celular</Form.Label>
                            <Form.Control type="number" placeholder="Numero de Celular" name="NumeroCelular" defaultValue={window.datos.Iglesia.NumeroCelular} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type="email" placeholder="Correo Electronico" name="Correo" defaultValue={window.datos.Iglesia.Correo} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Sitio Web de Facebook</Form.Label>
                            <Form.Control type="text" placeholder="Sitio Web de Facebook" name="Facebook" defaultValue={window.datos.Iglesia.Facebook} />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Responsabilidad Social</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Responsabilidad Social" name="ResSocial" defaultValue={window.datos.Iglesia.ResSocial} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Pastores</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Pastores" name="Pastores" defaultValue={window.datos.Iglesia.Pastores} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Horario</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Horario" name="Horario" defaultValue={window.datos.Iglesia.Horario} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col}>
                            <Form.Label className="Color-Advertencia">*Si quieres modificar las Imagenes deselecciona el Checked</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Logo</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Imagenes</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <div className="Form-registro-Check">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="checkbox" name="MantenerLogo" defaultChecked={true} />
                            </Form.Group>
                        </div>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="file" accept="image/*" name="Logo" />
                        </Form.Group>
                        <div className="Form-registro-Check">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="checkbox" name="MantenerFotos" defaultChecked={true} />
                            </Form.Group>
                        </div>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="file" accept="image/*" name="Fotos" multiple='multiple' />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Imagenes Slider</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <div className="Form-registro-Check">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="checkbox" name="MantenerFotosSlider" defaultChecked={true} />
                            </Form.Group>
                        </div>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="file" accept="image/*" name="FotosSlider" multiple='multiple' />
                        </Form.Group>
                    </Form.Row>

                </div>
            </div >


        );
    }
}
export default Formulario;