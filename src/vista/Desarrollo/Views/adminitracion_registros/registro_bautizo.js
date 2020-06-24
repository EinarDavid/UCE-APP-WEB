import React from 'react';
import Menu_adm from './../../Componentes/Administracion/menu_adm';
import Formulario from './../../Componentes/Administracion/formulario/registro_bautizo';
import Fondo from './../../Componentes/Administracion_vista/Backgroud/backgroud';
import Galeria from './../../Componentes/Administracion_vista/Galeria/galeria';
import MenuEncargado from './../../Componentes/Menus/MenuAdministrador';
import 'bootstrap/dist/css/bootstrap.min.css';

class Registro_Bautizo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu_adm/>
                <Fondo/>
            </React.Fragment>
        );
    }
}
export default Registro_Bautizo;