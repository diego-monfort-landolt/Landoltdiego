import Typewriter from 'typewriter-effect'
import { useState, useEffect } from 'react';
import './Home.css'
import Card from '../component/Card'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ExpSlider from '../component/ExpSlider';
import Works from '../component/Works/Works';
import Time from '../component/clock/time';
import Footer from '../component/Footer';
import Popup from '../component/PopUp';
import Reviews from '../component/experience-cards/Reviews';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <div className='mainsection'>
        <Popup />
        <div className='imagesection'>
          <div className='überschrift'>
            <h2 className='under'><Typewriter
              options={{
                strings: ['Bienvenido ', 'Welcome to my Portfolio', 'Herzlich Wilkommen', '{ I m Diego }'],
                autoStart: true,
                loop: true,
              }}
            /></h2>
            <a href='https://github.com/diego-monfort-landolt'>
              <AiFillGithub color='red' size='40px' />
            </a>
            <a href='https://www.linkedin.com/in/diego-monfort-landolt/'>
              <AiFillLinkedin size='40px' color='red' />
            </a>
          </div>
        </div>
      </div >
      <main className='main'>
        <div className='main-container'>
          <h3 className={`end-header appear-animation ${isVisible ? 'visible' : ''}`}>Dale un clic... </h3>
          <Card />
        </div>
        <div className='text-section'>
          <h2>Experiencia</h2>
        </div>
        <ExpSlider />
        <Works />
        <div className='text-section'>
          <h2>Sobre mí</h2>
        </div>
        <div className='texto'>
          <p>
            ¡Hola a todos! Mi nombre es Diego y estoy emocionado de compartir un poco sobre mí y mi experiencia.

Desde siempre, me ha fascinado la tecnología y su funcionamiento. Pasaba horas frente a la computadora, explorando diferentes programas y aprendiendo todo lo que podía sobre ellos. Fue entonces cuando descubrí mi amor por la informática y su potencial para crear cosas increíbles.

A medida que crecía, mi pasión por la informática se convirtió en algo más que un simple pasatiempo. Empecé a aprender de manera autodidacta sobre el desarrollo web y rápidamente me di cuenta de que quería convertirlo en mi carrera. Me fascinaba la idea de crear sitios web interactivos y atractivos utilizando diversos lenguajes de programación.

Mi viaje como desarrollador web comenzó con HTML y CSS. Aprendí los fundamentos básicos de la estructura y el diseño de un sitio web, y pronto supe que quería profundizar en este campo. Fue entonces cuando descubrí JavaScript, un lenguaje de programación que me permitió agregar interactividad y dinamismo a mis proyectos.

Pero mi sed de conocimiento no se detuvo ahí. Quería estar al tanto de las últimas tecnologías y tendencias en el mundo del desarrollo web. Así fue como me encontré con TypeScript y React, una biblioteca de JavaScript que me permitió crear aplicaciones web de manera más eficiente y escalable.<br />
            <br />
            <mark><b>Visita mi GitHub o LinkedIn</b></mark>
          </p>
          <div className='lastsection'>
            <a href='https://github.com/diego-monfort-landolt'>
              <AiFillGithub color='red' size='50px' />
            </a>
            <a href='https://www.linkedin.com/in/diego-monfort-landolt/'>
              <AiFillLinkedin size='50px' color='red' />
            </a>
          </div>
        </div>
        <Reviews />
        <Time />
          </main>
        <Footer />
      <Outlet />
    </>
  )
}
export default Home;