import React from 'react';

import Background from '../../Componentes/Administracion/ViewModificacion/Background';
import Mision from '../../Componentes/Administracion/ViewModificacion/Texto';
import Menu from '../../Componentes/Administracion/ViewModificacion/Menu';
import Slider from '../../Componentes/Administracion/ViewModificacion/Slider';
import Galeria from '../../Componentes/Administracion/ViewModificacion/Image';
class ViewMod extends React.Component {
    render() {
        return (
            <React.Fragment> 
                <Menu/>
                <Background/>
                <Mision/>
                
                <Slider/>
                <Galeria/>

            </React.Fragment>
        );
    }
}
export default ViewMod;