import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bild1 from '../images/hinter.jpg'
import bild2 from '../images/curbi.jpg'
import bild3 from '../images/mont.jpg'


const Carusel = () => {
  return (
    <>
         <Carousel  className='carusel-section'>
                <div>
                    <img src={bild1} />
                    <p className="legend">DiegoDev</p>
                    
                </div>
                <div>
                    <img src={bild2}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={bild3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    
    
    
    </>
  )
}

export default Carusel