import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function Imagen_fondo() {
  return (
    <div className="backgroud">

      <div className="title">
        <div className="titulo">
          <h1>{window.datos.Iglesia.Nombre}</h1>
        </div>
      </div>
      <video className="headervideo" loop muted autoPlay>
        <source src="/img/fondos/Video-Fondo.mp4" type='video/mp4' />
      </video>
    </div>
  );
}
export default Imagen_fondo;

/*

*/
