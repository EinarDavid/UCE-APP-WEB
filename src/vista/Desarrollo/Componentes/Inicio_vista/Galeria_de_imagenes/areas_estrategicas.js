import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck, Card, Button } from 'react-bootstrap';

function Areas_Estrategicas() {
    return (
        <div className="fondo_area_estrategica" id="Area/Estrategica">
            <div className="texto_area_estrategica">
                <div>
                    <h2>Áreas Estratégicas</h2>
                    <p>Conoce los servicios que brinda la Iglesia Sebastian Pagador UCE</p>
                </div>
            </div>
            <CardDeck bsPrefix="card-deck-area">

                <Card bsPrefix="card-area">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card.Img src="/img/Logos/SJLC.png" bsPrefix="imagen_area_estrategica" />
                            <Card.Body bsPrefix="card-body">
                                <Card.Title bsPrefix="titulo_area_estrategica">MINISTERIAL</Card.Title>
                            </Card.Body>
                        </div>
                        <div className="flip-card-back">
                            
                        </div>
                    </div>
                </Card>

                <Card bsPrefix="card-area">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card.Img src="/img/Logos/DEM.png" bsPrefix="imagen_area_estrategica" />
                            <Card.Body bsPrefix="card-body">
                                <Card.Title bsPrefix="titulo_area_estrategica">EVANGELISMO<br></br>Y MISIONES</Card.Title>
                            </Card.Body>
                        </div>
                        <div className="flip-card-back">
                            
                        </div>
                    </div>
                </Card>

                <Card bsPrefix="card-area">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card.Img src="/img/Logos/ISP.png" bsPrefix="imagen_area_estrategica" />
                            <Card.Body bsPrefix="card-body">
                                <Card.Title bsPrefix="titulo_area_estrategica">ACCIÓN<br></br>SOCIAL</Card.Title>
                            </Card.Body>
                        </div>
                        <div className="flip-card-back">
                            
                        </div>
                    </div>
                </Card>

                <Card bsPrefix="card-area">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card.Img src="/img/Logos/Camping.png" bsPrefix="imagen_area_estrategica" />
                            <Card.Body bsPrefix="card-body">
                                <Card.Title bsPrefix="titulo_area_estrategica">EDUCACIÓN<br></br>CRISTIANA</Card.Title>
                            </Card.Body>
                        </div>
                        <div className="flip-card-back">
                            
                        </div>
                    </div>
                </Card>
                <Card bsPrefix="card-area">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card.Img src="/img/Logos/ED.png" bsPrefix="imagen_area_estrategica" />
                            <Card.Body bsPrefix="card-body">
                                <Card.Title bsPrefix="titulo_area_estrategica">ADMINISTRACIÓN</Card.Title>
                            </Card.Body>
                        </div>
                        <div className="flip-card-back">
                            
                        </div>
                    </div>
                </Card>

            </CardDeck>
            <br></br>
        </div>

    );
}
export default Areas_Estrategicas;

//<Button href="/ministerial" variant="outline-dark">MAS INFORMACIÓN</Button>