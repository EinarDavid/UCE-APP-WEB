import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck, Card } from 'react-bootstrap';


function Imagen_fondo_Avanzada() {
    return (  
        <div className="backgroud-avanzada">
            <div className ="title-avanzada">
                <h1>Nuestras Avanzadas</h1>
                <p>Conoce a algunas de nuestras avanzadas</p>
            </div>
          <div>
          <CardDeck bsPrefix= "card-deck-avanzada">
            <Card bsPrefix = "card-avanzada">
            <Card.Img  src='/img/ca.jfif' bsPrefix="imagen_avanzada" />
            <Card.Body bsPrefix="card-body-avanzada">
            <Card.Title bsPrefix="titulo-avanzada-igle">SANTA BARBARA</Card.Title>
            </Card.Body>
            </Card>
            <Card bsPrefix = "card-avanzada">
            <Card.Img  src='/img/ca.jfif' bsPrefix="imagen_avanzada" />
            <Card.Body bsPrefix="card-body-avanzada">
            <Card.Title bsPrefix="titulo-avanzada-igle">LOMAS DE PAGADOR</Card.Title>
            </Card.Body>
            </Card>
            <Card bsPrefix = "card-avanzada">
            <Card.Img  src='/img/ca.jfif' bsPrefix="imagen_avanzada" />
            <Card.Body bsPrefix="card-body-avanzada">
            <Card.Title bsPrefix="titulo-avanzada-igle">TUNEL DEL ABRA</Card.Title>
            </Card.Body>
            </Card>
      </CardDeck>
          </div>   
        </div>
    );
  }
  export default  Imagen_fondo_Avanzada;