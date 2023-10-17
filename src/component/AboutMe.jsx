import React from 'react'
import '../component/AboutMe.css'
import ParticlesBack from './config/ParticlesBack'
import Carusel from './Carusel'






const AboutMe = () => {

  return (
    
    <>
  <ParticlesBack />
      <div className='about-container'>
        <div className="particlesheader">
          <h2>More About Me</h2>
          
        </div>
       
      </div>
 <Carusel />

    </>
  )
}

export default AboutMe