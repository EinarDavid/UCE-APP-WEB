import React from 'react';

import Menu from '../../Componentes/Menus/MenuAdministrador';
import Fondo from '../../Componentes/Administracion_vista/Backgroud/backgroud';
import MenuAdmiIgle from '../../Componentes/Administracion/menu_adm';


class LoginPrin extends React.Component {
    render() {
        return (
            <React.Fragment> 
                
                <Menu/>
                <Fondo></Fondo>
            </React.Fragment>
        );
    }
}
export default LoginPrin;

//<Menu/>