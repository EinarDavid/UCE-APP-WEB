import React from 'react';

import { Nav, Navbar, NavDropdown, Modal, Button, Form, Col, FormControl, OverlayTrigger, Popover } from 'react-bootstrap';
import Registro_Bautizo from './formulario/registro_bautizo';
import Registro_Solicitud from './formulario/registro_solicitud';
import Registro_Tranferencia from './formulario/registro_transferencia';
import Registro_Tranferida from './formulario/registro_Transferidos';
import Registro_Disciplina from './formulario/registro_disciplinas';
import Registro_Restauracion from './formulario/registro_restauracion';
import Registro_SC from './formulario/registro_sc';
import Registro_niños from './formulario/registro_niños';
import Registro_Matrimonio from './formulario/registro_matrimonio';
import Registro_Usario from './formulario/registro_usuario';
import Registrar_Iglesia from './formulario/registrar_iglesia';
import POA from './Poa/poa';
import EditarInformacion from './formulario/EditarInformacion';
import ModificarInformacion from '../Usuario/ModificarInformacion';
import RegistrarActividad from '../Administracion/formulario/RegistrarActividad';

const menu = {

    color: '#fff',

}
const menu2 = {
    color: '#000',
}


class Menu_Admi extends React.Component {



    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow_Solicitud = this.handleShow_Solicitud.bind(this);
        this.handleShow_Transferencia = this.handleShow_Transferencia.bind(this);
        this.handleShow_Transferido = this.handleShow_Transferido.bind(this);
        this.handleShow_Disciplina = this.handleShow_Disciplina.bind(this);
        this.handleShow_Restauracion = this.handleShow_Restauracion.bind(this);
        this.handleShow_SC = this.handleShow_SC.bind(this);
        this.handleShow_Pre = this.handleShow_Pre.bind(this);
        this.handleShow_Matrimonio = this.handleShow_Matrimonio.bind(this);
        this.handleShow_Usuario = this.handleShow_Usuario.bind(this);
        this.handleShow_filtro_membresia = this.handleShow_filtro_membresia.bind(this);
        this.handleShow_filtro_SC = this.handleShow_filtro_SC.bind(this);
        this.handleShow_filtro_PN = this.handleShow_filtro_PN.bind(this);
        this.handleShow_filtro_Matrimonio = this.handleShow_filtro_Matrimonio.bind(this);
        this.handleShow_filtro_Usuario = this.handleShow_filtro_Usuario.bind(this);
        this.handleShow_POA = this.handleShow_POA.bind(this);
        this.handleShow_Editar = this.handleShow_Editar.bind(this);
        this.handleShow_EditarPerfil = this.handleShow_EditarPerfil.bind(this);
        this.handleShow_RegistrarActividad = this.handleShow_RegistrarActividad.bind(this);

        this.state = {
            show: false,
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            show8: false,
            show9: false,
            show10: false,
            show11: false,
            show12: false,
            show13: false,
            show14: false,
            show15: false,
            show16: false,
            show17: false,
            show18: false,
        };


    }

    handleClose() {
        this.setState({
            show: false,
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            show8: false,
            show9: false,
            show10: false,
            show11: false,
            show12: false,
            show13: false,
            show14: false,
            show15: false,
            show16: false,
            show17: false,
            show18: false,
        });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleShow_Transferencia() {
        this.setState({ show1: true });
    }

    handleShow_Solicitud() {
        this.setState({ show2: true });
    }
    handleShow_Transferido() {
        this.setState({ show3: true });
    }
    handleShow_Disciplina() {
        this.setState({ show4: true });
    }
    handleShow_Restauracion() {
        this.setState({ show5: true });
    }
    handleShow_SC() {
        this.setState({ show6: true });
    }
    handleShow_Pre() {
        this.setState({ show7: true });
    }
    handleShow_Matrimonio() {
        this.setState({ show8: true });
    }
    handleShow_Usuario() {
        this.setState({ show9: true });
    }
    handleShow_filtro_membresia() {
        this.setState({ show10: true });
    }
    handleShow_filtro_SC() {
        this.setState({ show11: true });
    }
    handleShow_filtro_PN() {
        this.setState({ show12: true });
    }
    handleShow_filtro_Matrimonio() {
        this.setState({ show13: true });
    }
    handleShow_filtro_Usuario() {
        this.setState({ show14: true });
    }
    handleShow_POA() {
        this.setState({ show15: true });
    }
    handleShow_Editar() {
        this.setState({ show16: true });
    }
    handleShow_EditarPerfil(){
        this.setState({show17: true});
    }
    handleShow_RegistrarActividad(){
        this.setState({show18: true});
    }
    render() {

        return (

            <div >
                <Navbar className="fixed-top Menu_prin" id="ColorMenu" sticky=" top " collapseOnSelect expand="lg" variant="dark" >
                    <Navbar.Brand href={"/Iglesia/" + window.datos.Iglesia._id}><img src={'/fotos/Iglesias/' + window.datos.Iglesia.Logo} className="App-logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="items">
                        <Nav bsPrefix="mr-auto">

                            <NavDropdown className="menu-letra" title="REGISTRO MEMBRESIA" id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={this.handleShow}>REG. POR BAUTIZO</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.handleShow_Transferencia}>REG. POR TRANFERENCIA</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.handleShow_Solicitud}>REG. POR SOLICITUD</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={this.handleShow_Usuario} style={menu} className="menu-letra">REG. PERSONAL</Nav.Link>
                            {/* <Nav.Link onClick={this.handleShow_filtro_membresia} style={menu} className="menu-letra">REPORTE MEMBRESIA</Nav.Link> */}
                            <Nav.Link href={'/Iglesia/'+ window.datos.Iglesia._id + '/filtro'} style={menu} className="menu-letra">REPORTES</Nav.Link>
                            
                            <Nav.Link onClick={this.handleShow_RegistrarActividad} style={menu} className="menu-letra">REG. ACTIVIDAD</Nav.Link>
                            
                            <Nav.Link href={'/Iglesia/'+ window.datos.Iglesia._id +'/poa'} style={menu} className="menu-letra">CALENDARIO DE ACT.</Nav.Link>
                            <Nav.Link onClick={this.handleShow_Editar} style={menu} className="menu-letra">ADMINISTRAR PAGINA</Nav.Link>
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
                                    <Popover.Content className="Margin" >
                                        <div className="Center">
                                            <strong>Informacion</strong> <br></br>
                                        </div>
                                        <strong>Fecha de Nacimiento: </strong> {window.datos.user.Fecha_Nacimiento +' '+ window.datos.user.Lugar_Nacimiento}  <br></br>
                                        <strong>Email: </strong> {window.datos.user.Email} <br></br>
                                        <strong>Genero: </strong> {window.datos.user.Genero} <br></br>
                                        <strong>Celular: </strong> {window.datos.user.Contacto} <br></br>
                                        <strong>Profesion: </strong> {window.datos.user.Profesion} <br></br>
                                        <strong>Direccion: </strong> {window.datos.user.Direccion} <br></br>
                                        <strong>Estado_Civil: </strong> {window.datos.user.Estado_Civil} <br></br>
                                        <div className="Center Margin">
                                            <Button onClick={this.handleShow_EditarPerfil} size="sm" variant="outline-info">Actualizar Informacion</Button>
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

                <Modal size="lg" show={this.state.show} onHide={this.handleClose} centered>
                    <Form action="/Registro/Bautizo" method="post" encType="multipart/form-data" >
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Membresia por Bautizo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_Bautizo />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show1} onHide={this.handleClose} centered>
                    <Form action="/Registro/Transferencia" method="post" encType="multipart/form-data">
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Membresia por Transferencia</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_Tranferencia />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show2} onHide={this.handleClose} centered>
                    <Form action="/Registro/Solicitud" method="post" encType="multipart/form-data">
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Membresia por Solicitud</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_Solicitud />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show3} onHide={this.handleClose} centered>
                    <Form action="/Registro/Transfererido" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Membresia Transferida</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_Tranferida />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show4} onHide={this.handleClose} centered>
                    <Form action="/Registro/Disciplina" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Disciplina</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_Disciplina />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show5} onHide={this.handleClose} centered>
                    <Form action="/Registro/Restauracion" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Restauracion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_Restauracion />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="" show={this.state.show6} onHide={this.handleClose} centered>
                    <Form action="/Registro/SantaCena" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Santa Cena</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_SC />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show7} onHide={this.handleClose} centered>
                    <Form action="/Registro/Presentacion" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Presentacion de Niños</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_niños />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show8} onHide={this.handleClose} centered>
                    <Form action="/Registro/Matrimonio" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Matrimonio</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_Matrimonio />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show9} onHide={this.handleClose} centered>
                    <Form action="/Registro/Usuario" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de Usuario</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Registro_Usario />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show10} onHide={this.handleClose} centered>

                    <Form action="/Filtro/Membresia" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Buscar Membresia</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="Form-registro">
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Selecionar</Form.Label>
                                        <Form.Control as="select" name="membresia">
                                            <option value="Ci">Ci</option>
                                            <option value="Nombre">Nombre</option>
                                            <option value="Apellido_Paterno">Apellido</option>
                                            <option value="Genero">Genero</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Search</Form.Label>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" name="buscar" required />
                                    </Form.Group>
                                </Form.Row>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button type="submit" variant="outline-primary">Search</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="" show={this.state.show11} onHide={this.handleClose} centered>

                    <Form action="/Filtro/SC" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Filtro Santa Cena</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="Form-registro">
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Selecionar</Form.Label>
                                        <Form.Control as="select" name="santa_cena">
                                            <option value="0">Enero</option>
                                            <option value="1">Febrero</option>
                                            <option value="2">Marzo</option>
                                            <option value="3"> Abril</option>
                                            <option value="4">Mayo</option>
                                            <option value="5">Junio</option>
                                            <option value="6">Julio</option>
                                            <option value="7">Agosto</option>
                                            <option value="8">Septiembre</option>
                                            <option value="9">Octubre</option>
                                            <option value="10">Noviembre</option>
                                            <option value="11">Diciembre</option>
                                        </Form.Control>
                                    </Form.Group>

                                </Form.Row>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button type="submit" variant="outline-primary">Search</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show12} onHide={this.handleClose} centered>

                    <Form action="/Filtro/PN" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Filtro Presentacion de Niños</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="Form-registro">
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Selecionar</Form.Label>
                                        <Form.Control as="select" name="pre_niños">
                                            <option value="ci">Ci</option>
                                            <option value="nombre">Nombre</option>
                                            <option value="apellido_paterno">Apellido</option>

                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Search</Form.Label>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" name="buscar" />
                                    </Form.Group>
                                </Form.Row>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button type="submit" variant="outline-primary">Search</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show13} onHide={this.handleClose} centered>

                    <Form action="/Filtro/Matrimonio" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Filtro Registro de Matrimonio</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="Form-registro">
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Selecionar</Form.Label>
                                        <Form.Control as="select" name="matrimonio">
                                            <option value="id_ci_esposo">Ci(Esposo)</option>
                                            <option value="id_ci_esposa">Ci(Esposa)</option>
                                            <option value="nombre_esposo">Nombre Esposo</option>
                                            <option value="nombre_esposa">Nombre Esposa</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Search</Form.Label>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" name="buscar" />
                                    </Form.Group>
                                </Form.Row>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button type="submit" variant="outline-primary">Search</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show14} onHide={this.handleClose} centered>

                    <Form action="/Filtro/Usuario" method="post" >
                        <Modal.Header closeButton>
                            <Modal.Title>Buscar Encargado</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="Form-registro">
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Selecionar</Form.Label>
                                        <Form.Control as="select" name="usuario">
                                            <option value="Ci">Ci</option>
                                            <option value="Nombre">Nombre</option>
                                           

                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Search</Form.Label>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" name="buscar" required />
                                    </Form.Group>
                                </Form.Row>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button type="submit" variant="outline-primary">Search</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show16} onHide={this.handleClose} centered>
                    <Form action="/Editar/Iglesia" method="post" enctype="multipart/form-data">
                        <Modal.Header closeButton>
                            <Modal.Title>Administrar Página</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditarInformacion />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

                <Modal size="lg" show={this.state.show17} onHide={this.handleClose} centered>
                    <Form action="/Modificar/Membresia" method="post" enctype="multipart/form-data">
                        <Modal.Header closeButton>
                            <Modal.Title>Modificar perfil</Modal.Title>
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
                <Modal size="lg" show={this.state.show18} onHide={this.handleClose} centered>
                    <Form action="/Registrar/Actividad" method="post" enctype="multipart/form-data">
                        <Modal.Header closeButton>
                            <Modal.Title>Registrar Actividad</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <RegistrarActividad/>
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

export default Menu_Admi;

/*
<Nav.Link onClick={this.handleShow_SC} style={menu} className="menu-letra">REG. SANTA CENA</Nav.Link>
                            <Nav.Link onClick={this.handleShow_Pre} style={menu} className="menu-letra">REG. NIÑOS</Nav.Link>
                            <Nav.Link onClick={this.handleShow_Matrimonio} style={menu} className="menu-letra">REG. MATRIMONIO</Nav.Link>
-------------------------------------
<NavDropdown className="menu-letra" title="ACTIVIDADES" id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={this.handleShow_RegistrarActividad} className="menu-letra">REG. ACTIVIDAD</NavDropdown.Item>
                                <NavDropdown.Item href={"/Iglesia/" + window.datos.Iglesia._id + "/accion_social/"} className="menu-letra">VER ACTIVIDADES</NavDropdown.Item>
                                <NavDropdown.Item href={"/Iglesia/" + window.datos.Iglesia._id + "/poa/"} className="menu-letra">VER TODAS LAS ACTIVIDADES</NavDropdown.Item>
                            </NavDropdown>
-------------------------------
<NavDropdown.Item onClick={this.handleShow_filtro_SC}>SANTA CENA</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.handleShow_filtro_PN}>NIÑOS</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.handleShow_filtro_Matrimonio}>MATRIMONIO</NavDropdown.Item>
------------------------------
                                <NavDropdown.Item onClick={this.handleShow_Transferido}>REG. DE TRANSFERIDOS</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.handleShow_Disciplina}>REG. DE DISCIPLINAS</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.handleShow_Restauracion}>REG. DE RESTAURACIÓN</NavDropdown.Item>

------------------
                                <option value="estado">Estado</option>
                            */