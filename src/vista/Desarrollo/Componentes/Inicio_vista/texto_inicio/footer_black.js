import React from 'react';




function Footer_black() {
    return (
       
        <div className="footer">
          <div className="footer_redes_sociales">
            <h4>
              
              <a href={window.datos.Iglesia.Facebook}></a>&nbsp;
              <a href={'https://api.whatsapp.com/send?phone=591' + window.datos.Iglesia.NumeroCelular}></a>&nbsp;
              <a href={'mailto:' + window.datos.Iglesia.Correo}></a>
            </h4>
          </div>
          <div className="footer_copyright">
            <h5>© COPYRIGHT QODE INTERACTIVE</h5>
          </div>
      </div>
      
     
    );
  }
  export default Footer_black;