import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function Galeria() {
  return (
    //style={{height: '400px'}}

    <div className="contenedor-imagenes-galeria">
      <ul className="galeria">
        <li className="imagenes"> <img src='/img/galeria/13.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/14.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/15.jpg' alt=""></img></li>
        <li className="imagenes"> <img src='/img/galeria/16.jpg' alt=""></img></li>


        
      </ul>
      <ul className="galeria">
       
      </ul>
    </div>
  );
}
export default Galeria;

