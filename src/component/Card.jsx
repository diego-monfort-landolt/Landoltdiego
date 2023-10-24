import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../component/Card.css'
import Diego from '../images/diego-landolt.png'

const Card = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <div className='card-container'>

        <motion.div transition={{ layout: { duration: 1, type: 'spring' } }} layout onClick={() => setIsOpen(!isOpen)} className='card'>
          <motion.h2 layout='position'>👆 Diego Landolt 👆</motion.h2>
          {isOpen && (
            <motion.div>
              <div className="cont">
                <div className='text-cont'>
                  <p>Bienvenidos a mi nuevo portfolio, creado con React vite. espero que os guste. actualmente sigo aprendiendo react y javascript ya que quiero trabajar en este sector. echar un vistazo a mi web y si quereis contactar conmigo podeis hacerlo via linkedin o github.</p>
                  <p><b>Espero que te guste</b> </p>

                </div>
                <div className="img-cont">
                  <img className='card-diego-img' src={Diego} alt='a photo of me' />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

      </div>


    </>
  )
}

export default Card