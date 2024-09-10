import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      iglesias: window.datos.iglesias,
    };
  }
  render() {
    return (
      <div className="Form-registro">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Ci*</Form.Label>
            <Form.Control type="number" placeholder="CI" name="Ci" required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Iglesia*</Form.Label>
            <Form.Control as="select" name="Iglesia" required>
              {this.state.iglesias.map((iglesia) => {
                return (
                  <option
                    key={iglesia._id}
                    value={iglesia._id} /*selected={option.selected}*/
                  >
                    {iglesia.Nombre}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Contraseña*</Form.Label>
            <Form.Control
              type="Password"
              placeholder="Contraseña"
              name="Contraseña"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Debe contener al menos un número, una letra mayúscula, una letra minúscula y al menos 8 caracteres"
            />
          </Form.Group>
        </Form.Row>
      </div>
    );
  }
}
export default Formulario;
