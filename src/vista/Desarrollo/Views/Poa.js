import React from 'react';

import Menu_Adm from '../Componentes/Administracion/menu_adm';
import Poa from '../Componentes/Administracion/Poa/poa';
import Imagen_fondo from '../Componentes/Accion_Social/Backgroud/backgroud';


class Filtros extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <Menu_Adm/>
                <Imagen_fondo/>
                <Poa/>
                
            </React.Fragment>
        );
    }
}
export default Filtros;

