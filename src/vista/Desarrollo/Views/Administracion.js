import React from 'react';
import Menu_adm from '../Componentes/Administracion_vista/Menu/Menu_adm';
import Fondo from '../Componentes/Administracion_vista/Backgroud/backgroud';
import Sobre_nosotros from '../Componentes/Administracion_vista/Contenido/Sobre_nosotros';
import Galeria_adm from '../Componentes/Administracion_vista/Galeria/galeria';
import Slider from '../Componentes/Administracion_vista/Galeria/Slider';
import Footer_Contenido from '../Componentes/Inicio_vista/texto_inicio/texto_3';
import Footer from '../Componentes/Inicio_vista/texto_inicio/footer_black';
import 'bootstrap/dist/css/bootstrap.min.css';
class Administracion extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu_adm/>
                <Fondo/>
                <Sobre_nosotros/>
                <Galeria_adm/>
                <Slider/>
                <Footer_Contenido/>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Administracion;

