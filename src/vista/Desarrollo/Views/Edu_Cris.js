import React from 'react';
import Menu from '../Componentes/Inicio_vista/Menu/Menu_Principal';
import Fondo from '../Componentes/Educacion_Cristiana_Vista/Backgroud/backgroud';
import Sobre_nosotros from '../Componentes/Educacion_Cristiana_Vista/Contenido/Sobre_nosotros';
import Galeria from '../Componentes/Educacion_Cristiana_Vista/Galeria/galeria';
import Slider from '../Componentes/Educacion_Cristiana_Vista/Galeria/Slider';
import Footer_Contenido from '../Componentes/Inicio_vista/texto_inicio/texto_3';
import Footer from '../Componentes/Inicio_vista/texto_inicio/footer_black';
import 'bootstrap/dist/css/bootstrap.min.css';
class Administracion extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <Fondo/>
                <Sobre_nosotros/>
                <Galeria/>
                <Slider/>
                <Footer_Contenido/>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Administracion;

