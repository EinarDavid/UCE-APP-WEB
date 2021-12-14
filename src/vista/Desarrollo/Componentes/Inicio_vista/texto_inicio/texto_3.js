import React from 'react';

function Texto_3() {
  return (
    <div className="texto_quienes_somos_3" id="Horario/Servicio">
      <div className="Encabezado_3">
        <h2>Horarios de Servicio</h2>
        <div className="horario">
          <div className="horario_left">
            <h3>LUNES</h3>
            <p>{window.datos.Iglesia.Horario_Lunes}</p>
            <h3>MARTES</h3>
            <p>{window.datos.Iglesia.Horario_Martes}</p>
            <h3>MIÉRCOLES</h3>
            <p>{window.datos.Iglesia.Horario_Miercoles}</p>
            <h3>JUEVES</h3>
            <p>{window.datos.Iglesia.Horario_Jueves}</p>
          </div>
          <div className="horario_right">
            <h3>VIERNES</h3>
            <p>{window.datos.Iglesia.Horario_Viernes}</p>
            <h3>SÁBADO</h3>
            <p>{window.datos.Iglesia.Horario_Sabado}</p>
            <h3>DOMINGO</h3>
            <p>{window.datos.Iglesia.Horario}</p>
          </div>
        </div>
      </div>

    </div>

  );
}
export default Texto_3;