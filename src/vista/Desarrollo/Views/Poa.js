import React from 'react';

import Menu_Adm from '../Componentes/Administracion/menu_adm';
import Poa from '../Componentes/Administracion/Poa/poa';
import Imagen_fondo from '../Componentes/Accion_Social/Backgroud/backgroud';
import { GraficoActividad } from '../Componentes/Administracion/filtros/GraficoActividad';
import { GraficosActividades } from '../Componentes/Administracion/Poa/GraficosActividades';


class Filtros extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <Menu_Adm/>
                {/* <Imagen_fondo/> */}
                <GraficosActividades/>
                <Poa/>
                
            </React.Fragment>
        );
    }
}
export default Filtros;

