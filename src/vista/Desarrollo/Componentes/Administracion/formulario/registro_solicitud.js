import React from "react";
import { Form, Col, Button } from "react-bootstrap";

function Formulario() {
  return (
    <div>
      <div className="Form-registro">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>CI*</Form.Label>
            <Form.Control
              type="number"
              placeholder="CI"
              name="Ci"
              required
              pattern="^\d+$"
              title="El campo solo puede contener números"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="Password"
              placeholder="Contraseña"
              name="Contraseña"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Debe contener al menos un número, una letra mayúscula, una letra minúscula y al menos 8 caracteres"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="Nombre"
              required
              pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
              title="El nombre solo puede contener letras y espacios"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Apellido_Paterno*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellido Paterno"
              name="Apellido_Paterno"
              required
              pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$"
              title="El apellido solo puede contener letras sin espacios"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Apellido_Materno</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellido Materno"
              name="Apellido_Materno"
              pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$"
              title="El apellido solo puede contener letras sin espacios"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
            <Form.Label>Genero</Form.Label>
            <Form.Control as="select" name="Genero">
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="number"
              placeholder="Celular"
              name="Contacto"
              pattern="^\d+$"
              title="El campo solo puede contener números"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Ingresa un correo electrónico válido"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Fecha_de_nacimiento</Form.Label>
            <Form.Control
              type="date"
              name="Fecha_Nacimiento"
              min="1924-01-01"
              max="2024-09-11"
              title="Debes tener entre 100 y 0 años"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Lugar de nacimiento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lugar de nacimiento"
              name="Lugar_Nacimiento"
              pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
              title="El campo solo puede contener letras y espacios"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Numero Reg Civil</Form.Label>
            <Form.Control
              type="text"
              placeholder="Numero Reg Civil"
              name="Numero_Registro_Civil"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Profesion*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Profesion"
              name="Profesion"
              required
              pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
              title="El campo solo puede contener letras y espacios"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="direccion"
              name="Direccion"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
            <Form.Label>Estado_civil</Form.Label>
            <Form.Control as="select" name="Estado_Civil">
              <option value="Solter@">Solter@</option>
              <option value="Casad@">Casad@</option>
              <option value="Viud@">Viud@</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
            <Form.Label>Cargo en la Iglesia</Form.Label>
            <Form.Control as="select" name="Cargo_Ministerial">
              <option value="Ninguno">Ninguno</option>
              <option value="Anciano">Anciano</option>
              <option value="Diacono">Diacono</option>
              <option value="Diaconisa">Diaconisa</option>
              <option value="Soc. Juvenil">Soc. Juvenil</option>
              <option value="Soc. Femenil">Soc. Femenil</option>
              <option value="Min. Pre Juvenil">Min. Pre Juvenil</option>
              <option value="Oansa">Oansa</option>
              <option value="Superintendencia">Superintendencia</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Imagen_Membresia</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="Imagen_Membresia"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Foto Perfil</Form.Label>
            <Form.Control type="file" accept="image/*" name="FotoPerfil" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Fecha_Bautizo*</Form.Label>
            <Form.Control
              type="date"
              name="Fecha_Bautizo"
              required
              min="1924-01-01"
              max="2024-09-10"
              title="Debes ser menor a la fecha actual"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Formulario</Form.Label>
            <Form.Control type="file" name="Formulario" />
          </Form.Group>
        </Form.Row>
      </div>
    </div>
  );
}
export default Formulario;
