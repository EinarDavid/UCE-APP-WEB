import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Modal, Button, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'



const menu = {

  color: '#fff',

}

class Menu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div >
        <Navbar className="fixed-top Menu_prin" sticky=" top " collapseOnSelect expand="lg" variant="dark" >
          <Navbar.Brand href="/" ><img src='/img/Logo_Igle_Menu.svg' className="App-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="items">
            <Nav bsPrefix="mr-auto">
              <Nav.Link href="/ministerial" style={menu} className="menu-letra">MINISTERIAL</Nav.Link>
              <Nav.Link href="/ev_min" style={menu} className="menu-letra">EVANGELISMO_Y_MISIONES</Nav.Link>
              <Nav.Link href="/accion_social" style={menu} className="menu-letra">ACCIÓN_SOCIAL</Nav.Link>
              <Nav.Link href="/edu_cris" style={menu} className="menu-letra">EDUCACIÓN_CRISTIANA</Nav.Link>
              <Nav.Link href="/administracion" style={menu} className="menu-letra">ADMINISTRACIÓN</Nav.Link>
              <Nav.Link onClick={this.handleShow} style={menu} className="menu-letra">INICIAR_SESIÓN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Form action="/iniciar/sesion" method="post">
            <Modal.Header closeButton>
              <Modal.Title>Login Administracion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="Form-Login">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>CI</Form.Label>
                    <Form.Control type="text" placeholder="CI" name="ci" />
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
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              <Button variant="primary" type="submit">Submit</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }


}
export default Menu;
