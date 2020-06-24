import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function Galeria() {
  return (
    //style={{height: '400px'}}

    <div className="contenedor-imagenes-galeria">
      <ul className="galeria">
        <li className="imagenes"> <img src='/img/galeria/1.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/2.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/3.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/4.jpg' alt=""></img></li>
      </ul>
      <ul className="galeria">
        <li className="imagenes"> <img src='/img/galeria/5.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/6.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/7.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/8.jpg' alt=""></img></li>
      </ul>
    </div>
  );
}
export default Galeria;

