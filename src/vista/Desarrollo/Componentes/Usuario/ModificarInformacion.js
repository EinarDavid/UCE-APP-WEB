import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

class Formulario extends Component {
    render() {
        return (
            <div>
                <div className="Form-registro">

                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Nombre*</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="Nombre" required defaultValue={window.datos.user.Nombre} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Apellido Paterno</Form.Label>
                            <Form.Control type="text" placeholder="Apellido Paterno" name="Apellido_Paterno" required defaultValue={window.datos.user.Apellido_Paterno} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Apellido Materno</Form.Label>
                            <Form.Control type="text" placeholder="Apellido Materno" name="Apellido_Materno" defaultValue={window.datos.user.Apellido_Materno} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Genero</Form.Label>
                            <Form.Control as="select" name="Genero" defaultValue={window.datos.user.Genero}>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="number" placeholder="Celular" name="Contacto" defaultValue={window.datos.user.Contacto}/>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type="email" placeholder="Correo Electronico" name="Email" defaultValue={window.datos.user.Email} />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col}>
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control type="date" name="Fecha_Nacimiento" defaultValue={window.datos.user.Fecha_Nacimiento}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Lugar de nacimiento</Form.Label>
                            <Form.Control type="text" placeholder="Lugar de nacimiento" name="Lugar_Nacimiento"  defaultValue={window.datos.user.Lugar_Nacimiento} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Profesión</Form.Label>
                            <Form.Control type="text" placeholder="Profesión" name="Profesion" defaultValue={window.datos.user.Profesion} />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} >
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="direccion" name="Direccion" defaultValue={window.datos.user.Direccion}/>
                        </Form.Group>
                    <Form.Group as={Col} >
                            <Form.Label>Estado_civil</Form.Label>
                            <Form.Control as="select" name="Estado_Civil" defaultValue={window.datos.user.Estado_Civil}>
                                <option value="Solter@">Solter@</option>
                                <option value="Casad@">Casad@</option>
                                <option value="Viud@">Viud@</option>
                            </Form.Control>
                        </Form.Group>
                       
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col}>
                            <Form.Label className="Color-Advertencia">*Si quieres modificar tu foto de perfil deselecciona el Checked</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Foto de Perfil</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <div className="Form-registro-Check">
                            <Form.Group as={Col}>
                                <Form.Control type="checkbox" name="MantenerFotoPerfil" defaultChecked={true} />
                            </Form.Group>
                        </div>
                        <Form.Group as={Col}>
                            <Form.Control type="file" accept="image/*" name="FotoPerfil" />
                        </Form.Group>
                        
                    </Form.Row>
                </div>
            </div >


        );
    }
}
export default Formulario;