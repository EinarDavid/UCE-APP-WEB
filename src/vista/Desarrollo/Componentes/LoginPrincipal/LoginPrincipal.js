import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";

class Login_Principal extends Component {
  render() {
    return (
      <div className="backgroud">
        <div className="Form-Login-Prin">
          <Form action="/iniciar/sesion" method="post">
            <h3 className="Form-Puma-Center">Iniciar Sesión</h3>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Carnet de Identidad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="CI"
                  name="Ci"
                  required
                />
              </Form.Group>
            </Form.Row>
            {/* <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="Contraseña"
                  required
                />
              </Form.Group>
            </Form.Row> */}

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="Contraseña"
                  required
                  //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  //title="Debe contener al menos un número, una letra mayúscula, una letra minúscula y al menos 8 caracteres"
                />
              </Form.Group>
            </Form.Row>

            <div className="Form-Puma-Center">
              <Button variant="primary" type="submit">
                INICIAR SESIÓN
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login_Principal;
