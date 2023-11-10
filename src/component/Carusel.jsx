import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bild1 from '../images/hinter.jpg'
import bild2 from '../images/curbi.jpg'
import bild3 from '../images/mont.jpg'


const Carusel = () => {
  return (
    <>
      <Carousel width='100%' autoPlay className='carusel-section'>
        <div>
          <img src={bild1} />
        </div>
        <div>
          <img src={bild2} />
        </div>
        <div>
          <img src={bild3} />
        </div>
      </Carousel>
    </>
  )
}

export default Carusel