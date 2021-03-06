import React from 'react';

import Menu from '../Componentes/Inicio_vista/Menu/Menu_Principal';
import MenuAdministrador from '../Componentes/Administracion/menu_adm';
import Imagen_fondo from '../Componentes/Inicio_vista/Backgroud/Backgroud_prin';
import Texto from '../Componentes/Inicio_vista/texto_inicio/texto';
import Areas_Estrategicas from '../Componentes/Inicio_vista/Galeria_de_imagenes/areas_estrategicas';
import Avanzadas from '../Componentes/Inicio_vista/Backgroud/Backgroud_Avanzada';
import Texto_2 from '../Componentes/Inicio_vista/texto_inicio/texto_2';
import Slider from '../Componentes/Inicio_vista/Galeria_de_imagenes/Slider';
import Footer from '../Componentes/Inicio_vista/texto_inicio/footer_black';
import Footer_Contenido from '../Componentes/Inicio_vista/texto_inicio/texto_3';
import Galeria from '../Componentes/Actividades/Galeria';
import Actividades from '../Componentes/Actividades/Actividades'

import 'bootstrap/dist/css/bootstrap.min.css';
class Inicio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MenuAdministrador/>

                <Imagen_fondo/>
                <Texto/>
                <Galeria/>
                <Actividades/>
                
                
                <Texto_2/>
                <Slider/>
                <Footer_Contenido/>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Inicio;
/*<Galeria/>
<Areas_Estrategicas/>
<Avanzadas/>
*/