import React from 'react';
import { Nav, Navbar, Modal, Button, Form, Col } from 'react-bootstrap';

const menu = {

    color: '#fff',

}

class Menu extends React.Component {
    render() {
        return (

            <div >
                <Navbar className="fixed-top Menu_prin" sticky=" top " collapseOnSelect expand="lg" variant="dark" >
                    <Navbar.Brand href="/" ><img src='/img/Logo_Igle_Menu.svg' className="App-logo" />
                   
                    </Navbar.Brand>
                    <input className="ModFondo" type="button" value="   Cambiar Logo" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="items">
                        <Nav bsPrefix="mr-auto">
                            <Nav.Link href="/registro/bautizo" style={menu} className="menu-letra-IS"> ATRAS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;

/*<Button variant="secondary" onClick={this.Registrarse} >Registrarse</Button>*/