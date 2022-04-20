import React from 'react'
import Menu from '../Componentes/Menus/MenuAdministrador';
import { FiltroIglesia } from '../Componentes/Administracion/filtros/FiltroIglesia';

import Menu_Admi from '../Componentes/Administracion/menu_adm'
import Fondo from '../Componentes/Administracion_vista/Backgroud/backgroud';
import { DashboardIglesia } from '../Componentes/Administracion/filtros/DashboardIglesia';

class filtroIglesia extends React.Component {
    render() {
        return (

            <React.Fragment>
                <Menu />
                {/* <Fondo /> */}

                <DashboardIglesia />
            </React.Fragment>

        )
    }
}
export default filtroIglesia;
