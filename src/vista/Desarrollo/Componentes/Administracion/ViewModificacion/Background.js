import React from 'react';
import { Button } from 'react-bootstrap';
function Imagen_fondo() {
    return (
        <div>
            <div className="backgroud">
                <div className="title">
                    <div className="titulo">
                        <h1>Iglesia Sebastián Pagador</h1>
                        <input className="ModTexto" type="button" value="   Cambiar Texto"></input>
                    </div>
                </div>
                <video className="headervideo" loop muted autoPlay>
                    <source src="https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2020/03/26054225/VS20-DotCom-Header.mp4.mp4" type='video/mp4' />
                </video>
                
            </div>

            <div className="ContenedorFondo">
                <input className="ModFondo" type="button" value="   Cambiar Foto de Portada" />
            </div>

        </div>
    );
}
export default Imagen_fondo;
