import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';


function ControlledCarousel() {
    return (
        //style={{height: '400px'}}

        <div className="">
            <Carousel>
                {
                    window.datos.Iglesia.FotosSlider.map((a) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src= {'/fotos/Iglesias/' + a}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            )
                        })
                   
               }
            </Carousel>

        </div>
    );
}
export default ControlledCarousel;
  //'/img/Fotos Slider/College-Home-Header11.jpg'


