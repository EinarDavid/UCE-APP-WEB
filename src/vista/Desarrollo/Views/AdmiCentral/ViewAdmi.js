import React from 'react';

import Menu from '../../Componentes/Menus/MenuAdministrador';

import Fondo from '../../Componentes/Administracion_vista/Backgroud/backgroud';
import MenuAdmiIgle from '../../Componentes/Administracion/menu_adm';
import BackgroundFondo from '../../Componentes/Administracion_vista/Backgroud/BackgroundAdmin';


class LoginPrin extends React.Component {
    render() {
        return (
            <React.Fragment> 
                
                <Menu/>
                <BackgroundFondo/>
            </React.Fragment>
        );
    }
}
export default LoginPrin;

//<Menu/>