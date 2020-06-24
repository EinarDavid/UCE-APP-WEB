import React from 'react';
import { Form, Col, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Formulario extends React.Component {
  render() {
    return (
      <div className="Contenedor-Principal">
        <div className="Form-Contenedor-Puma">
          <div className="Form-Puma-Image">
            <img src='/img/galeria/1.jpg'></img>
          </div>
          <div className="Contenedor-Derecha">
            <div className="Form-Puma-RegDoc">
              <Form action="#" method="post">
                <h2 className="Form-Puma-Center">Crear Docente</h2>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" placeholder="Codigo" name="ci" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" placeholder="Nombres" name="ci" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Apellido Paterno</Form.Label>
                    <Form.Control type="text" placeholder="Apellido Paterno" name="ci" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Apellido Materno</Form.Label>
                    <Form.Control type="text" placeholder="Apellido Materno" name="ci" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Materias</Form.Label>
                    <Form.Control as="select" name="genero">
                            <option value="Masculino">IO</option>
                            <option value="Femenino">CALCULO</option>
                        </Form.Control>
                  </Form.Group>
                </Form.Row>
                
                <div className="Form-Puma-Center">
                  <Button type="submit" variant="dark">Registrar</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Formulario;

/*
.Form-Puma-RegDoc{
  background: rgb(243, 111, 33, .8);
  position: relative;
  color: #fff;
  padding-top: 50px;
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  height: 100%;
  float: right;
}
*/