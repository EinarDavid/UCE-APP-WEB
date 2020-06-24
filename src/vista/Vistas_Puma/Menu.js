import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const menu = {

  color: '#fff',

}
class Menu extends React.Component {
  render() {
    return (

      <div >
        <Navbar className="fixed-top Menu_prin " sticky=" top " collapseOnSelect expand="lg" variant="dark" >
          <Navbar.Brand href="/" ><img src='/img/Logo_Igle_Menu.svg' className="App-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="items" >
            <Nav >
              <Nav.Link href="/ministerial" style={menu} className="menu-letra">INICIO</Nav.Link>
              <Nav.Link href="/administracion" style={menu} className="menu-letra">ADMINISTRACIÓN</Nav.Link>
              <Nav.Link href="/administracion" style={menu} className="menu-letra-IS"> INICIAR SESION</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Menu;

