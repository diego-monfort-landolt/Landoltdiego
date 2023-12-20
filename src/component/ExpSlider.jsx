import '../component/ExpSlider.css' // Prüfen fals
import Bild1 from '../images/html.png'
import Bild2 from '../images/css.png'
import Bild3 from '../images/js.png'
import Bild4 from '../images/node.png'
import Bild5 from '../images/atom.png'

const ExpSlider = () => {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={Bild1} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild2} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild3} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild4} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild5} alt='html img' />
          </div>

          <div className="slide">
            <img src={Bild1} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild2} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild3} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild4} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild5} alt='html img' />
          </div>

          <div className="slide">
            <img src={Bild1} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild2} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild3} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild4} alt='html img' />
          </div>
          <div className="slide">
            <img src={Bild5} alt='html img' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpSlider