import '../component/AboutMe.css'
import ParticlesBack from './config/ParticlesBack'
import Typewriter from 'typewriter-effect'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ExpSlider from './ExpSlider'
import ContactCard from '../component/ContactCards/ContactCard';

const AboutMe = () => {
  return (
    <>
    <div className='particles-cont'>
        <ParticlesBack />
    </div>
      <div className='about-container'>
        <div className="particlesheader">
          <h2>Más sobre mí</h2>
        </div>
        <div className="textcont">
          <h3>Sobre mi</h3><br />
          <p><mark>
            <b>¡Hola!</b>
          </mark><br />
            Me alegra que te tomes el tiempo de hacer clic en mis proyectos. Estoy aprendiendo programación por mi cuenta a través de Google y tutoriales de YouTube, así como algunos cursos, estoy particularmente interesado en HTML, CSS, JavaScript y con React.
            <br />
            <br />
            <mark>Skills:</mark><br />
            HTML, CSS, JavaScript y React estoy aprendiendo por mi cuenta, con la ayuda de Google, compañeros de trabajo y amigos. JavaScript me entusiasma especialmente, mis próximos pasos serán aprender express y Mongodb.</p><br />
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
        </div>
        <div className="textcont">
          <div className="imgcont">
            <img src={'https://media.licdn.com/dms/image/D4D35AQGU7rvZdrQb9g/profile-framedphoto-shrink_200_200/0/1711478836290?e=1716231600&v=beta&t=j78ql08PVo_YDe10auijEE2aHWsEiU82QtOS7SI3SIk'} />
          </div>
        </div>
      </div>
      <div className='about-container'>
        <div className="particlesheader">
          <h2>Experiencia</h2>
        </div>
        <div className="textcont">
          <h3>Experiencia profesional...</h3><br />
          <p>Experiencia profesional:
            En los últimos meses, he podido adquirir experiencia en el servicio de asistencia técnica, donde he tenido la oportunidad de conocer diferentes sistemas y encontrar soluciones a diversos problemas informáticos. También pude adquirir experiencia en los lenguajes PHP y XML, así como en varios scripts y trabajé con SQL y MySQL a diario.
            </p><br />
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
        <ContactCard />
      </div>
      <ExpSlider />
    </>
  )
}
export default AboutMe