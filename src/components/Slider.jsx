import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img width={420} height={400}
        className="d-block w-100"
        src="./img/first.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <Link exact to ={'/form'}>
        <Button variant="primary">
          Обратная связь
        </Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={420} height={400}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={420} height={400}
        className="d-block w-100"
        src="./img/three.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider