import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
function Texto() {
  return (
    <div className="texto_quienes_somos" id="texto">
      <div className="Encabezado_principal">
        <h2>Unión Cristiana Evangélica</h2><br></br>
        <h3>“SIRVIENDO AL SEÑOR DESDE 1950”<br></br></h3>
        <p>{window.datos.Iglesia.Descripcion}</p>
      </div>
      <div className="mision_vision">
        <div className="mision">
          <div className="titulo_izquierda">
            <h2>MISIÓN</h2>
          </div>
          <div className="titulo_derecha">
            <p>"{window.datos.Iglesia.Mision}"</p>
          </div>
        </div>
        <div className="vision">
          <div className="titulo_izquierda">
            <h2>VISIÓN</h2>
          </div>
          <div className="titulo_derecha">
            <p>"{window.datos.Iglesia.Vision}"</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Texto;

/*   <h4>LA (IESP) IGLESIA EVANGÉLICA SEBASTIÁN PAGADOR ESTÁ AFILIADA A LA UNIÓN CRISTIANA EVANGÉLICA (U.C.E.) CON PERSONERÍA JURÍDICA Nº68486,Y SE CONSTITUYE EN REFERENTE ENTRE LAS IGLESIAS EN BOLIVIA</h4>
<br></br><br></br><br></br><br></br>


<div className="Imagen-Fondo">
        <img src='/img/Diseño/church-5184596.svg'></img>
      </div>*/