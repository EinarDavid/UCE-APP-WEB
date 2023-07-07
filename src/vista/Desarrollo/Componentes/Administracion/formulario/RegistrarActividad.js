import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class RegistrarActividad extends Component {
  render() {
    return (
      <div className="Form-registro">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Titulo*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titulo*"
              name="Titulo"
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="Descripcion"
              name="Descripcion"
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
            <Form.Label>Area</Form.Label>
            <Form.Control as="select" name="Area" required>
              <option value="Ministerial">Ministerial</option>
              <option value="Accion social">Accion Social</option>
              <option value="Evangelismo y Misiones">
                Evangelismo y Misiones
              </option>
              <option value="Educacion Cristiana">Educacion Cristiana</option>
              <option value="Administracion">Administracion</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
            <Form.Label>Departamento</Form.Label>
            <Form.Control as="select" name="Departamento" required>
              <option value="Pre-Juvenil">Pre-Juvenil</option>
              <option value="Juvenil">Juvenil</option>
              <option value="Femenil">Femenil</option>
              <option value="DEM">DEM</option>
              <option value="OANSA">OANSA</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Fecha Inicio</Form.Label>
            <Form.Control type="date" name="Inicio" required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Fecha Fin</Form.Label>
            <Form.Control type="date" name="Fin" required />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Hora Inicio</Form.Label>
            <Form.Control type="time" name="HoraInicio" required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Hora Fin</Form.Label>
            <Form.Control type="time" name="HoraFin" required />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Foto de la Actividad</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="FotoActividad"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Presupuesto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Presupuesto"
              name="Presupuesto"
              required
            />
          </Form.Group>
        </Form.Row>
      </div>
    );
  }
}
export default RegistrarActividad;
