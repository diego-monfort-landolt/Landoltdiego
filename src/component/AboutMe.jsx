import React, { useState } from 'react'
import '../component/AboutMe.css'
import ParticlesBack from './config/ParticlesBack'
import Carusel from './Carusel'
import Typewriter from 'typewriter-effect'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";





const AboutMe = ({ title, description }) => {


  return (

    <>
      <ParticlesBack />
      <div className='about-container'>
        <div className="particlesheader">
          <h2>About Me</h2>
        </div>
        <div className="textcont">
          <h3>Zu mir</h3><br />
          <p><mark>
            <b>¡Hola!</b>
          </mark><br/>
            Me alegra que te tomes el tiempo de hacer click en mis proyectos. Estoy aprendiendo programación por mi cuenta a través de Google y tutoriales de YouTube, así como algunos cursos, estoy particularmente interesado en HTML, CSS y JavaScript y me gustaría empezar con React pronto. Tengo una personalidad muy afín a la informática. En mi tiempo libre me gusta estar en la naturaleza y explorar nuevas rutas de senderismo con mi fiel compañera Amy (mi perra).

            <br />
            <br />
            <mark>Skills:</mark><br />
            HTML, CSS, JavaScript y React estoy aprendiendo por mi cuenta, con la ayuda de Google, compañeros de trabajo y amigos. JavaScript me entusiasma especialmente, mis próximos pasos serán aprender express y Mongodb.Me llevo bien con los sistemas operativos Windows y Linux, también con Apple - pero mi enfoque es Windows.</p><br />
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

          <p>Experiencia profesional:
            En los últimos meses, he podido adquirir experiencia en el servicio de asistencia técnica, donde he tenido la oportunidad de conocer diferentes sistemas y encontrar soluciones a diversos problemas informáticos. También pude adquirir experiencia en los lenguajes PHP y XML, así como en varios scripts y trabajé con SQL y MySQL a diario. Me gustó mucho este trabajo, sin embargo, decidí dejarlo, porque sólo tenía servicios los fines de semana. Sería feliz si pudiera seguir en la dirección del desarrollo web.

            Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator</p><br />
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