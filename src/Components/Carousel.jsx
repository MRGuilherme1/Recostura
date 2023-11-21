// Carousel.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Style from "../Module/Carousel.Module.css"; // 


function Caarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/9850429/pexels-photo-9850429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTMSkDmKnvmtM-zSFX-pIG_YGC0oqx4mvAA&usqp=CAU'}"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTMSkDmKnvmtM-zSFX-pIG_YGC0oqx4mvAA&usqp=CAU'}"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caarousel;
