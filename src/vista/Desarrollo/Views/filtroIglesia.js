import React from 'react'
import { FiltroIglesia } from '../Componentes/Administracion/filtros/FiltroIglesia';
import Menu_Admi from '../Componentes/Administracion/menu_adm'
import Fondo from '../Componentes/Administracion_vista/Backgroud/backgroud';

class filtroIglesia extends React.Component {
    render() {
        return (

            <React.Fragment>
                {/* <Menu_Admi/> */}
                {/* <Fondo /> */}
                <FiltroIglesia />

            </React.Fragment>

        )
    }
}
export default filtroIglesia;
