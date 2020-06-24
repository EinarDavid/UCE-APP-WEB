import React from 'react';

function Texto_3() {
    return (
      <div className="texto_quienes_somos_3" id="Horario/Servicio">  
        <div className="Encabezado_3">
          <h2>Horarios de Servicio</h2>
                  <div className="horario">
                    <div className="horario_left">
                        <h3>MARTES</h3>
                            <p>• 20:00 Servicio de Oración</p>
                        <h3>JUEVES</h3>
                            <p>• 14:00 Sociedad Femenil<br></br>
                            • 20:00 Estudio Bíblico</p>
                        <h3>VIERNES</h3>
                            <p>• 19:30 Ministerio Pre-juvenil</p>
                        <h3>SÁBADO</h3>
                            <p>• 20:00 Sociedad Juvenil</p>
                    </div>
                    <div className="horario_right">
                        <h3>DOMINGO</h3>
                            <p>
                            {window.datos.Iglesia.Horario}
                            </p>
                    </div>
                  </div>
        </div>
        
      </div>
     
    );
  }
  export default Texto_3;