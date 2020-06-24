import React from 'react';

import Menu from '../Componentes/Inicio_vista/Menu/Menu_Principal';
import Fondo from '../Componentes/Accion_Social/Backgroud/backgroud';
import Sobre_nosotros from '../Componentes/Accion_Social/Contenido/Sobre_nosotros';

import Slider from '../Componentes/Accion_Social/Galeria/Slider';
import Footer_Contenido from '../Componentes/Inicio_vista/texto_inicio/texto_3';
import Footer from '../Componentes/Inicio_vista/texto_inicio/footer_black';
import Actividades from '../Componentes/Actividades/Actividades';
import Galeria from '../Componentes/Actividades/Galeria'
class Administracion extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <Fondo/>
                <Actividades/>
                <Galeria/>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Administracion;

// <Slider/><Galeria/>  <Footer_Contenido/>
//<Sobre_nosotros/>