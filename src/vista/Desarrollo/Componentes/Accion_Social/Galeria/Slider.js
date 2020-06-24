import React from 'react';


import { Carousel,Container,Row,Col,Image } from 'react-bootstrap';


        
function ControlledCarousel() {
    return (
      //style={{height: '400px'}}
      
      <div className="">
           <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='/img/slider_2.png'
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='/img/slider_2.png'
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='/img/slider_2.png'
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
      </div>
    );
  }
  export default ControlledCarousel;
      
      
   