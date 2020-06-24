import React from 'react';
import { Form, Col, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Formulario extends React.Component {
  render() {
    return (
      <div className="Contenedor-Principal">
        <div className="Form-Contenedor-Puma">
          <div className="Form-Puma-Image">
            <img src='/img/galeria/1.jpg'></img>
          </div>
          <div className="Contenedor-Derecha">
            <div className="Form-Puma">
              <Form action="#" method="post">
                <h2 className="Form-Puma-Center">Inicar Sesion</h2>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" placeholder="Codigo" name="ci" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                  </Form.Group>
                </Form.Row>
                <div className="Form-Puma-Center">
                  <Button type="submit" variant="dark">Iniciar Sesion</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Formulario;


/*
.Contenedor-Principal{
  

  width: 100%;
  height: 100vh;
  
  
  background-image: url(/img/Igle.jpg);
  background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    color: #fff;
    
}
.Form-Contenedor-Puma{
  height: 550px;
  position: relative;
  justify-content: center;
  width: 70%;
  margin: auto;
  margin-top: 120px;
  
  
}
.Form-Puma{
  background: rgb(243, 111, 33, .8);
  position: relative;
  color: #fff;
  padding-top: 140px;
  padding-left: 120px;
  padding-right: 120px;
  width: 100%;
  height: 100%;
  float: right;
}
.Form-Puma-Center{
  justify-content: center;
  text-align: center;
  
}
.Contenedor-Derecha{
  
  width: 60%;
  float: left;
  
  height: 550px;
}
.Form-Puma-Image{
 
  float: right;
  width: 40%;
  background-color: brown;
  height: 550px;
}
.Form-Puma-Image img{
  width: 100%;
  height: 100%;
}
*/
