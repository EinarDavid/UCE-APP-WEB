import React from 'react';
class Formulario extends React.Component {
  render() {
    return (
      <div>
        <div className="backgroud-Fondo-Puma">
          <div className="title-Fondo">
            <div className="titulo-Fondo">
              <h1>Sistema SysCopy</h1>
            </div>
          </div>
        </div>

        <div className="texto_quienes_somos">
          <div className="Encabezado_principal">
            <h2>Unión Cristiana Evangélica</h2><br></br>
            <h3>“SIRVIENDO AL SEÑOR DESDE 1950”<br></br></h3>
            <p>A nivel nacional y desde 1979 en la Iglesia Evangélica Sebastián Pagador (IESP)</p>
          </div>
          <div className="mision_vision">
            <div className="mision">
              <div className="titulo_izquierda">
                <h2>MISIÓN</h2>
              </div>
              <div className="titulo_derecha">
                <p>"Honrar a Dios evangelizando, discipulando y
                demostrando amor a todo ser humano, para que
                tengan vida nueva y estén preparados para toda
                buena obra."</p>
              </div>
            </div>
            <div className="vision">
              <div className="titulo_izquierda">
                <h2>VISIÓN</h2>
              </div>
              <div className="titulo_derecha">
                <p>"Somos discípulos al servicio de Dios desarrollando
                y aplicando nuestros dones y talentos e involucrados
                en el bienestar de la sociedad."
              </p>
              </div>

            </div>
          </div>

          <h4>LA (IESP) IGLESIA EVANGÉLICA SEBASTIÁN PAGADOR ESTÁ AFILIADA A LA UNIÓN CRISTIANA EVANGÉLICA (U.C.E.) CON PERSONERÍA JURÍDICA Nº68486,Y SE CONSTITUYE EN REFERENTE ENTRE LAS IGLESIAS EN BOLIVIA</h4>
          <br></br><br></br><br></br><br></br>
        </div>

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

      </div>


    );
  }
}
export default Formulario;

/*

//Vista-Inicio-Puma
.backgroud-Fondo-Puma{
    width: 100%;
    height: 100vh;
  
    background-image: url(/img/Iglefondo.png);
    background-attachment: fixed;
      background-position: center;
      background-size: cover;
      position: relative;
      overflow: hidden;
      color: #fff;
      text-align: center;
  }
  //Letra de fondo
  .title-Fondo{
    margin: 0 auto;
    
      text-align: center;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
  }
  .titulo-Fondo{
    position: relative;
    animation: fadeup .4s ease-out;
    
  }
  .titulo-Fondo h1{
   
    font-family: 'Adelia Regular' !important;
      font-size: 37pt;
      text-align: center;
      color: #fff;
      letter-spacing: -.02em;
      margin-top: -28px;
  }

//contenido
.texto_quienes_somos{
    text-align: center;
      position: relative;
      padding-top: 10%;
      background-color: #412850;
      height: auto;   
  }
  .Encabezado_principal h2{
    color:#FFB01A;
    font-size: 37pt;
    font-family: 'Adelia Regular' !important;
  }
  .Encabezado_principal h3{
    font-family: 'Gotham Bold' !important;
    color:#FFF;
    font-size: 25pt;
    
  }
  .Encabezado_principal p{
    color:#fff;
    font-family: 'Gotham Book' !important;
    font-size: 12pt;
  }
  .texto_quienes_somos h4{
    color:#fff;
    font-family: 'Gotham Book' !important;
    font-size: 8pt;
    width: 50%;
    margin: auto;
    margin-top: 300px;
    position: relative;
    
  }
  .mision_vision{
    width: 60%;
    height: auto;
    margin: auto;
    position: relative;
    margin-top: 100px;
   
  }
  
  .mision{
 
    width:48%;
    float: left;
  }
  .titulo_izquierda{
    float: left;
   
    width:30%;
    
  }
  .titulo_derecha{
    float: right;
    width:67%;
  }
  .titulo_izquierda h2{
    float: right;
    margin-top: 30px;
    
    font-family: 'Gotham Bold' !important;
    font-size: 25pt;
    color: #E1B400;
  }
  .titulo_derecha p{
  
    float:right;
    text-align: left;
    color:#fff;
    font-family: 'Gotham Book' !important;
    font-size: 12pt;
  }
  .vision{

    width:48%;
    float: right;
  }
  // Galeria de Imagenes
  .contenedor-imagenes-galeria{
    width: 100%;
  }
  .contenedor-imagenes-galeria ul{
    list-style: none;
      display: flex;
      width: 100%;
      position: relative;
      margin: 0;
      padding: 0;
  }
  
  .galeria {
    width: 100%;
    overflow: hidden;
    display: flex;
    position: relative;
    flex-wrap: wrap; 
    transform: scale(1,1);  
    transition: all .3s ease-in-out; 
    
  }
  .imagenes {
    width: 25%;
    transform: scale(1,1);  
    position: relative;  
    filter: grayscale(1); 
  }
  
  .imagenes img {
    width: 100%; 
    transform: scale(1,1); 
  }
  .imagenes:hover{
    filter: grayscale(0);
  }




*/