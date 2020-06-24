import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
function Texto() {
    return (
        <div className="texto_quienes_somos">
            <div className="Encabezado_principal">
                <h2>Unión Cristiana Evangélica</h2>
                <input className="ModTexto" type="button" value="   Cambiar Texto"></input>
                <br></br>
                <h3>“SIRVIENDO AL SEÑOR DESDE 1950”<br></br></h3>
                <input className="ModTexto" type="button" value="   Cambiar Texto"></input>
                <p>A nivel nacional y desde 1979 en la Iglesia Evangélica Sebastián Pagador (IESP)</p>
                <input className="ModTexto" type="button" value="   Cambiar Texto"></input>
            </div>
            <div className="mision_vision">
                <div className="mision">
                    <div className="titulo_izquierda">
                        <h2>MISIÓN</h2>
                    </div>
                    <div className="titulo_derecha">
                        <p>"Honrar a Dios evangelizando, discipulando y demostrando amor a todo ser humano, para que tengan vida nueva y estén preparados para toda buena obra."</p>
                        <input className="ModTexto" type="button" value="   Cambiar Texto"></input>
                    </div>
                </div>
                <div className="vision">
                    <div className="titulo_izquierda">
                        <h2>VISIÓN</h2>
                    </div>
                    <div className="titulo_derecha">
                        <p>"Somos discípulos al servicio de Dios desarrollando y aplicando nuestros dones y talentos e involucrados en el bienestar de la sociedad."</p>
                        <input className="ModTexto" type="button" value="   Cambiar Texto"></input>
                    </div>

                </div>
            </div>

            <h4>LA (IESP) IGLESIA EVANGÉLICA SEBASTIÁN PAGADOR ESTÁ AFILIADA A LA UNIÓN CRISTIANA EVANGÉLICA (U.C.E.) CON PERSONERÍA JURÍDICA Nº68486,Y SE CONSTITUYE EN REFERENTE ENTRE LAS IGLESIAS EN BOLIVIA</h4>
            <input className="ModTexto" type="button" value="   Cambiar Texto"></input>
            <br></br><br></br><br></br><br></br>
            <input className="ModFondo" type="button" value="   Cambiar Imagenes del Slider" />
            
        </div>
    );
}
export default Texto;