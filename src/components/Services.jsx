import React from 'react'
import {Carousel} from "react-responsive-carousel";
import imag1 from "../assets/3.jpg";
import imag2 from "../assets/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false} interval={1000}>
            
            <div >
                <img src={imag2} alt="" />
                <p className="legend">Back-End Developer</p>
            </div>
            <div >
                <img src={imag1} alt="" />
                <p className="legend">Font-End Developer</p>
            </div>
        </Carousel>

    </div>
  )
}

export default Services