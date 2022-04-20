import React from 'react';

import Filtro from '../Componentes/Administracion/filtros/filtros';
import Menu_Adm from '../Componentes/Administracion/menu_adm';
import Fondo from '../Componentes/Administracion_vista/Backgroud/backgroud';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiltroMembresias } from '../Componentes/Administracion/filtros/filtroMembresias';


class Filtros extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu_Adm/>
                <Fondo/>
                {/* <Filtro/> */}
                <FiltroMembresias/>
                
            </React.Fragment>
        );
    }
}
export default Filtros;

