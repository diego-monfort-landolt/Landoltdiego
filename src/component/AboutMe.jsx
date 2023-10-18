import React, { useState } from 'react'
import '../component/AboutMe.css'
import ParticlesBack from './config/ParticlesBack'
import Carusel from './Carusel'
import Typewriter from 'typewriter-effect'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";





const AboutMe = () => {



  return (

    <>
      <ParticlesBack />
      <div className='about-container'>
        <div className="particlesheader">
          <h2>More About Me</h2>

        </div>
        <div className="textcont">
          <h3>Zu mir</h3><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error praesentium alias aperiam, laboriosam doloremque numquam. Quisquam corporis alias delectus veritatis repellendus eaque, aspernatur reprehenderit aliquid repellat amet cupiditate iste dicta omnis fugit. Minus hic perspiciatis vero laudantium. Placeat praesentium quasi, porro harum cum dolor perspiciatis voluptate! Doloremque expedita sapiente iste veniam debitis totam, ab sunt doloribus laudantium saepe commodi at est voluptatum ipsum, harum perferendis, sequi fuga corrupti consequatur ullam accusamus. Earum praesentium alias natus quia ad tempora repellat, doloribus dolorum similique libero fuga hic maxime, modi esse laudantium tempore! Repellendus nobis officia dolorum cumque nulla, cupiditate eveniet eos?</p><br />
          <p className='lasttext'>
            <Typewriter
              options={{
                strings: ['{ ¡ Your Welcome here ! }'],
                autoStart: true,
                loop: true,

              }}
            /></p>
        </div>
      </div>
     

      <div className='about-container'>
         <div className="particlesheader">
          <h2>More About Me</h2>

        </div>
        <div className="textcont">

          <h3>More...</h3><br />

          <p>¡Me apasiona React y estoy completamente enamorado del mundo de la tecnología! Estoy buscando activamente oportunidades de empleo como programador y me preguntaba si podrías darme una mano en mi búsqueda.</p><br />
          <p className='lasttext'>
            <Typewriter
              options={{
                strings: ['{ ¡ Visit me on GitHub or LinkedIn !  }'],
                autoStart: true,
                loop: true,

              }}
            /></p>
          <div className='iconBox'>
            <a href='https://github.com/diego-monfort-landolt'>
              <AiFillGithub color='red' size='50px' />
            </a>
            <a href='https://www.linkedin.com/in/diego-monfort-landolt/'>
              <AiFillLinkedin size='50px' color='red' />
            </a>

          </div>

        </div>


      </div>

      <Carusel />

    </>
  )
}

export default AboutMe