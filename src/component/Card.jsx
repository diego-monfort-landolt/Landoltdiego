import { useState } from 'react'
import { motion } from 'framer-motion'
import '../component/Card.css'

const Card = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='card-container'>
        <motion.div transition={{ layout: { duration: 1, type: 'spring' } }} layout onClick={() => setIsOpen(!isOpen)} className='card'>
          <motion.h2 layout='position'>👆 Haz un <code>Clic</code> aqui 👆</motion.h2>
          {isOpen && (
            <motion.div>
              <div className="cont">
                <div className='text-cont'>
                  <p>Bienvenidos a mi portfolio, creado con React vite. Echar un vistazo a mis projectos y si quereis contactar conmigo podeis hacerlo por el formulario de contacto o los iconos de Linkedin o Github.</p>
                  <div className="img-cont">
                  <img className='card-diego-img' src={'https://avatars.githubusercontent.com/u/75099835?v=4'} alt='a photo of me' />
                </div>
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