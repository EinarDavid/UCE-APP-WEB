import React from 'react';
import { Nav, Navbar, Modal, Button, Form, Col, OverlayTrigger, Popover } from 'react-bootstrap';
import Reg_Iglesia from '../Administracion/formulario/registrar_iglesia';
import Reg_Encargado from '../Administracion/formulario/registrar_encargado';
import ModificarInformacion from '../Usuario/ModificarInformacion';

const menu = {

    color: '#fff',

}

class Menu extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.RegistrarEn = this.RegistrarEn.bind(this);
        this.ModificarInformacion = this.ModificarInformacion.bind(this);

        this.state = {
            show: false,
            show2: false,
            shwo3: false,

        };
    }

    handleClose() {
        this.setState({ show: false, show2: false, show3: false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    RegistrarEn() {
        this.setState({ show2: true });
    }
    ModificarInformacion() {
        this.setState({ show3: true });
    }
    render() {
        return (

            <div >
                <Navbar className="fixed-top Menu_AG" id="ColorMenu" sticky=" top " collapseOnSelect expand="lg" variant="dark" >
                    <Navbar.Brand href="/admiCental" ><img src={'/fotos/Iglesias/Iglesia.png'} className="App-logo"  /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="items">
                        <Nav bsPrefix="mr-auto">

                            <Nav.Link onClick={this.handleShow} style={menu} className="menu-letra">REGISTRAR_IGLESIA</Nav.Link>
                            <Nav.Link onClick={this.RegistrarEn} style={menu} className="menu-letra">REGISTRAR_ENCARGADO</Nav.Link>
                            <Nav.Link href={'/filtroIglesia'} style={menu} className="menu-letra">REPORTE</Nav.Link>
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
                                        <strong>Fecha de Nacimiento: </strong> {window.datos.user.Fecha_Nacimiento + ' ' + window.datos.user.Lugar_Nacimiento}  <br></br>
                                        <strong>Email: </strong> {window.datos.user.Email} <br></br>
                                        <strong>Genero: </strong> {window.datos.user.Genero} <br></br>
                                        <strong>Celular: </strong> {window.datos.user.Contacto} <br></br>
                                        <strong>Profesion: </strong> {window.datos.user.Profesion} <br></br>
                                        <strong>Direccion: </strong> {window.datos.user.Direccion} <br></br>
                                        <strong>Estado_Civil: </strong> {window.datos.user.Estado_Civil} <br></br>
                                        <div className="Center Margin">
                                            <Button onClick={this.ModificarInformacion} size="sm" variant="outline-info">Actualizar Informacion</Button>
                                        </div>
                                    </Popover.Content>

                                    <div className="Center Margin">
                                        <Button variant="outline-secondary" href="/cerrar/sesion" className="menu-letra">CERRAR SESION</Button>
                                    </div>
                                </Popover>
                            }
                        >
                            <Navbar.Brand><img src={'/fotos/Membresias/' + window.datos.user.FotoPerfil} className="App-Foto" /></Navbar.Brand>
                        </OverlayTrigger>

                    ))}
                </Navbar>

                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Form action="/Registro/Iglesia" method="post">
                        <Modal.Header closeButton>
                            <Modal.Title>Registrar Iglesia</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Reg_Iglesia></Reg_Iglesia>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose} >Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                <Modal size="lg" show={this.state.show2} onHide={this.handleClose} centered>
                    <Form action="/Registro/Encargado" method="post">
                        <Modal.Header closeButton>
                            <Modal.Title>Registrar Encargado</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Reg_Encargado></Reg_Encargado>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose} >Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                
                <Modal size="lg" show={this.state.show3} onHide={this.handleClose} centered>
                    <Form action="/Modificar/Membresia" method="post" enctype="multipart/form-data">
                        <Modal.Header closeButton>
                            <Modal.Title>Modificar Perfil</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ModificarInformacion />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose} >Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default Menu;
