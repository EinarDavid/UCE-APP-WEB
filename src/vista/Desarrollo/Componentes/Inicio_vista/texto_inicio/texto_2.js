import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



function Texto_2() {
  return (
    <div className="texto_quienes_somos_2" id="Responsabilidad/Social">
      <div className="Encabezado_2">
        <h2>Responsabilidad Social</h2>
        <br></br>
        <div className="Res-Social-Des">
          <p>{window.datos.Iglesia.ResSocial}</p>
        </div>
        
        <div className="pastores">
          <div className="pastores_titulo">
            <h3>PASTORES</h3>
          </div>
          <div className="pastores_contenido">
            <p> {window.datos.Iglesia.Pastores}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Texto_2;

/*
<div className="Inf_clubes">
          <div className="Inf_clubes_div">
            <p>Los clubes se reúnen semanalmente, cada reunión está dividida en tres tiempos o periodos:</p>
          </div>
          <div className="Inf_clubes_cont">
            <p>
              - Juegos (actividades físicas)<br></br>
              - tiempo manual (aprendizaje de la palabra de Dios)<br></br>
              - reunión conjunta (se reúnen para escuchar todos un mensaje bíblico)
            </p>
          </div>
        </div>
        <div className="niveles_rangos">
          <div className="niveles_rangos_titulo">
            <h3>NIVELES & RANGOS</h3>
          </div>
          <div className="niveles_rangos_contenido">
            <p>
              Ositos.- 4 a 5 años de edad<br></br>
              Chispas.- 1º y 2º grado de escuela<br></br>
              Llamas.- 3º y 4º grado de escuela<br></br>
              Antorchas.- 5º y 6º grado de escuela<br></br>
              Juvenil.- 7º y 9º grado de escuela<br></br>
              Expedicion.- bachilleres y universitarios
            </p>
          </div>
        </div>
*/