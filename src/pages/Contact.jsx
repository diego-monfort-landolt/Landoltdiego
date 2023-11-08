
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import '../pages/Home.css'
import weg from '../images/camino.jpg'
import ContactCard from '../component/ContactCards/ContactCard';

export const Contact = () => {
  return (
    <>
      <div className='text-section'>
        <h2>Contact</h2>

      </div>
      <div className='texto'>
        <img src={weg} className='contactimg' alt='un caretera en la naturaleza con nubes' />
        <h3>Contacta me</h3><br />

        <p>Me encanta el trabajo remoto y creo que somos mas productivos, trabajando desde un sitio que nos sentimos bien.

          Sie me quieres contactar te dejo mis enlaces de github y LinkedIn
          hasta pronto y gracias por tu tiempo
          <br />
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
        <ContactCard />
      </div>

    </>
  )
}
