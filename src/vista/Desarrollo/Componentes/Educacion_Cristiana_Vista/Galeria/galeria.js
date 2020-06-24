import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function Galeria() {
  return (
    //style={{height: '400px'}}

    <div className="contenedor-imagenes-galeria">
      <ul className="galeria">
        <li className="imagenes"> <img src='/img/galeria/21.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/22.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/23.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/24.jpg' alt=""></img></li>
      </ul>

    </div>
  );
}
export default Galeria;

