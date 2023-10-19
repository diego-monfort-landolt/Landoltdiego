import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../component/Card.css'
import Diego from '../images/diego-landolt.png'

const Card = () => {

  const [isOpen, setIsOpen] = useState(false)
  function oldPort() {
    location.href = 'https://diego-monfort-landolt.github.io/portfoliodiegolandolt/'
  }
  return (
    <>
      <div className='card-container'>

        <motion.div transition={{ layout: { duration: 1, type: 'spring' } }} layout onClick={() => setIsOpen(!isOpen)} className='card'>
          <motion.h2 layout='position'>👆 Diego Landolt 👆</motion.h2>
          {isOpen && (
            <motion.div>
              <div className="cont">
                <div className='text-cont'>
                  <p>Buenas, el botón de abajo te llevará a mi antiguo portafolio. Mi pasión con la programación comenzó con HTML y CSS, me pareció fascinante ser capaz de generar un sitio web sólo con un poco de texto 'codigo'.
                    .</p>
                  <p><b>JavaScript y React</b> Vite aquí me enamoré...</p>

                </div>
                <div className="img-cont">
                  <img className='card-diego-img' src={Diego} alt='a photo of me' />
                </div>
              </div>
              <button onClick={oldPort} className='btn-card'>Old Portfolio</button>
            </motion.div>
          )}
        </motion.div>

      </div>


    </>
  )
}

export default Card