import React from 'react';
import { Nav, Navbar, Modal, Button, Form, Col, NavDropdown, OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';

import ModificarInformacion from '../../Usuario/ModificarInformacion';

const menu = {

  color: '#fff',

}
const menu2 = {
  color: '#000',
}

class Menu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.Registrarse = this.Registrarse.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);

    this.state = {
      show: false,
      show1: false,

    };
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleClose2() {
    this.setState({ show1: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  Registrarse() {
    this.setState({ show: false });
    this.setState({ show1: true });
  }
  render() {
    return (
      //
      <div >
        <Navbar className=" Menu_prin fixed-top" id="ColorMenu" sticky=" top " collapseOnSelect expand="lg" variant="dark" >
          <Navbar.Brand href={"/Iglesia/" + window.datos.Iglesia._id} ><img src={'/fotos/Iglesias/' + window.datos.Iglesia.Logo} className="App-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="items Center">
            <Nav bsPrefix="mr-auto">
              <Nav.Link href="#Actividades" style={menu} className="menu-letra">ACTIVIDADES</Nav.Link>
              <Nav.Link href="#Responsabilidad/Social" style={menu} className="menu-letra">RESPONSABILIDAD SOCIAL</Nav.Link>
              <Nav.Link href="#Horario/Servicio" style={menu} className="menu-letra">HORARIOS DE SERVICIO</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>

          {['bottom'].map((placement) => (

            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <div className="Center">
                    <img src={'/fotos/Membresias/' + window.datos.user.FotoPerfil} className="App-Foto-Popover" />

                    <Popover.Title>

                      <strong>{window.datos.user.Nombre + ' ' + window.datos.user.Apellido_Paterno + ' ' + window.datos.user.Apellido_Materno}</strong>
                    </Popover.Title>
                  </div>
                  <Popover.Content className="Margin">
                    <div className="Center">
                      <strong>Informacion</strong> <br></br>
                    </div>
                    <strong>Fecha de Nacimiento: </strong> {window.datos.user.Fecha_Nacimiento +' '+ window.datos.user.Lugar_Nacimiento }  <br></br>
                    <strong>Email: </strong> {window.datos.user.Email} <br></br>
                    <strong>Genero: </strong> {window.datos.user.Genero} <br></br>
                    <strong>Celular: </strong> {window.datos.user.Contacto} <br></br>
                    <strong>Profesion: </strong> {window.datos.user.Profesion} <br></br>
                    <strong>Direccion: </strong> {window.datos.user.Direccion} <br></br>
                    <strong>Estado_Civil: </strong> {window.datos.user.Estado_Civil} <br></br>
                    <div className="Center Margin">
                    <Button onClick={this.handleShow} size="sm" variant="outline-info">Actualizar Informacion</Button>
                    </div>
                  </Popover.Content>
                  
                  <div className="Center Margin">
                    <Button variant="outline-secondary"  href="/cerrar/sesion" className="menu-letra">CERRAR SESION</Button>
                  </div>
                </Popover>
              }
            >
              <Navbar.Brand><img src={'/fotos/Membresias/' + window.datos.user.FotoPerfil} className="App-Foto" /></Navbar.Brand>
            </OverlayTrigger>

          ))}

        </Navbar>

        <Modal size="lg" show={this.state.show} onHide={this.handleClose} centered>
          <Form action="/Modificar/Membresia" method="post" enctype="multipart/form-data">
            <Modal.Header closeButton>
              <Modal.Title>Modificar perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ModificarInformacion/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose} >Close</Button>
              <Button variant="primary" type="submit">Submit</Button>
            </Modal.Footer>
          </Form>
        </Modal>

        <Modal show={this.state.show1} onHide={this.handleClose2} centered>
          <Form action="#" method="post">
            <Modal.Header closeButton>
              <Modal.Title>Crear Cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="Form-Login">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nombre de la Iglesia</Form.Label>
                    <Form.Control type="text" placeholder="Nombre de la Iglesia" name="ci" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>CI</Form.Label>
                    <Form.Control type="number" placeholder="CI" name="ci" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                  </Form.Group>
                </Form.Row>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose2} >Close</Button>
              <Button variant="primary" type="submit">Submit</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Menu;

/*<Button variant="secondary" onClick={this.Registrarse} >Registrarse</Button>


<Nav.Link href={"/Iglesia/" + window.datos.Iglesia._id + "/accion_social/"} style={menu} className="menu-letra">ACTIVIDADES</Nav.Link>

*/